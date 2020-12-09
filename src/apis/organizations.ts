import fetch from 'node-fetch'
import { URLSearchParams } from 'url'
import { Login } from '../internalTypes'
import { PaginatedV3, PaginatedV2, APIError, EntityV2 } from './types'
import { SpaceV2 } from './spaces'

type OrganizationV3 = {
  guid: string
  created_at: string
  updated_at: string
  name: string
  suspended: boolean
}

type OrganizationUserEntityV2 = {
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

type OrganizationUserV2 = EntityV2<OrganizationUserEntityV2>

type AddManagerEntityV2 = {
  name: string
  billing_enabled: boolean
  quota_definition_guid: string
  status: string
  quota_definition_url: string
  spaces_url: string
  domains_url: string
  private_domains_url: string
  users_url: string
  managers_url: string
  billing_managers_url: string
  auditors_url: string
  app_events_url: string
  space_quota_definitions_url: string
}

type AddmanagerV2 = EntityV2<AddManagerEntityV2>

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
        const list = (await listResponse.json()) as PaginatedV3<OrganizationV3>

        return list
      }
      const error = (await listResponse.json()) as APIError
      return error
    },
    spaces: async (organization: string, qs?: any) => {
      const params = new URLSearchParams(qs)
      const usersResponse = await fetch(
        `${endpoint}/v2/organizations/${organization}/spaces?${params}`,
        {
          headers: {
            Authorization: `Bearer ${auth.access_token}`,
          },
        },
      )
      if (usersResponse.ok && usersResponse.status === 200) {
        const list = (await usersResponse.json()) as PaginatedV2<SpaceV2>

        return list
      }
      const error = (await usersResponse.json()) as APIError
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
          const list = (await usersResponse.json()) as PaginatedV2<OrganizationUserV2>

          return list
        }
        const error = (await usersResponse.json()) as APIError
        return error
      },
    },
    managers: {
      add: async (organization: string, username: string) => {
        const addManagerResponse = await fetch(
          `${endpoint}/v2/organizations/${organization}/managers`,
          {
            method: 'PUT',
            headers: {
              Authorization: `Bearer ${auth.access_token}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              username,
            }),
          },
        )

        if (addManagerResponse.ok && addManagerResponse.status === 201) {
          const addManager = (await addManagerResponse.json()) as AddmanagerV2

          return addManager
        }
        const error = (await addManagerResponse.json()) as APIError
        return error
      },
    },
  }
}

export { organizations, OrganizationV3, OrganizationUserV2 }
