/* eslint-disable react/prop-types */
import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import { MdMoreVert } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { useDeleteFromArchiveMutation } from 'redux/archive/archiveApiSlice';
import { useMoveFromArchiveMutation } from 'redux/archive/archiveApiSlice';
import { useAddToArchiveMutation } from 'redux/archive/archiveApiSlice';
import postsApiSlice from 'redux/posts/postsApiSlice';
import { useDeletePostMutation } from 'redux/posts/postsApiSlice';

/* eslint-disable no-unused-vars */
const PostOptions = ({ post = {}, type = '' }) => {
  const dispatch = useDispatch();

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
    console.log('hello');
  };

  const deletePostHandler = async () => {
    const { data } = await deletePost(post?._id);
    console.log(data);
  };

  const addPostToArchiveHandler = async () => {
    const postId = { postId: post?._id };
    const { data } = await addToArchive(postId);
    //TODO: notify and good validation result
    if (data) dispatch(postsApiSlice.util.invalidateTags(['posts']));
  };

  const deleteArchivePostHandler = async () => {
    const { data } = await deleteFromArchive(post?._id);
    console.log(data);
  };

  const moveFromArchiveHandler = async () => {
    const postId = post?._id;
    const { data } = await moveFromArchive(postId);

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
        variant="ghost"
        fontSize="22px"
        isLoading={typePost ? postOptLoading : archOptLoading}
        color="primaryTextColor"
        icon={<MdMoreVert />}
      />
      {typePost && (
        <MenuList>
          <MenuItem onClick={editPostHandler}>Edit</MenuItem>
          <MenuItem onClick={addPostToArchiveHandler}>Add to archive</MenuItem>
          <MenuItem onClick={deletePostHandler}>Delete</MenuItem>
        </MenuList>
      )}
      {typeArchive && (
        <MenuList>
          <MenuItem onClick={moveFromArchiveHandler}>
            Move to posts list
          </MenuItem>
          <MenuItem onClick={deleteArchivePostHandler}>Delete forever</MenuItem>
        </MenuList>
      )}
    </Menu>
  );
};

export default PostOptions;
