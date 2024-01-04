import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
  NavbarItem,
} from '@nextui-org/react';
import { BellDot } from 'lucide-react';

const notifications = [
  {
    title: '📣 Edit your information',
    description:
      'Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.',
  },
  {
    title: '🚀 Say goodbye to paper receipts!',
    description:
      'Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.',
  },
  {
    title: '📣 Edit your information',
    description:
      'Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.',
  },
];

export const NotificationsDropdown = () => {
  return (
    <Dropdown placement='bottom-end'>
      <DropdownTrigger>
        <NavbarItem>
          <BellDot />
        </NavbarItem>
      </DropdownTrigger>
      <DropdownMenu className='w-80' aria-label='Avatar Actions'>
        <DropdownSection title='Notificacions'>
          {notifications.map((notification, index) => (
            <DropdownItem
              classNames={{
                base: 'py-2',
                title: 'text-base font-semibold',
              }}
              key={index}
              description={notification.description}
            >
              {notification.title}
            </DropdownItem>
          ))}
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
};
