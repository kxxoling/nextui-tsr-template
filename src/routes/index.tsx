import { FileRoute } from '@tanstack/react-router';

import { LandingHero } from '@/components/landing/landing-hero';
import { LandingNavbar } from '@/components/landing/landing-navbar';

export const Route = new FileRoute('/').createRoute({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <main className='min-h-screen h-full bg-[#111827] overflow-auto'>
      <div className='mx-auto max-w-screen-xl h-full w-full'>
        <div className='h-full '>
          <LandingNavbar />
          <LandingHero />
        </div>
      </div>
    </main>
  );
}
