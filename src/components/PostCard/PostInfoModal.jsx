/* eslint-disable react/prop-types */
import {
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Tooltip,
  useDisclosure,
  useMediaQuery,
} from '@chakra-ui/react';
import BtnClickAnim from 'components/Animations/BtnClickAnim';
import { MdMode, MdOutlineTextsms } from 'react-icons/md';

const PostInfoModal = ({ postInfo = '', model = '', setOpen }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLargerThan480] = useMediaQuery('(min-width: 480px)');

  const editPostHandler = () => {
    setOpen(true);
    onClose();
  };
  return (
    <>
      <BtnClickAnim>
        <Tooltip hasArrow bg="gray.300" color="black" label="Post text">
          <IconButton
            onClick={onOpen}
            icon={<MdOutlineTextsms />}
            aria-label="Post text"
            variant="customOutIB"
          />
        </Tooltip>
      </BtnClickAnim>
      <Modal
        isOpen={isOpen}
        isCentered={isLargerThan480}
        onClose={onClose}
        bgColor="sectionBG"
        size="xl"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader
            textTransform="uppercase"
            display="flex"
            gap="10px"
            alignItems="center"
          >
            {model.length ? model : 'No model'}
            <IconButton
              icon={<MdMode />}
              fontSize="20px"
              aria-label="Edit post button"
              variant="customIB"
              onClick={editPostHandler}
            />
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody p="10px 30px 30px 30px">
            {postInfo.length ? (
              <div dangerouslySetInnerHTML={{ __html: postInfo }} />
            ) : (
              'Sorry, but something went wrong...'
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default PostInfoModal;
