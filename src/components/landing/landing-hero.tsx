import { Button } from '@nextui-org/react';
import { Link } from '@tanstack/react-router';
import TypewriterComponent from 'typewriter-effect';

const title = 'Another React starter template.';
const content = "Let's have a happy start!";
const typeWriterStrings = [
  'React.js + Vite',
  'FileRouter by TanStack Router',
  'Stylish components by NextUI',
  'Data fetching with React Query',
];

export const LandingHero = () => {
  return (
    <div className='text-white font-bold py-36 text-center space-y-5'>
      <div className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold'>
        <h1>{title}</h1>
        <div className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
          <TypewriterComponent
            options={{
              strings: typeWriterStrings,
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className='text-sm md:text-xl font-light text-zinc-400'>
        {content}
      </div>
      <div>
        <Link to='/dashboard'>
          <Button className='btn btn-premium md:text-lg p-4 md:p-6 rounded-full font-semibold'>
            Take Me to Dashboard
          </Button>
        </Link>
      </div>
    </div>
  );
};
