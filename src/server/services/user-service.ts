import type { DrizzleClient } from '~/server/db/client';

export class UserService {
  constructor(private db: DrizzleClient) {}

  getUsers() {
    return this.db.query.users.findMany();
  }
}
