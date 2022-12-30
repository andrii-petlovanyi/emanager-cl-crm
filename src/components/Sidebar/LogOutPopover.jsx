/* eslint-disable react/prop-types */
import {
  Popover,
  PopoverTrigger,
  IconButton,
  PopoverContent,
  PopoverBody,
  Text,
  Box,
  Button,
  Portal,
} from '@chakra-ui/react';
import { FiLogOut } from 'react-icons/fi';

const LogOutPopover = ({ handleLogOut }) => {
  return (
    <>
      <Popover placement="bottom" variant="custom">
        {({ onClose }) => (
          <>
            <PopoverTrigger>
              <IconButton
                variant="customIB"
                aria-label="Log out user"
                icon={<FiLogOut />}
              />
            </PopoverTrigger>
            <Portal>
              <PopoverContent>
                <PopoverBody
                  display="flex"
                  gridGap="20px"
                  flexDirection="column"
                  justifyContent="center"
                  textAlign="center"
                >
                  <Text fontSize="16px">Are you sure?</Text>
                  <Box display="flex" justifyContent="space-around">
                    <Button colorScheme="red" size="sm" onClick={handleLogOut}>
                      Yes
                    </Button>
                    <Button colorScheme="green" size="sm" onClick={onClose}>
                      No
                    </Button>
                  </Box>
                </PopoverBody>
              </PopoverContent>
            </Portal>
          </>
        )}
      </Popover>
    </>
  );
};

export default LogOutPopover;
