import { cf } from '..'

function setup() {
  return cf('https://api.cf.eu10.hana.ondemand.com').login('username', 'password')
}

export { setup }
