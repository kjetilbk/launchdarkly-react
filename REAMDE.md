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
import { useVariation } from "@spacemakerai/launchdarkly-react";

const Component = () => {
  const feature = useVariation(CLIENT_ID, USER, "feature", false);

  return (
    <>
      <h1>My Component</h1>
      {feature && <p>My feature flagged feature</p>}
    </>
  );
};
```

## Hacking

To run a playground environment, set up with the Spacemaker `launchdarkly-react` project (client ID:
`5cca878ff65c62082a9b3378`), run the following command:

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
