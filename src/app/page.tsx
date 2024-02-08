import { services } from '~/app/_utils/service-provider';
import { HomeBanner } from '~/app/HomeBanner';

export default async function Page() {
  const result = await services.userService.getUsers();

  return (
    <main className="w-screen h-screen flex justify-center items-center flex-col">
      <HomeBanner />
      {result.map((user, index) => (
        <div key={index}>{user.name}</div>
      ))}
    </main>
  );
}
