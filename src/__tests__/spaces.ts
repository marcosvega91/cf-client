import { cf } from '..'

function setup() {
  return cf('https://api.cf.eu10.hana.ondemand.com').login('username', 'password')
}

test('should get list of spaces', async () => {
  const cfclient = await setup()
  const list = await cfclient.spaces.list()

  expect(list).toMatchObject({
    pagination: {
      total_results: 2,
      total_pages: 2,
      first: {
        href: 'https://api.cf.eu10.hana.ondemand.com/v3/spaces?page=1&per_page=1',
      },
      last: {
        href: 'https://api.cf.eu10.hana.ondemand.com/v3/spaces?page=2&per_page=1',
      },
      next: 'https://api.cf.eu10.hana.ondemand.com/v3/spaces?page=2&per_page=1',
      previous: null,
    },
  })
})

test('should pass query paramiters to the API', async () => {
  const cfclient = await setup()
  const list = await cfclient.spaces.list({
    page: 2,
  })

  expect(list).toMatchObject({
    pagination: {
      total_results: 2,
      total_pages: 2,
      first: {
        href: 'https://api.cf.eu10.hana.ondemand.com/v3/spaces?page=1&per_page=1',
      },
      last: {
        href: 'https://api.cf.eu10.hana.ondemand.com/v3/spaces?page=2&per_page=1',
      },
      next: null,
      previous: 'https://api.cf.eu10.hana.ondemand.com/v3/spaces?page=1&per_page=1',
    },
  })
})
