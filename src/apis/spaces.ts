import fetch from 'node-fetch'
import { URLSearchParams } from 'url'
import { Login } from '../internalTypes'
import { PaginatedV3, APIError } from './types'

type SpaceV2 = {
  metadata: {
    guid: string
    created_at: string
    updated_at: string
    name: string
  }
  entity: {
    name: string
    organization_guid: string
    space_quota_definition_guid: null | string
    isolation_segment_guid: null | string
    allow_ssh: boolean
    organization_url: string
    developers_url: string
    managers_url: string
    auditors_url: string
    apps_url: string
    routes_url: string
    domains_url: string
    service_instances_url: string
    app_events_url: string
    events_url: string
    security_groups_url: string
    staging_security_groups_url: string
  }
}

type SpaceV3 = {
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
        const list = (await listResponse.json()) as PaginatedV3<SpaceV2>

        return list
      }
      const error = (await listResponse.json()) as APIError
      return error
    },
  }
}

export { spaces, SpaceV3, SpaceV2 }
