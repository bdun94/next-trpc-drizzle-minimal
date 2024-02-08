import { mockDeep } from 'vitest-mock-extended';

import type { DrizzleClient } from '~/server/db/client';

export const createMockDb = () => mockDeep<DrizzleClient>();
