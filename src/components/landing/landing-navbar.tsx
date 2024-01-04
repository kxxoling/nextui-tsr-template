import { Button, Image } from '@nextui-org/react';
import { Link } from '@tanstack/react-router';

import react from '@/assets/react.svg';

export const LandingNavbar = () => {
  return (
    <nav className='p-4 bg-transparent flex items-center justify-between'>
      <Link to='/' className='flex items-center'>
        <div className='relative h-8 w-8 mr-4'>
          <Image alt='Logo' src={react} />
        </div>
        <h1 className='text-2xl font-bold text-white '>NextUI-TSR-Starter</h1>
      </Link>
      <div className='flex items-center gap-x-2'>
        <Link to='/dashboard'>
          <Button variant='bordered' className='rounded-full premium'>
            Get Started
          </Button>
        </Link>
      </div>
    </nav>
  );
};
