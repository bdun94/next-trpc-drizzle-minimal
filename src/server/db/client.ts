import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

import { DATABASE_URL } from '~/../settings';
import * as userSchema from '~/schema/user';

/**
 * The SQL client for the application
 */
const sql = postgres(DATABASE_URL, {
  idle_timeout: 60,
});

/**
 * Drizzle database query builder client
 */
export const db = drizzle(sql, {
  schema: {
    ...userSchema,
  },
});

export type DrizzleClient = typeof db;
