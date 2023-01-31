import React, { useRef } from 'react';
import {
  Flex,
  IconButton,
  keyframes,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Text,
} from '@chakra-ui/react';
import { useClearNotifiMutation } from 'redux/auth/authApiSlice';
import { useGetNotifiQuery } from 'redux/auth/authApiSlice';
import {
  MdOutlineNotificationsActive,
  MdOutlineNotifications,
  MdDeleteOutline,
} from 'react-icons/md';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';
import Toast from 'components/Toast/Toast';

const ringsBell = keyframes`
   20%, 100% {
    transform: rotate(0);
  }
  0% {
    transform: rotate(10deg);
  }
  10% {
    transform: rotate(-10deg);
  }
	`;

const NotifiPopover = () => {
  const username = useSelector(authSelectors.userName)?.split(' ')[0];
  const initialFocusRef = useRef();
  const { addToast } = Toast();
  const [clearNotifi, { isLoading }] = useClearNotifiMutation();
  const { data } = useGetNotifiQuery();
  const { notifi } = data || {};

  const clearNotifiHandler = async () => {
    try {
      const { data, error } = await clearNotifi();
      if (error)
        return addToast({ message: error.data.message, type: 'error' });
      addToast({ message: data.message, type: 'success' });
    } catch (error) {
      addToast({ message: error.message, type: 'error' });
    }
  };

  const isNotifi = notifi?.count > 0;

  return (
    <>
      <Popover returnFocusOnClose={false} initialFocusRef={initialFocusRef}>
        <PopoverTrigger position="relative">
          <IconButton
            variant="customIB"
            aria-label="Notification"
            fontSize="24px"
            animation={isNotifi && `${ringsBell} 2s infinite linear`}
            icon={
              isNotifi ? (
                <MdOutlineNotificationsActive />
              ) : (
                <MdOutlineNotifications />
              )
            }
          />
        </PopoverTrigger>
        <PopoverContent bg="sectionBG" borderColor="borderColor">
          <PopoverArrow
            bg="sectionBG"
            outlineColor="borderColor"
            borderLeft="1px solid"
            borderTop="1px solid"
            mt="-1px"
            borderColor="borderColor"
            boxShadow="none"
          />
          <PopoverCloseButton
            ref={initialFocusRef}
            _hover={{ color: 'secondaryTextColor' }}
          />
          <PopoverHeader borderColor="borderColor" fontWeight="700">
            Notifications:
          </PopoverHeader>
          <PopoverBody>
            {notifi?.count > 0 ? (
              <Flex
                p="10px"
                bg="sidebarActiveLinkBG"
                color="white"
                borderRadius="5px"
              >
                <Text>
                  Hi, {username}! Clients added {notifi?.count} new offers!
                  Please review them.
                </Text>
                <IconButton
                  isLoading={isLoading}
                  variant="customIB"
                  fontSize="22px"
                  color="secondaryTextColor"
                  aria-label="Clear notifications"
                  icon={<MdDeleteOutline />}
                  onClick={() => clearNotifiHandler()}
                />
              </Flex>
            ) : (
              <>No new notifications!</>
            )}
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default NotifiPopover;
