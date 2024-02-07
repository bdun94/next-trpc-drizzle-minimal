# Next.js + tRPC + Drizzle

This is a starter project for a Next.js + tRPC + Drizzle stack. It includes an example
of a react server component and a client component using tanstack query/trpc integration hooks.

It's built on top of the following examples:
- [TRPC Next Minimal Starter Example](https://github.com/trpc/trpc/tree/next/examples/next-minimal-starter)
- [TRPC Next 13 App POC](https://github.com/devietti/trpc-next13-app)

And initialized with user models that integrate with [NextAuth.js](https://next-auth.js.org/) authentication

## Setup

```bash
npx create-next-app --example https://github.com/trpc/trpc --example-path examples/next-minimal-starter trpc-minimal-starter
cd trpc-minimal-starter
npm i
npm run dev
```

## Development

### Start project

```bash
npm run dev        # starts next.js
```
