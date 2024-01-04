import { FileRoute } from '@tanstack/react-router';

import { Content } from '@/components/home/content';

function DashboardIndexComponent() {
  return <Content />;
}

export const Route = new FileRoute('/dashboard/').createRoute({
  component: DashboardIndexComponent,
});
