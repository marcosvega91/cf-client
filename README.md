# cf-http-client

I have made this project to make it possible to interact with Cloud Foundry platform using their APIs.

The library uses both [V3](https://v3-apidocs.cloudfoundry.org/) and [V2](https://apidocs.cloudfoundry.org/15.0.0/) version of APIs because some services are only available in the V2 version.

## Available APIs

For now I have implemented only a few APIs. The ones that I need

1. Get the list of all organizations
2. Get the list of users for an organization
3. Get the list of all spaces
4. Add a manager to an organization

## Installation

With npm

```bash
npm install --save cf-http-client
```

With yarn

```bash
yarn install cf-http-client
```

## Usage

```ts
import { cf } from 'cf-http-client'

const client = await cf('YOUR_ENDPOINT').login('USERNAME', 'PASSWORD')

const organizations = await client.organizations.list()
```
