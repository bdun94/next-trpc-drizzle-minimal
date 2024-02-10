import { config } from 'dotenv';

config({ path: ['.env.local', '.env'] });

export const DATABASE_URL = process.env.DATABASE_URL || '';
