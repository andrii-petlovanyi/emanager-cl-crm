import { Box, Text } from '@chakra-ui/react';
import SectionAnim from 'components/Animations/SectionAnim';
import OfferLoader from 'components/Loaders/OfferLoader';
import Offer from 'components/Offer/Offer';
import PostForm from 'components/Post/PostForm';
import Toast from 'components/Toast/Toast';
import { useState } from 'react';
import { useGetOffersQuery } from 'redux/offers/offersApiSlice';
import { useAddPostMutation } from 'redux/posts/postsApiSlice';

const AddPosts = () => {
  const [addPost, { isLoading }] = useAddPostMutation();
  const [resetForm, setResetForm] = useState(false);
  const { addToast } = Toast();

  const { data, isLoading: isLoadingOffers } = useGetOffersQuery({ limit: 3 });
  const { offers } = data || {};

  const submitPost = async data => {
    const { data: res, error } = await addPost(data);
    if (error) return addToast({ message: error.data.message, type: 'error' });
    addToast({ message: res.message, type: 'success' });
    setResetForm(true);
  };

  return (
    <Box display="flex" gap="40px">
      <SectionAnim delay={0.2} flex="2">
        <Box
          // flex="2"
          p="20px"
          pt="30px"
          position="relative"
          border="1px solid"
          borderRadius="10px"
          borderColor="borderColor"
        >
          <Text
            position="absolute"
            top="-17px"
            left="10px"
            bg="bodyBG"
            px="10px"
            fontSize="22px"
            fontWeight="700"
          >
            Add new post
          </Text>
          <PostForm
            submitPost={submitPost}
            isLoading={isLoading}
            resetForm={resetForm}
          />
        </Box>
      </SectionAnim>
      <SectionAnim delay={0.3} flex="1">
        <Box
          // flex="1"
          position="relative"
          display={{ base: 'none', lg: 'flex' }}
          flexDirection="column"
          width="100%"
          pt="30px"
          gap="30px"
          borderTop="1px solid"
          borderColor="borderColor"
        >
          <Text
            position="absolute"
            top="-17px"
            left="50%"
            bg="bodyBG"
            px="10px"
            fontSize="22px"
            fontWeight="700"
            transform="translateX(-50%)"
          >
            Last offers
          </Text>
          {!isLoadingOffers &&
            (offers?.length ? (
              <>
                {offers?.map(offer => (
                  <Offer key={offer._id} offer={offer} />
                ))}
              </>
            ) : (
              <>Sorry, no offers is database...</>
            ))}
          {isLoadingOffers && (
            <>
              <OfferLoader />
              <OfferLoader />
              <OfferLoader />
            </>
          )}
        </Box>
      </SectionAnim>
    </Box>
  );
};

export default AddPosts;
