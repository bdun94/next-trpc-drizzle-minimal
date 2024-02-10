# Next.js + tRPC + Drizzle

This is a starter project for using [Next.js](https://nextjs.org/docs) + [tRPC](https://trpc.io/docs) + [Drizzle](https://orm.drizzle.team/docs/overview) as the main stack.

It's built on top of the following example projects:

- [TRPC Next Minimal Starter Example](https://github.com/trpc/trpc/tree/next/examples/next-minimal-starter)
- [TRPC Next 13 App POC](https://github.com/devietti/trpc-next13-app)

## Features

- [Next.js](https://nextjs.org/docs) app router with [RSC](https://nextjs.org/docs/app/building-your-application/rendering/server-components) support
- [React Query tRPC integration](https://trpc.io/docs/client/react/setup) for client components
- Basic User models for [NextAuth.js](https://next-auth.js.org/) authentication
- [Drizzle Kit](https://orm.drizzle.team/kit-docs/overview) convenience commands
- [Tailwind styling](https://tailwindcss.com/)
- [Vitest](https://vitest.dev/)
- [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) formatting
- Local postgres docker setup
- Fully ESM Compatible

## Setup

### Create a new project

Using pnpm as an example, create a new project with the [create-next-app CLI](https://nextjs.org/docs/pages/api-reference/create-next-app)

```bash
pnpm dlx create-next-app --example https://github.com/bdun94/next-trpc-drizzle-minimal  $PROJECT_NAME
cd $PROJECT_NAME
pnpm install
```

### Prepare local environment

To set up a local postgres DB in docker seeded with data

```bash
docker-compose up -d
pnpm migrate
pnpm seed
```

## Development

### Start project

To start the dev server

```bash
pnpm dev        # starts next.js
```

### Create migrations

To create migrations after making a model change run the migration script using [drizzle migration tools](https://orm.drizzle.team/kit-docs/overview#running-migrations)

```bash
pnpm migrate
```
