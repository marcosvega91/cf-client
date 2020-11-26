import { server } from './test/server'

beforeEach(() =>
  server.listen({
    onUnhandledRequest: 'error',
  }),
)

afterEach(() => server.resetHandlers())

afterAll(() => server.close())
