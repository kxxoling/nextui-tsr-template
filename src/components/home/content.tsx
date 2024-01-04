import { Link } from '@tanstack/react-router';

import { TableWrapper } from '../accounts/table/table';

export const Content = () => (
  <div className='h-full lg:px-6'>
    <div className='flex justify-center gap-4 xl:gap-6 px-4 lg:px-0  flex-wrap xl:flex-nowrap max-w-[90rem] mx-auto w-full'>
      <div className='mt-6 gap-6 flex flex-col w-full'>
        {/* Card Section Top */}
        <div className='flex flex-col gap-2'>
          <h3 className='text-xl font-semibold'>Available Balance</h3>
          <div className='grid md:grid-cols-2 grid-cols-1 2xl:grid-cols-3 gap-5  justify-center w-full'></div>
        </div>

        <div className='h-full flex flex-col gap-2'>
          <h3 className='text-xl font-semibold'>Statistics</h3>
          <div className='w-full bg-default-50 shadow-lg rounded-2xl p-6 '></div>
        </div>
      </div>

      {/* Left Section */}
      <div className='mt-4 gap-2 flex flex-col xl:max-w-md w-full'>
        <h3 className='text-xl font-semibold'>Section</h3>
        <div className='flex flex-col justify-center gap-4 flex-wrap md:flex-nowrap md:flex-col'></div>
      </div>
    </div>

    {/* Table Latest Users */}
    <div className='flex flex-col justify-center w-full py-5 px-4 lg:px-0  max-w-[90rem] mx-auto gap-3'>
      <div className='flex  flex-wrap justify-between'>
        <h3 className='text-center text-xl font-semibold'>Latest Users</h3>
        <Link
          to='/dashboard/accounts'
          params={{ accountId: '123' }}
          color='primary'
          className='cursor-pointer'
        >
          View All
        </Link>
      </div>
      <TableWrapper />
    </div>
  </div>
);
