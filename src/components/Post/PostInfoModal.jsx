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
import { MdOutlineTextsms } from 'react-icons/md';

const PostInfoModal = ({ postInfo = '', model = '' }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLargerThan480] = useMediaQuery('(min-width: 480px)');
  return (
    <>
      <Tooltip hasArrow label="Post text">
        <IconButton
          onClick={onOpen}
          icon={<MdOutlineTextsms />}
          aria-label="Post text"
          variant="customOutIB"
        />
      </Tooltip>
      <Modal
        isOpen={isOpen}
        isCentered={isLargerThan480}
        onClose={onClose}
        bgColor="sectionBG"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textTransform="uppercase">
            {model.length ? model : 'No model'}
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
