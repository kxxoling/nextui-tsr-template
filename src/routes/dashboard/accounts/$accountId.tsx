import { FileRoute, useParams } from '@tanstack/react-router';

function AccountComponent() {
  const { accountId } = useParams({ strict: false });
  return <div className='p-6'>Account ID: {accountId}</div>;
}

export const Route = new FileRoute(
  '/dashboard/accounts/$accountId'
).createRoute({
  component: AccountComponent,
});
