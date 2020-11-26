import fetch from 'node-fetch'
import { URLSearchParams } from 'url'
import { Info, Login, Links, APIKeys } from './internalTypes'
import { organizations } from './apis'

const cf = (endpoint: string) => {
  return {
    login: async (username: string, password: string) => {
      const infoResponse = await fetch(`${endpoint}/v2/info`)
      const info = (await infoResponse.json()) as Info

      const endpointsResponse = await fetch(`${endpoint}/v3`)
      const endpoints = (await endpointsResponse.json()) as Links

      const loginResponse = await fetch(`${info.authorization_endpoint}/oauth/token`, {
        method: 'POST',
        headers: {
          Authorization: 'Basic Y2Y6',
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          client_id: 'cf',
          username,
          password,
          grant_type: 'password',
        }),
      })
      if (loginResponse.status !== 200) {
        throw new Error(loginResponse.statusText)
      }
      const login = (await loginResponse.json()) as Login

      return {
        [APIKeys.organizations]: organizations(login, endpoints.links.organizations.href),
      }
    },
  }
}

export { cf }
