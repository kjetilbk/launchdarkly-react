# Spacemaker Launchdarkly React Typescript

An alternative to (`@spacemakerai/ldclient-react`)[https://github.com/spacemakerai/spacemaker-launchdarkly],
written in TypeScript (with TypeScript definition files) using React Hooks.

Changelog: [CHANGELOG.md](CHANGELOG.md)

## Usage

Install:

```bash
$ yarn install @spacemakerai/launchdarkly-react
```

Usage:

```tsx
import React from "react";
import { useVariation, createClient } from "@spacemakerai/launchdarkly-react";

const Component = () => {
  const client = createClient(clientId);
  const user = {
    key: "foo@bar.com",
    email: "foo@bar.com"
  };
  const feature = useVariation(client, USER, "feature", false);

  return (
    <>
      <h1>My Component</h1>
      {feature && <p>My feature flagged feature</p>}
    </>
  );
};
```

## Deployng

Update `CHANGELOG.md` and build:

```bash
$ yarn bulid
```

Add to stage:

```bash
$ git add .
```

Create a new version and publish to NPM registry:

```
$ yarn publish
```

Push your changes:

```
$ git push origin master
$ git push --tags
```

## Hacking

To run a playground environment, run the following command:

```bash
$ CLIENT_ID=<your-client-id> yarn start
```

Server is then available at `http://localhost:8080/`.

To build, run the following command:

```bash
$ yarn build
```

To verify formatting:

```bash
$ yarn prettier:check
```

To fix formatting:

```bash
$ yarn prettier:write
```

To run the tests:

```bash
$ yarn test
```
