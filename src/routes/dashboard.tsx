import { NextUIProvider } from '@nextui-org/react';
import { FileRoute, Outlet } from '@tanstack/react-router';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

import { Layout } from '@/components/layout/layout';

function DashboardComponent() {
  return (
    <NextThemesProvider defaultTheme='dark' attribute='class' enableSystem>
      <NextUIProvider>
        <Layout>
          <Outlet />
        </Layout>
      </NextUIProvider>
    </NextThemesProvider>
  );
}

export const Route = new FileRoute('/dashboard').createRoute({
  component: DashboardComponent,
});
