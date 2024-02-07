import { getUsers } from '~/server/services/user-service';

export default async function Page() {
  const result = await getUsers();

  return (
    <main style={styles}>
      <div>
        <h1>Hi There</h1>
      </div>
      {result.map((user, index) => (
        <div key={index}>{user.name}</div>
      ))}
    </main>
  );
}

const styles = {
  width: '100vw',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column' as const,
};
