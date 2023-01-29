import {
  Box,
  Divider,
  Flex,
  IconButton,
  Text,
  Textarea,
  Tooltip,
} from '@chakra-ui/react';
import Toast from 'components/Toast/Toast';
import { useState } from 'react';
import { MdCheck, MdClose, MdModeEdit } from 'react-icons/md';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';
import { useUpdateNoteMutation } from 'redux/auth/authApiSlice';

const UserNote = () => {
  const limit = 140;
  const userNote = useSelector(authSelectors.userNote);
  const userId = useSelector(authSelectors.userId);

  const [edit, setEdit] = useState(false);
  const [note, setNote] = useState(userNote || '');
  const [count, setCount] = useState(limit - note?.length);
  const { addToast } = Toast();

  const [updateNote, { isLoading }] = useUpdateNoteMutation();

  const noteChangeHandler = e => {
    const note = e.target.value;
    setNote(note);
    setCount(limit - note.length);
  };

  const updateNoteHandler = async () => {
    try {
      const { data, error } = await updateNote({ userId, note });

      if (error)
        return addToast({ message: error.data.message, type: 'error' });

      addToast({ message: data.message, type: 'success' });
      setEdit(false);
    } catch (error) {
      addToast({ message: error.message, type: 'error' });
    }
  };

  return (
    <Box position="relative">
      <Text mb="15px" textAlign="start">
        Reminder:
      </Text>
      <Tooltip
        hasArrow
        label={edit ? 'Close edit reminder' : 'Edit reminder'}
        bg="gray.300"
        color="black"
      >
        <IconButton
          isLoading={isLoading}
          position="absolute"
          top="-8px"
          right="-5px"
          variant="customIB"
          aria-label="Edit reminder button"
          icon={edit ? <MdClose /> : <MdModeEdit />}
          onClick={() => setEdit(!edit)}
        />
      </Tooltip>
      {edit ? (
        <>
          <Textarea
            value={note}
            onChange={noteChangeHandler}
            maxLength={limit}
            p="5px 10px"
            lineHeight="1.5"
          />
          <Flex
            justifyContent="space-between"
            alignItems="center"
            gap="10px"
            px="10px"
            mt="10px"
          >
            <IconButton
              icon={<MdCheck />}
              fontSize="20px"
              size="sm"
              bg="green.700"
              borderRadius="5px"
              aria-label="Save reminder button"
              color="secondaryTextColor"
              variant="customIB"
              onClick={updateNoteHandler}
            />
            <Text
              position="absolute"
              bottom="3px"
              left="50%"
              transform="translateX(-50%)"
            >
              {count}
            </Text>
            <IconButton
              icon={<MdClose />}
              fontSize="20px"
              size="sm"
              bg="red.700"
              borderRadius="5px"
              aria-label="Close editor button"
              color="secondaryTextColor"
              variant="customIB"
              onClick={() => setEdit(false)}
            />
          </Flex>
        </>
      ) : (
        <>
          <Box
            border="1px solid"
            borderColor="borderColor"
            borderRadius="5px"
            p="5px 10px"
            position="relative"
            w="100%"
            height="122px"
            overflowY="scroll"
          >
            <Text textAlign="start" color="primaryTextColor">
              {userNote}
            </Text>
          </Box>
          <Box
            position="absolute"
            top="39px"
            right="0"
            bg="sectionBG"
            // borderBottomLeftRadius="5px"
            borderLeft="1px solid"
            borderBottom="1px solid"
            borderColor="borderColor"
            width="25px"
            height="25px"
          />
          <Divider
            position="absolute"
            width="33px"
            top="50px"
            right="-4px"
            opacity="1"
            transform="rotate(45deg)"
          />
        </>
      )}
    </Box>
  );
};

export default UserNote;
