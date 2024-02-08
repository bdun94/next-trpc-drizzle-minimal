import { db } from '~/server/db/client';
import { injectDependencies } from '~/server/dependency-injection';

export const services = injectDependencies(db);
