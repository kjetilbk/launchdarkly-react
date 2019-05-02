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

```ts

import

useFeatureFlag()
```

## Hacking

To run a playground environment, set up with the Spacemaker `launchdarkly-react` project (client ID:
`5cca878ff65c62082a9b3378`), run the following command:

```bash
$ yarn start
```

Server is then available at `http://localhost:8080/`.

To build, run the following command:

```bash
$ yarn build
```

To verify formatting:

```bash
$ yarn prettier
```

To run the tests:

```bash
$ yarn test
```
