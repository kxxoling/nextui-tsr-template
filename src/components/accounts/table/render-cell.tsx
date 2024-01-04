import { Chip, Tooltip, User } from '@nextui-org/react';
import { Link } from '@tanstack/react-router';
import { Eye, Pencil, X } from 'lucide-react';

import { users } from './data';
import { EditUser } from '../edit-user';

type User = (typeof users)[number];
interface Props {
  user: User;
  columnKey: 'actions' | keyof User;
}

const statusColorMap = {
  active: 'success',
  paused: 'danger',
  vacation: 'warning',
} satisfies Record<string, 'success' | 'danger' | 'warning'>;
type Key = keyof typeof statusColorMap;

export const RenderCell = ({ user, columnKey }: Props) => {
  const cellValue = columnKey !== 'actions' ? user[columnKey] : undefined;

  switch (columnKey) {
    case 'name':
      return (
        <User
          avatarProps={{
            src: 'https://avatars.githubusercontent.com/u/1227139?v=4#a04258114e29026702d',
          }}
          name={
            <Link
              to='/dashboard/accounts/$accountId'
              params={{ accountId: String(user.id) }}
            >
              {cellValue}
            </Link>
          }
        />
      );
    case 'role':
      return (
        <div>
          <div>
            <span>{cellValue}</span>
          </div>
          <div>
            <span>{user.team}</span>
          </div>
        </div>
      );
    case 'status':
      return (
        <Chip size='sm' variant='flat' color={statusColorMap[cellValue as Key]}>
          <span className='capitalize text-xs'>{cellValue}</span>
        </Chip>
      );

    case 'actions':
      return (
        <div className='flex items-center gap-4 '>
          <div>
            <Tooltip content='Details'>
              <button onClick={() => console.log('View user', user.id)}>
                <Eye size={20} />
              </button>
            </Tooltip>
          </div>
          <div>
            <EditUser user={user}>
              <Tooltip content='Edit user' color='secondary'>
                <Pencil size={20} />
              </Tooltip>
            </EditUser>
          </div>
          <div>
            <Tooltip
              content='Delete user'
              color='danger'
              onClick={() => console.log('Delete user', user.id)}
            >
              <button>
                <X size={20} color='#FF0080' />
              </button>
            </Tooltip>
          </div>
        </div>
      );
    default:
      return cellValue;
  }
};
