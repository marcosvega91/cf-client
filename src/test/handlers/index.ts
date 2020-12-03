import { rest } from 'msw'

const handlers = [
  rest.get('https://api.cf.eu10.hana.ondemand.com/v2/info', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        name: '',
        build: '',
        support: '',
        version: 0,
        description: 'Cloud Foundry at SAP Cloud Platform',
        authorization_endpoint: 'https://login.cf.eu10.hana.ondemand.com',
        token_endpoint: 'https://uaa.cf.eu10.hana.ondemand.com',
        min_cli_version: null,
        min_recommended_cli_version: null,
        app_ssh_endpoint: 'ssh.cf.eu10.hana.ondemand.com:2222',
        app_ssh_host_key_fingerprint: 'TD1dRQINLi2KxilVLzAI8tXB2h8MP79oyVJnUwshjdc',
        app_ssh_oauth_client: 'ssh-proxy',
        doppler_logging_endpoint: 'wss://doppler.cf.eu10.hana.ondemand.com:443',
        api_version: '2.153.0',
        osbapi_version: '2.15',
      }),
    )
  }),

  rest.post('https://login.cf.eu10.hana.ondemand.com/oauth/token', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        access_token: 'token',
        refresh_token: 'token',
        expires_in: 10,
        scope: 'cloud_controller.write openid uaa.user password.write cloud_controller.read',
        jti: 'identifier',
      }),
    )
  }),

  rest.get('https://api.cf.eu10.hana.ondemand.com/v3', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        links: {
          self: {
            href: 'https://api.cf.eu10.hana.ondemand.com/v3',
          },
          app_usage_events: {
            href: 'https://api.cf.eu10.hana.ondemand.com/v3/app_usage_events',
          },
          apps: {
            href: 'https://api.cf.eu10.hana.ondemand.com/v3/apps',
          },
          audit_events: {
            href: 'https://api.cf.eu10.hana.ondemand.com/v3/audit_events',
          },
          buildpacks: {
            href: 'https://api.cf.eu10.hana.ondemand.com/v3/buildpacks',
          },
          builds: {
            href: 'https://api.cf.eu10.hana.ondemand.com/v3/builds',
          },
          deployments: {
            href: 'https://api.cf.eu10.hana.ondemand.com/v3/deployments',
          },
          domains: {
            href: 'https://api.cf.eu10.hana.ondemand.com/v3/domains',
          },
          droplets: {
            href: 'https://api.cf.eu10.hana.ondemand.com/v3/droplets',
          },
          environment_variable_groups: {
            href: 'https://api.cf.eu10.hana.ondemand.com/v3/environment_variable_groups',
          },
          feature_flags: {
            href: 'https://api.cf.eu10.hana.ondemand.com/v3/feature_flags',
          },
          info: {
            href: 'https://api.cf.eu10.hana.ondemand.com/v3/info',
          },
          isolation_segments: {
            href: 'https://api.cf.eu10.hana.ondemand.com/v3/isolation_segments',
          },
          organizations: {
            href: 'https://api.cf.eu10.hana.ondemand.com/v3/organizations',
          },
          organization_quotas: {
            href: 'https://api.cf.eu10.hana.ondemand.com/v3/organization_quotas',
          },
          packages: {
            href: 'https://api.cf.eu10.hana.ondemand.com/v3/packages',
          },
          processes: {
            href: 'https://api.cf.eu10.hana.ondemand.com/v3/processes',
          },
          resource_matches: {
            href: 'https://api.cf.eu10.hana.ondemand.com/v3/resource_matches',
          },
          roles: {
            href: 'https://api.cf.eu10.hana.ondemand.com/v3/roles',
          },
          routes: {
            href: 'https://api.cf.eu10.hana.ondemand.com/v3/routes',
          },
          security_groups: {
            href: 'https://api.cf.eu10.hana.ondemand.com/v3/security_groups',
          },
          service_brokers: {
            href: 'https://api.cf.eu10.hana.ondemand.com/v3/service_brokers',
          },
          service_instances: {
            href: 'https://api.cf.eu10.hana.ondemand.com/v3/service_instances',
            experimental: true,
          },
          service_offerings: {
            href: 'https://api.cf.eu10.hana.ondemand.com/v3/service_offerings',
          },
          service_plans: {
            href: 'https://api.cf.eu10.hana.ondemand.com/v3/service_plans',
          },
          service_usage_events: {
            href: 'https://api.cf.eu10.hana.ondemand.com/v3/service_usage_events',
          },
          spaces: {
            href: 'https://api.cf.eu10.hana.ondemand.com/v3/spaces',
          },
          space_quotas: {
            href: 'https://api.cf.eu10.hana.ondemand.com/v3/space_quotas',
          },
          stacks: {
            href: 'https://api.cf.eu10.hana.ondemand.com/v3/stacks',
          },
          tasks: {
            href: 'https://api.cf.eu10.hana.ondemand.com/v3/tasks',
          },
          users: {
            href: 'https://api.cf.eu10.hana.ondemand.com/v3/users',
          },
        },
      }),
    )
  }),

  rest.get('https://api.cf.eu10.hana.ondemand.com/v3/organizations', (req, res, ctx) => {
    const page = parseInt(req.url.searchParams.get('page') ?? '1', 10)
    const organization = {
      guid: 'guid',
      created_at: '2019-10-08T08:40:16Z',
      updated_at: '2020-02-18T12:37:56Z',
      name: 'org-test',
      suspended: false,
      relationships: {
        quota: {
          data: {
            guid: 'quota-guid',
          },
        },
      },
      metadata: {
        labels: {},
        annotations: {},
      },
      links: {
        self: {
          href: 'https://api.cf.eu10.hana.ondemand.com/v3/organizations/guid',
        },
        domains: {
          href: 'https://api.cf.eu10.hana.ondemand.com/v3/organizations/guid/domains',
        },
        default_domain: {
          href: 'https://api.cf.eu10.hana.ondemand.com/v3/organizations/guid/domains/default',
        },
        quota: {
          href: 'https://api.cf.eu10.hana.ondemand.com/v3/organization_quotas/guid-guid',
        },
      },
    }
    return res(
      ctx.status(200),
      ctx.json({
        pagination: {
          total_results: 2,
          total_pages: 2,
          first: {
            href: `https://api.cf.eu10.hana.ondemand.com/v3/organizations?page=1&per_page=1`,
          },
          last: {
            href: `https://api.cf.eu10.hana.ondemand.com/v3/organizations?page=2&per_page=1`,
          },
          next:
            page === 2
              ? null
              : `https://api.cf.eu10.hana.ondemand.com/v3/organizations?page=2&per_page=1`,
          previous:
            page === 1
              ? null
              : `https://api.cf.eu10.hana.ondemand.com/v3/organizations?page=1&per_page=1`,
        },
        resources: [organization],
      }),
    )
  }),

  rest.get(
    'https://api.cf.eu10.hana.ondemand.com/v2/organizations/:organization/users',
    (req, res, ctx) => {
      const page = parseInt(req.url.searchParams.get('page') ?? '1', 10)
      const { organization } = req.params
      if (organization !== 'real_organization') {
        return res(
          ctx.status(400),
          ctx.json({
            description: `organization doesn't exist`,
            error_code: 'not_exist',
            code: 9000,
          }),
        )
      }
      const user = {
        metadata: {
          guid: 'test',
          url: '/v2/users/test',
          created_at: '2017-05-12T09:24:41Z',
          updated_at: '2019-06-06T07:56:04Z',
        },
        entity: {
          admin: false,
          active: false,
          default_space_guid: null,
          username: 'user.test',
          spaces_url: '/v2/users/test/spaces',
          organizations_url: '/v2/users/test/organizations',
          managed_organizations_url: '/v2/users/test/managed_organizations',
          billing_managed_organizations_url: '/v2/users/test/billing_managed_organizations',
          audited_organizations_url: '/v2/users/test/audited_organizations',
          managed_spaces_url: '/v2/users/test/managed_spaces',
          audited_spaces_url: '/v2/users/test/audited_spaces',
        },
      }
      return res(
        ctx.status(200),
        ctx.json({
          total_results: 2,
          total_pages: 2,
          prev_url:
            page === 1
              ? null
              : `/v2/organizations/${organization}/users?order-direction=asc&page=1&results-per-page=1`,
          next_url:
            page === 2
              ? null
              : `/v2/organizations/${organization}/users?order-direction=asc&page=2&results-per-page=1`,
          resources: [user],
        }),
      )
    },
  ),
]

export { handlers }
