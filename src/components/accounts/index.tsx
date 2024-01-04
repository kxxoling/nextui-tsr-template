import { Input } from '@nextui-org/react';

import { AddUser } from './add-user';
import { TableWrapper } from './table/table';

export const Accounts = () => {
  return (
    <div className='h-full py-4 px-2 md:px-4 lg:px-6 flex flex-col gap-4'>
      <h3 className='text-xl font-semibold'>All Accounts</h3>
      <div className='flex justify-between flex-wrap gap-4 items-center'>
        <div className='flex items-center gap-2 flex-wrap md:flex-nowrap md:w-[480px]'>
          <Input
            classNames={{ input: 'w-full', mainWrapper: 'w-full' }}
            placeholder='Search users'
          />
        </div>
        <div className='flex flex-row gap-2 flex-wrap'>
          <AddUser />
        </div>
      </div>
      <div className='max-w-[95rem] mx-auto w-full'>
        <TableWrapper />
      </div>
    </div>
  );
};
