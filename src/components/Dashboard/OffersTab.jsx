import { Box, IconButton, SimpleGrid, Text } from '@chakra-ui/react';
import OfferLoader from 'components/Loaders/OfferLoader';
import Offer from 'components/Offer/Offer';
import { useState } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { useGetOffersQuery } from 'redux/offers/offersApiSlice';

const OffersTab = () => {
  const [page, setPage] = useState(1);

  const { data, isLoading, isFetching } = useGetOffersQuery({ page, limit: 3 });
  const { offers, totalOffers } = data || {};

  const totalPage = Math.ceil(totalOffers / 3);
  const decrDisabled = page === 1;
  const incrDisabled = page === totalPage || page === 3;

  const incrementHandler = () => {
    if (incrDisabled) return;
    setPage(prev => prev + 1);
  };

  const decrementHandler = () => {
    if (decrDisabled) return;
    setPage(prev => prev - 1);
  };

  return (
    <>
      <Box
        position="relative"
        borderTop="1px solid"
        // borderBottom="1px solid"
        borderColor="borderColor"
        // p="10px"
        pt="30px"
        pb="0"
        // borderRadius="10px"
      >
        <Text
          position="absolute"
          top="-17px"
          left="30px"
          bg="bodyBG"
          px="10px"
          fontSize="20px"
        >
          Last added offers
        </Text>
        <SimpleGrid
          minChildWidth={{ base: '240px', msm: '300px' }}
          spacing="20px"
          justifyContent="center"
          width="100%"
        >
          {!isLoading &&
            !isFetching &&
            (offers?.length
              ? offers.map(offer => <Offer key={offer._id} offer={offer} />)
              : 'Sorry, no posts available...')}
          {(isLoading || isFetching) && (
            <>
              <OfferLoader />
              <OfferLoader />
              <OfferLoader />
            </>
          )}
        </SimpleGrid>
        <Box display="flex" justifyContent="flex-end" mt="10px">
          <IconButton
            isDisabled={decrDisabled}
            onClick={decrementHandler}
            icon={<MdKeyboardArrowLeft />}
            variant="tabArrowIB"
          />
          <IconButton
            isDisabled={incrDisabled}
            onClick={incrementHandler}
            icon={<MdKeyboardArrowRight />}
            variant="tabArrowIB"
          />
        </Box>
      </Box>
    </>
  );
};

export default OffersTab;
