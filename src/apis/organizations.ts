import fetch from 'node-fetch'
import { URLSearchParams } from 'url'
import { Login } from '../internalTypes'
import { PaginatedV3, PaginatedV2, APIError } from './types'

type Organization = {
  guid: string
  created_at: string
  updated_at: string
  name: string
  suspended: boolean
}

type OrganizationUser = {
  metadata: {
    guid: string
    url: string
    created_at: string
    updated_at: string
  }
  entity: {
    admin: boolean
    active: boolean
    default_space_guid: null | string
    username: string
    spaces_url: string
    organizations_url: string
    managed_organizations_url: string
    audited_organizations_url: string
    managed_spaces_url: string
    audited_spaces_url: string
  }
}

function organizations(auth: Login, endpoint: string) {
  return {
    list: async (qs?: any) => {
      const params = new URLSearchParams(qs)
      const listResponse = await fetch(`${endpoint}/v3/organizations?${params}`, {
        headers: {
          Authorization: `Bearer ${auth.access_token}`,
        },
      })

      if (listResponse.ok && listResponse.status === 200) {
        const list = (await listResponse.json()) as PaginatedV3<Organization>

        return list
      }
      const error = (await listResponse.json()) as APIError
      return error
    },
    users: {
      all: async (organization: string, qs?: any) => {
        const params = new URLSearchParams(qs)
        const usersResponse = await fetch(
          `${endpoint}/v2/organizations/${organization}/users?${params}`,
          {
            headers: {
              Authorization: `Bearer ${auth.access_token}`,
            },
          },
        )
        if (usersResponse.ok && usersResponse.status === 200) {
          const list = (await usersResponse.json()) as PaginatedV2<OrganizationUser>

          return list
        }
        const error = (await usersResponse.json()) as APIError
        return error
      },
    },
  }
}

export { organizations, Organization, OrganizationUser }