import chalk from 'chalk';

import { DATABASE_URL } from 'settings';
import { users } from '~/schema/user';
import { db } from '~/server/db/client';

const log = console.log;

/**
 * Seed the database with data
 */
export const seedData = async () => {
  if (!DATABASE_URL) {
    log(
      chalk.redBright(
        'The DATABASE_URL environment variable is not set, please set it before running the migrate script',
      ),
    );
    process.exit(1);
  }

  console.log(chalk.greenBright('Seeding data...'));
  try {
    await db
      .insert(users)
      .values([
        { name: 'Michael Bluth', email: 'michael@bluthcorp.com' },
        { name: 'Lindsey Bluth', email: 'lindsey@bluthcorp.com' },
        { name: 'George Bluth', email: 'george@bluthcorp.com' },
        { name: 'GOB Bluth', email: 'gob@bluthcorp.com' },
        { name: 'Buster Bluth', email: 'buster@bluthcorp.com' },
        { name: 'Lucille Bluth', email: 'lucille@bluthcorp.com' },
        { name: 'Tobias Funke', email: 'tobias@bluthcorp.com' },
        { name: 'George Michael Bluth', email: 'georgemichael@bluthcorp.com' },
        { name: 'Maeby Bluth', email: 'maeby@bluthcorp.com' },
        { name: 'Oscar Bluth', email: 'oscar@bluthcorp.com' },
      ])
      .onConflictDoNothing();
  } catch (e) {
    log(chalk.redBright('Error seeding data: ', e));
    process.exit(1);
  }

  log(chalk.greenBright('Data seeded'));
  process.exit(0);
};

seedData();
