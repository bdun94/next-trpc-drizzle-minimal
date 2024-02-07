# Next.js + tRPC + Drizzle

This is a starter project for using [Next.js](https://nextjs.org/docs) + [tRPC](https://trpc.io/docs) + [Drizzle]() as the main stack.

It includes an example of a react server component and a client component using tanstack query/trpc integration hooks.


It's built on top of the following examples:
- [TRPC Next Minimal Starter Example](https://github.com/trpc/trpc/tree/next/examples/next-minimal-starter)
- [TRPC Next 13 App POC](https://github.com/devietti/trpc-next13-app)

and includes user models that integrate with [NextAuth.js](https://next-auth.js.org/) authentication

## Setup

### Prerequisites

### Create a new project

This starter project uses pnpm, to create a new project with the [create-next-app CLI](https://nextjs.org/docs/pages/api-reference/create-next-app)

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
