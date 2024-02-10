import chalk from 'chalk';
import { drizzle } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import postgres from 'postgres';

import { DATABASE_URL } from 'settings';

const log = console.log;

const runMigrate = async () => {
  if (!DATABASE_URL) {
    log(
      chalk.redBright(
        'The DATABASE_URL environment variable is not set, please set it before running the migrate script',
      ),
    );
    process.exit(1);
  }
  const sql = postgres(DATABASE_URL, { max: 1 });
  try {
    const db = drizzle(sql);
    log(chalk.greenBright('Running migrations...'));
    await migrate(db, { migrationsFolder: 'drizzle' });
    await sql.end();
    log(chalk.greenBright('Migrations complete'));
    process.exit(0);
  } catch (error) {
    log(chalk.redBright('Error running migrations:'), error);
    await sql.end();
    process.exit(1);
  }
};

runMigrate();
