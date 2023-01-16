import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import { MdMoreVert } from 'react-icons/md';

const PostOptions = () => {
  return (
    <Menu closeOnSelect isLazy>
      <MenuButton
        as={IconButton}
        position="absolute"
        top="0"
        right="0"
        aria-label="Post menu"
        variant="ghost"
        fontSize="20px"
        color="primaryTextColor"
        icon={<MdMoreVert />}
      />
      <MenuList>
        <MenuItem>Edit</MenuItem>
        <MenuItem>Add to archive</MenuItem>
        <MenuItem>Delete</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default PostOptions;
