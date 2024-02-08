import { expect, test, describe, beforeEach } from 'vitest';
import type { DeepMockProxy } from 'vitest-mock-extended';

import { createMockDb } from '~/mocks/db-mock';
import type { DrizzleClient } from '~/server/db/client';
import { UserService } from '~/server/services/user-service';

describe('UserService tests', () => {
  let mockDb: DeepMockProxy<DrizzleClient>;

  beforeEach(() => {
    mockDb = createMockDb();
  });

  test('getUsers should call db.query.users.findMany', () => {
    const userService = new UserService(mockDb);
    userService.getUsers();
    expect(mockDb.query.users.findMany).toHaveBeenCalled();
  });
});
