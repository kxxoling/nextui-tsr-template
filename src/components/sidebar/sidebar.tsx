import { Avatar, Tooltip } from '@nextui-org/react';
import { Link, useRouter } from '@tanstack/react-router';
import { Atom, MapPin, Scale, ScrollText, Settings, Users } from 'lucide-react';

import { CollapseItems } from './collapse-items';
import { Sidebar } from './sidebar.styles';
import { SidebarItem } from './sidebar-item';
import { SidebarMenu } from './sidebar-menu';
import { useSidebarContext } from '../layout/layout-context';

const company = {
  name: 'NextUI + TSR',
  location: (
    <div className='flex gap-1 items-center'>
      <MapPin width={16} />
      Beijing, cn
    </div>
  ),
  logo: <Atom />,
};

export const SidebarWrapper = () => {
  const router = useRouter();
  const pathname = router.state.location.pathname;
  const { collapsed, setCollapsed } = useSidebarContext();

  return (
    <aside className='h-screen z-[202] sticky top-0'>
      {!collapsed ? (
        <div className={Sidebar.Overlay()} onClick={setCollapsed}>
          sidebar handle
        </div>
      ) : null}
      <div className={Sidebar({ collapsed: collapsed })}>
        <div className={Sidebar.Header()}>
          <Link to='/dashboard'>
            <div className='flex items-center gap-2'>
              {company.logo}
              <div className='flex flex-col gap-4'>
                <h3 className='text-xl font-medium m-0 text-default-900 -mb-4 whitespace-nowrap'>
                  {company.name}
                </h3>
                <span className='text-xs font-medium text-default-500'>
                  {company.location}
                </span>
              </div>
            </div>
          </Link>
        </div>
        <div className='flex flex-col justify-between h-full'>
          <div className={Sidebar.Body()}>
            <SidebarMenu title='Main Menu'>
              <SidebarItem
                isActive={pathname === '/dashboard/accounts'}
                title='Accounts'
                icon={<Users />}
                href='/dashboard/accounts'
              />

              <CollapseItems
                icon={<Scale />}
                items={['Banks Accounts', 'Credit Cards', 'Loans']}
                title='Balances'
              />
            </SidebarMenu>

            <SidebarMenu title='Updates'>
              <SidebarItem
                isActive={pathname === '/changelog'}
                title='Changelog'
                icon={<ScrollText />}
                href='/'
              />
            </SidebarMenu>
          </div>
          <div className={Sidebar.Footer()}>
            <Tooltip content='Settings' color='primary'>
              <Link to='/dashboard/profile' className='max-w-fit'>
                <Settings />
              </Link>
            </Tooltip>

            <Tooltip content='Profile' color='primary'>
              <Avatar
                src='https://avatars.githubusercontent.com/u/1227139?v=4#a042581f4e29026704d'
                size='sm'
              />
            </Tooltip>
          </div>
        </div>
      </div>
    </aside>
  );
};
