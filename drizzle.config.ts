import type { Config } from 'drizzle-kit';

import { DATABASE_URL } from 'settings';

export default {
  schema: './src/schema/*',
  out: './drizzle',
  driver: 'pg',
  dbCredentials: {
    connectionString: DATABASE_URL || '',
  },
} satisfies Config;
