/* eslint-disable react/prop-types */
import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import Toast from 'components/Toast/Toast';
import { MdMoreVert } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { useDeleteFromArchiveMutation } from 'redux/archive/archiveApiSlice';
import { useMoveFromArchiveMutation } from 'redux/archive/archiveApiSlice';
import { useAddToArchiveMutation } from 'redux/archive/archiveApiSlice';
import postsApiSlice from 'redux/posts/postsApiSlice';
import { useDeletePostMutation } from 'redux/posts/postsApiSlice';

/* eslint-disable no-unused-vars */
const PostOptions = ({ setOpen, post = {}, type = '' }) => {
  const dispatch = useDispatch();
  const { addToast } = Toast();
  const postId = post._id;

  const [deletePost, { isLoading: delPostLoading }] = useDeletePostMutation();
  const [moveFromArchive, { isLoading: moveFromArchLoading }] =
    useMoveFromArchiveMutation();
  const [deleteFromArchive, { isLoading: delArchLoading }] =
    useDeleteFromArchiveMutation();
  const [addToArchive, { isLoading: addToArchLoading }] =
    useAddToArchiveMutation();

  const typePost = type && type === 'post';
  const typeArchive = type && type === 'archive';

  const postOptLoading = delPostLoading || addToArchLoading;
  const archOptLoading = moveFromArchLoading || delArchLoading;

  const editPostHandler = () => {
    setOpen(true);
  };

  const deletePostHandler = async () => {
    const { data, error } = await deletePost(postId);
    if (error) return addToast({ message: error.data.message, type: 'error' });
    addToast({ message: data.message, type: 'success' });
  };

  const addPostToArchiveHandler = async () => {
    const { data, error } = await addToArchive({ postId });
    if (error) return addToast({ message: error.data.message, type: 'error' });
    addToast({ message: data.message, type: 'success' });

    //TODO: notify and good validation result
    if (data) dispatch(postsApiSlice.util.invalidateTags(['posts']));
  };

  const deleteArchivePostHandler = async () => {
    const { data, error } = await deleteFromArchive(postId);
    if (error) return addToast({ message: error.data.message, type: 'error' });
    addToast({ message: data.message, type: 'success' });
  };

  const moveFromArchiveHandler = async () => {
    const { data, error } = await moveFromArchive(postId);
    if (error) return addToast({ message: error.data.message, type: 'error' });
    addToast({ message: data.message, type: 'success' });

    if (data) dispatch(postsApiSlice.util.invalidateTags(['posts']));
  };

  return (
    <Menu closeOnSelect isLazy>
      <MenuButton
        as={IconButton}
        position="absolute"
        top="0"
        right="0"
        aria-label="Post menu"
        variant="customOptIB"
        fontSize="22px"
        isLoading={typePost ? postOptLoading : archOptLoading}
        color="primaryTextColor"
        icon={<MdMoreVert />}
      />
      {typePost && (
        <MenuList
          bgColor="sectionBG"
          borderColor="borderColor"
          color="primaryTextColor"
          fontSize="15px"
        >
          <MenuItem
            onClick={editPostHandler}
            bg=""
            transition="350ms ease"
            _hover={{
              backgroundColor: 'tooltipHoverBG',
              color: 'hoverColor',
            }}
          >
            Edit
          </MenuItem>
          <MenuItem
            onClick={addPostToArchiveHandler}
            bg=""
            transition="350ms ease"
            _hover={{
              backgroundColor: 'tooltipHoverBG',
              color: 'hoverColor',
            }}
          >
            Add to archive
          </MenuItem>
          <MenuItem
            onClick={deletePostHandler}
            bg=""
            transition="350ms ease"
            _hover={{
              backgroundColor: 'tooltipHoverBG',
              color: 'delItemColor',
            }}
          >
            Delete
          </MenuItem>
        </MenuList>
      )}
      {typeArchive && (
        <MenuList
          bgColor="sectionBG"
          color="primaryTextColor"
          borderColor="borderColor"
          fontSize="15px"
        >
          <MenuItem
            onClick={moveFromArchiveHandler}
            bg=""
            transition="350ms ease"
            _hover={{ backgroundColor: 'tooltipHoverBG', color: 'hoverColor' }}
          >
            Move to posts list
          </MenuItem>
          <MenuItem
            onClick={deleteArchivePostHandler}
            bg=""
            transition="350ms ease"
            _hover={{
              backgroundColor: 'tooltipHoverBG',
              color: 'delItemColor',
            }}
          >
            Delete forever
          </MenuItem>
        </MenuList>
      )}
    </Menu>
  );
};

export default PostOptions;
