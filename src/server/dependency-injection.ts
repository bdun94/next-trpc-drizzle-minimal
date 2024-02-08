import { DrizzleClient } from '~/server/db/client';
import { UserService } from '~/server/services/user-service';

/**
 * This function does a very simple job of constructing service classes with injected
 * dependencies
 *
 * @param db DrizzleClient DB
 * @returns an object contianing the services
 */
export const injectDependencies = (db: DrizzleClient) => ({
  userService: new UserService(db),
});
