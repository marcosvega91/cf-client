import fetch from 'node-fetch'
import { URLSearchParams } from 'url'
import { Login } from '../internalTypes'
import { PaginatedV3, APIError } from './types'

type Space = {
  guid: string
  created_at: string
  updated_at: string
  name: string
}

function spaces(auth: Login, endpoint: string) {
  return {
    list: async (qs?: any) => {
      const params = new URLSearchParams(qs)
      const listResponse = await fetch(`${endpoint}/v3/spaces?${params}`, {
        headers: {
          Authorization: `Bearer ${auth.access_token}`,
        },
      })

      if (listResponse.ok && listResponse.status === 200) {
        const list = (await listResponse.json()) as PaginatedV3<Space>

        return list
      }
      const error = (await listResponse.json()) as APIError
      return error
    },
  }
}

export { spaces, Space }
