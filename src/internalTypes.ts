type Nullable<T> = T | undefined | null

type Info = {
  name: string
  build: string
  support: string
  version: number
  description: string
  authorization_endpoint: string
  token_endpoint: string
  min_cli_version?: number
  min_recommended_cli_version?: number
  app_ssh_endpoint: string
  app_ssh_host_key_fingerprint: string
  app_ssh_oauth_client: string
  doppler_logging_endpoint: string
  api_version: string
  osbapi_version: string
}

type Login = {
  access_token: string
  refresh_token: string
  expires_in: number
  scope: string
  jti: string
}

enum APIKeys {
  self = 'selft',
  app_usage_events = 'app_usage_events',
  apps = 'apps',
  audit_events = 'audit_events',
  buildpacks = 'buildpacks',
  builds = 'builds',
  deployments = 'deployments',
  domains = 'domains',
  droplets = 'droplets',
  environment_variable_groups = 'environment_variable_groups',
  feature_flags = 'feature_flags',
  info = 'info',
  isolation_segments = 'isolation_segments',
  organizations = 'organizations',
  organization_quotas = 'organization_quotas',
  packages = 'packages',
  processes = 'processes',
  resource_matches = 'resource_matches',
  roles = 'roles',
  routes = 'routes',
  security_groups = 'security_groups',
  service_brokers = 'service_brokers',
  service_instances = 'service_instances',
  service_offerings = 'service_offerings',
  service_plans = 'service_plans',
  service_usage_events = 'service_usage_events',
  spaces = 'spaces',
  space_quotas = 'space_quotas',
  stacks = 'stacks',
  tasks = 'tasks',
  users = 'users',
}

type Links = {
  links: {
    [key in APIKeys]: {
      href: string
    }
  }
}

export { Info, Login, Nullable, APIKeys, Links }
