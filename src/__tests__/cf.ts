import { cf } from '..'

function setup() {
  return cf('https://api.cf.eu10.hana.ondemand.com').login('username', 'password')
}

test('should get list of organizations', async () => {
  const cfclient = await setup()
  const list = await cfclient.organizations.list()

  expect(list).toMatchObject({
    pagination: {
      total_results: 2,
      total_pages: 2,
      first: {
        href: 'https://api.cf.eu10.hana.ondemand.com/v3/organizations?page=1&per_page=1',
      },
      last: {
        href: 'https://api.cf.eu10.hana.ondemand.com/v3/organizations?page=2&per_page=1',
      },
      next: 'https://api.cf.eu10.hana.ondemand.com/v3/organizations?page=2&per_page=1',
      previous: null,
    },
  })
})

test('should pass query paramiters to the API', async () => {
  const cfclient = await setup()
  const list = await cfclient.organizations.list({
    page: 2,
  })

  expect(list).toMatchObject({
    pagination: {
      total_results: 2,
      total_pages: 2,
      first: {
        href: 'https://api.cf.eu10.hana.ondemand.com/v3/organizations?page=1&per_page=1',
      },
      last: {
        href: 'https://api.cf.eu10.hana.ondemand.com/v3/organizations?page=2&per_page=1',
      },
      next: null,
      previous: 'https://api.cf.eu10.hana.ondemand.com/v3/organizations?page=1&per_page=1',
    },
  })
})

test('should get the list of users for a specific organization', async () => {
  const cfclient = await setup()
  const users = await cfclient.organizations.users.all('123')

  expect(users).toMatchObject({
    total_results: 2,
    total_pages: 2,
    prev_url: null,
    next_url: '/v2/organizations/123/users?order-direction=asc&page=2&results-per-page=1',
  })
})

test('should get the list of users for a specific organization and page', async () => {
  const cfclient = await setup()
  const users = await cfclient.organizations.users.all('123', {
    page: 2,
  })

  expect(users).toMatchObject({
    total_results: 2,
    total_pages: 2,
    prev_url: '/v2/organizations/123/users?order-direction=asc&page=1&results-per-page=1',
    next_url: null,
  })
})
