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
    try {
      const { data, error } = await deleteOffer(id);
      if (error)
        return addToast({ message: error.data.message, type: 'error' });
      addToast({ message: data.message, type: 'success' });
    } catch (error) {
      addToast({ message: error.message, type: 'error' });
    }
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
          variant="customOptIB"
          fontSize="22px"
          isLoading={isLoading}
          color="primaryTextColor"
          icon={<MdMoreVert />}
        />
        <MenuList
          bgColor="sectionBG"
          borderColor="borderColor"
          color="primaryTextColor"
          fontSize="15px"
          minW={'0'}
          width={'140px'}
        >
          <MenuItem
            onClick={deleteOfferHandler}
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
      </Menu>
    </>
  );
};

export default OfferOptions;
