import { setup } from '../tests/setup'

test('should get the list of users for a specific organization', async () => {
  const cfclient = await setup()
  const users = await cfclient.organizations.users.all('real_organization')

  expect(users).toMatchObject({
    total_results: 2,
    total_pages: 2,
    prev_url: null,
    next_url:
      '/v2/organizations/real_organization/users?order-direction=asc&page=2&results-per-page=1',
  })
})

test('should get the list of users for a specific organization and page', async () => {
  const cfclient = await setup()
  const users = await cfclient.organizations.users.all('real_organization', {
    page: 2,
  })

  expect(users).toMatchObject({
    total_results: 2,
    total_pages: 2,
    prev_url:
      '/v2/organizations/real_organization/users?order-direction=asc&page=1&results-per-page=1',
    next_url: null,
  })
})

test('should not found the organization', async () => {
  const cfclient = await setup()
  const error = await cfclient.organizations.users.all('inexistent', {
    page: 2,
  })

  expect(error).toMatchObject({
    description: `organization doesn't exist`,
    error_code: 'not_exist',
    code: 9000,
  })
})
