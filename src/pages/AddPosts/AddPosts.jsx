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
  const limit = 3;
  const [addPost, { isLoading }] = useAddPostMutation();
  const [resetForm, setResetForm] = useState(false);
  const { addToast } = Toast();

  const { data, isLoading: isLoadingOffers } = useGetOffersQuery({ limit });
  const { offers } = data || {};

  const submitPost = async data => {
    try {
      const { data: res, error } = await addPost(data);
      if (error)
        return addToast({ message: error.data.message, type: 'error' });
      addToast({ message: res.message, type: 'success' });
      setResetForm(true);
    } catch (error) {
      addToast({ message: error.message, type: 'error' });
    }
  };

  return (
    <SectionAnim delay={0.2}>
      <Box display="flex" gap="20px" mt="10px">
        <Box
          flex="2"
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
        <Box
          flex="1"
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
            left="20px"
            bg="bodyBG"
            px="10px"
            fontSize="22px"
            fontWeight="700"
            // transform="translateX(-50%)"
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
              {Array(limit)
                .fill(0)
                .map((_, index) => (
                  <OfferLoader key={index} />
                ))}
            </>
          )}
        </Box>
      </Box>
    </SectionAnim>
  );
};

export default AddPosts;
