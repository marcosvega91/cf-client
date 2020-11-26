import fetch from 'node-fetch'
import { URLSearchParams } from 'url'
import { Login } from '../internalTypes'
import { Paginated } from './types'

type Organization = {
  guid: string
  created_at: string
  updated_at: string
  name: string
  suspended: boolean
}

function organizations(auth: Login, endpoint: string) {
  return {
    list: async (qs?: any) => {
      const params = new URLSearchParams(qs)
      const listResponse = await fetch(`${endpoint}?${params}`, {
        headers: {
          Authorization: `Bearer ${auth.access_token}`,
        },
      })

      const list = (await listResponse.json()) as Paginated<Organization>

      return list
    },
  }
}

export { organizations, Organization }
