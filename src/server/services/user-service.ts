import { db } from '~/server/db/client';

export const getUsers = () => db.query.users.findMany();
