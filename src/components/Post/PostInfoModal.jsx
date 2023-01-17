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
} from '@chakra-ui/react';
import { MdOutlineTextsms } from 'react-icons/md';

const PostInfoModal = ({ postInfo = '', model = '' }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
      <Modal isOpen={isOpen} isCentered onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{model.length ? model : 'No model'}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {postInfo.length ? postInfo : 'Sorry, but something went wrong...'}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default PostInfoModal;
