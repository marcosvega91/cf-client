import { setup } from '../tests/setup'

test('should add an user as Manager', async () => {
  const cfclient = await setup()
  const addManagerResponse = await cfclient.organizations.managers.add(
    'real_organization',
    'real_user',
  )

  expect(addManagerResponse).toMatchObject({
    metadata: {
      guid: 'real_organization',
      url: '/v2/organizations/real_organization',
      created_at: '2016-06-08T16:41:34Z',
      updated_at: '2016-06-08T16:41:26Z',
    },
  })
})

test('should return an error if the user not exist', async () => {
  const cfclient = await setup()
  const addManagerResponse = await cfclient.organizations.managers.add(
    'real_organization',
    'not exist',
  )

  expect(addManagerResponse).toMatchObject({
    description: `The user could not be found: not exist`,
    error_code: 'CF-UserNotFound',
    code: 20003,
  })
})
