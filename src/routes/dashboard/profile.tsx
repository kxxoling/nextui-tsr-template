import { FileRoute } from '@tanstack/react-router';

import { auth } from '@/libs/auth';

import { Profile } from '@/components/profile/profile';

function ProfileComponent() {
  return (
    <div className='p-2'>
      <div>Hello, {auth.username}</div>
      <Profile />
    </div>
  );
}

export const Route = new FileRoute('/dashboard/profile').createRoute({
  component: ProfileComponent,
});
