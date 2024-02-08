'use client';

import { trpc } from '~/app/_utils/trpc';

export default function ListUsers() {
  const { data: users, isLoading, isFetching } = trpc.getUsers.useQuery();

  if (isLoading || isFetching) {
    return <p>Loading...</p>;
  }

  return (
    <div className="grid grid-cols-4 gap-20">
      {users?.map((user) => (
        <div
          key={user.id}
          className="border border-solid border-gray-300 text-center m-auto"
        >
          <img
            src={`https://robohash.org/${user.id}?set=set2&size=180x180`}
            className="h-180 w-180"
          />
          <h3>{user.name}</h3>
        </div>
      ))}
    </div>
  );
}
