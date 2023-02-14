/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  useMediaQuery,
} from '@chakra-ui/react';
import Toast from 'components/Toast/Toast';
import { useEffect } from 'react';
import { useUpdatePostMutation } from 'redux/posts/postsApiSlice';
import PostForm from './PostForm';

const PostEdit = ({ openModal = false, setOpen, post = {} }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [updatePost, { isLoading }] = useUpdatePostMutation();
  const { addToast } = Toast();

  const [isLargerThan480] = useMediaQuery('(min-width: 480px)');

  useEffect(() => {
    if (!openModal) return;
    onOpen();
  }, [openModal]);

  const closeModal = () => {
    setOpen(false);
    onClose();
  };

  const submitPost = async formData => {
    const postId = post._id;
    const { model, info, urlBook, urlImg, urlOffSite } = formData;

    const updatedPost = { model, info, urlBook, urlImg, urlOffSite };

    try {
      const { data, error } = await updatePost({ postId, updatedPost });
      if (error)
        return addToast({ message: error.data.message, type: 'error' });
      addToast({ message: data.message, type: 'success' });

      setOpen(false);
      onClose();
    } catch (error) {
      addToast({ message: error.message, type: 'error' });
    }
  };
  return (
    <>
      <Modal
        isOpen={isOpen}
        isCentered={isLargerThan480}
        onClose={closeModal}
        size="xl"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit post</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <PostForm
              post={post}
              submitPost={submitPost}
              isLoading={isLoading}
            />
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default PostEdit;
