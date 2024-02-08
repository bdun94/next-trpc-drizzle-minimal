/**
 * This is your entry point to setup the root configuration for tRPC on the server.
 * - `initTRPC` should only be used once per app.
 * - We export only the functionality that we use so we can enforce which base procedures should be used
 *
 * Learn how to create protected base procedures and other things below:
 * @link https://trpc.io/docs/v11/router
 * @link https://trpc.io/docs/v11/procedures
 */
import { initTRPC } from '@trpc/server';
import type { FetchCreateContextFnOptions } from '@trpc/server/dist/adapters/fetch/types';

import { db } from '~/server/db/client';
import { injectDependencies } from '~/server/dependency-injection';
import { transformer } from '~/utils/transformer';

export const nextCreateContext = (_opts: FetchCreateContextFnOptions) => ({
  ...injectDependencies(db),
});

export type NextContext = ReturnType<typeof nextCreateContext>;

const t = initTRPC.context<NextContext>().create({ transformer });

/**
 * Unprotected procedure
 **/
export const publicProcedure = t.procedure;

export const router = t.router;
