import { Router, RouterProvider } from '@tanstack/react-router';
import ReactDOM from 'react-dom/client';
import './main.css';

import { auth } from '@/libs/auth';

import { routeTree } from '@/routeTree.gen';

// Set up a Router instance
const router = new Router({
  routeTree,
  defaultPreload: 'intent',
  defaultPendingComponent: () => <div>Loading...</div>,
  defaultErrorComponent: ({ error }) => <div>{error.message}</div>,
  context: { auth },
});

// Register things for type-safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

const rootElement = document.getElementById('root')!;

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<RouterProvider router={router} />);
}
