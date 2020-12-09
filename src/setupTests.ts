import { server } from './tests/server'

beforeEach(() =>
  server.listen({
    onUnhandledRequest: 'error',
  }),
)

afterEach(() => server.resetHandlers())

afterAll(() => server.close())
