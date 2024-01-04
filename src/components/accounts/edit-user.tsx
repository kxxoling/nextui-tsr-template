import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from '@nextui-org/react';

type User = {
  id: number;
  name: string;
  role: string;
  team: string;
  status: string;
  age: string;
  avatar: string;
  email: string;
};
type Props = {
  user: User;
  children: React.ReactElement;
};
export const EditUser = ({ children, user }: Props) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div>
      <>
        <Button onPress={onOpen} isIconOnly>
          {children}
        </Button>

        <Modal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          placement='top-center'
        >
          <ModalContent>
            {(onClose) => (
              <form>
                <ModalHeader className='flex flex-col gap-1'>
                  Edit User
                </ModalHeader>
                <ModalBody>
                  <Input
                    label='Email'
                    variant='bordered'
                    name='email'
                    defaultValue={user.name}
                  />
                  <div className='flex gap-2'>
                    <Input label='First Name' variant='bordered' />
                    <Input label='Last Name' variant='bordered' />
                  </div>
                  <Input label='Password' type='password' variant='bordered' />
                  <Input
                    label='Confirm Password'
                    type='password'
                    variant='bordered'
                  />
                </ModalBody>
                <ModalFooter>
                  <Button color='danger' variant='flat' onClick={onClose}>
                    Close
                  </Button>
                  <Button color='primary' onPress={onClose}>
                    Add User
                  </Button>
                </ModalFooter>
              </form>
            )}
          </ModalContent>
        </Modal>
      </>
    </div>
  );
};
