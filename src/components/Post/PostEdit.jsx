/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import Toast from 'components/Toast/Toast';
import { useEffect } from 'react';
import { useUpdatePostMutation } from 'redux/posts/postsApiSlice';
import PostForm from './PostForm';

const PostEdit = ({ openModal = false, setOpen, post = {} }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [updatePost] = useUpdatePostMutation();
  const { addToast } = Toast();

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

    const { data, error } = await updatePost({ postId, updatedPost });
    if (error) return addToast({ message: error.data.message, type: 'error' });
    addToast({ message: data.message, type: 'success' });

    setOpen(false);
    onClose();
  };
  return (
    <>
      <Modal isOpen={isOpen} isCentered onClose={closeModal} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit post</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <PostForm post={post} submitPost={submitPost} />
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default PostEdit;
