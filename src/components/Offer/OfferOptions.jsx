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
import { useDeleteOfferMutation } from 'redux/offers/offersApiSlice';

const OfferOptions = ({ id }) => {
  const [deleteOffer, { isLoading }] = useDeleteOfferMutation();
  const { addToast } = Toast();

  const deleteOfferHandler = async () => {
    const { data, error } = await deleteOffer(id);
    if (error) return addToast({ message: error.data.message, type: 'error' });
    addToast({ message: data.message, type: 'success' });
  };
  return (
    <>
      <Menu closeOnSelect isLazy>
        <MenuButton
          as={IconButton}
          position="absolute"
          top="0"
          right="0"
          aria-label="Post menu"
          variant="ghost"
          fontSize="22px"
          isLoading={isLoading}
          color="primaryTextColor"
          icon={<MdMoreVert />}
        />
        <MenuList>
          <MenuItem onClick={deleteOfferHandler}>Delete</MenuItem>
        </MenuList>
      </Menu>
    </>
  );
};

export default OfferOptions;
