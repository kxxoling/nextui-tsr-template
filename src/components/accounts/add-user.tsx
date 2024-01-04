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

export const AddUser = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div>
      <form>
        <Button onPress={onOpen} color='primary'>
          Add User
        </Button>

        <Modal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          placement='top-center'
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className='flex flex-col gap-1'>
                  Add User
                </ModalHeader>
                <ModalBody>
                  <Input label='Email' variant='bordered' name='email' />
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
              </>
            )}
          </ModalContent>
        </Modal>
      </form>
    </div>
  );
};
