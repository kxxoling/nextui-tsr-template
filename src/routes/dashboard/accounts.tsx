import { FileRoute } from '@tanstack/react-router';

import { Accounts } from '@/components/accounts';

function DashboardAccounts() {
  return <Accounts />;
}

export const Route = new FileRoute('/dashboard/accounts').createRoute({
  component: DashboardAccounts,
});
