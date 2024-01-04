import {
  BreadcrumbItem,
  Breadcrumbs,
  Navbar,
  NavbarContent,
} from '@nextui-org/react';
import { Link } from '@tanstack/react-router';
import { Github, Home, Menu, Users } from 'lucide-react';

import { DarkModeSwitch } from './darkmode-switch';
import { NotificationsDropdown } from './notifications-dropdown';
import { UserDropdown } from './user-dropdown';

interface Props {
  children: React.ReactNode;
}

export const NavbarWrapper = ({ children }: Props) => {
  return (
    <div className='relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden'>
      <Navbar
        isBordered
        className='w-full'
        classNames={{ wrapper: 'w-full max-w-full' }}
      >
        <NavbarContent className='md:hidden'>
          <Menu />
        </NavbarContent>

        <NavbarContent className='w-full max-md:hidden'>
          <Breadcrumbs>
            <BreadcrumbItem>
              <Home />
              <Link to='/dashboard'>
                <span>Home</span>
              </Link>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <Users />

              <Link to='/dashboard/accounts'>
                <span>Users</span>
              </Link>
            </BreadcrumbItem>
          </Breadcrumbs>
        </NavbarContent>

        <NavbarContent
          justify='end'
          className='w-fit data-[justify=end]:flex-grow-0'
        >
          <DarkModeSwitch />
          <NotificationsDropdown />
          <a href='https://github.com/kxxoling/nextui-tsr-template'>
            <Github />
          </a>
          <NavbarContent>
            <UserDropdown />
          </NavbarContent>
        </NavbarContent>
      </Navbar>
      {children}
    </div>
  );
};
