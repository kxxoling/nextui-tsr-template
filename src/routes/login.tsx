import { FileRoute, useRouter } from '@tanstack/react-router';
import * as React from 'react';
import { z } from 'zod';

export const Route = new FileRoute('/login')
  .createRoute({
    validateSearch: z.object({
      redirect: z.string().optional(),
    }),
  })
  .update({
    component: LoginComponent,
  });

function LoginComponent() {
  const router = useRouter();
  const { auth } = Route.useRouteContext();
  const search = Route.useSearch();
  const [username, setUsername] = React.useState('');

  React.useLayoutEffect(() => {
    if (auth.status === 'loggedIn' && search.redirect) {
      router.history.push(search.redirect);
    }
  }, [auth.status, search.redirect, router.history]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    auth.login(username);
    router.invalidate();
  };

  return auth.status === 'loggedIn' ? (
    <div>
      Logged in as <strong>{auth.username}</strong>
      <div className='h-2' />
      <button
        onClick={() => {
          auth.logout();
          router.invalidate();
        }}
        className='text-sm bg-blue-500 text-white border inline-block py-1 px-2 rounded'
      >
        Log out
      </button>
      <div className='h-2' />
    </div>
  ) : (
    <div className='p-2'>
      <div>You must log in!</div>
      <div className='h-2' />
      <form onSubmit={onSubmit} className='flex gap-2'>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder='Username'
          className='border p-1 px-2 rounded'
        />
        <button
          type='submit'
          className='text-sm bg-blue-500 text-white border inline-block py-1 px-2 rounded'
        >
          Login
        </button>
      </form>
    </div>
  );
}
