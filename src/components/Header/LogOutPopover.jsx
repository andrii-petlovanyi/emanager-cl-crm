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
import { MdOutlineExitToApp } from 'react-icons/md';

const LogOutPopover = ({ handleLogOut, isLoading = false }) => {
  return (
    <>
      <Popover placement="bottom" variant="custom">
        {({ onClose }) => (
          <>
            <PopoverTrigger>
              <IconButton
                variant="customIB"
                aria-label="Log out user"
                fontSize="24px"
                icon={<MdOutlineExitToApp />}
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
                  <Text fontSize="16px" color="secondaryTextColor">
                    Are you sure?
                  </Text>
                  <Box display="flex" justifyContent="space-around">
                    <Button
                      colorScheme="red"
                      isLoading={isLoading}
                      size="sm"
                      color="secondaryTextColor"
                      bg="red.700"
                      onClick={handleLogOut}
                    >
                      Yes
                    </Button>
                    <Button
                      colorScheme="green"
                      color="secondaryTextColor"
                      bg="green.700"
                      size="sm"
                      onClick={onClose}
                    >
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
