import { Box, SimpleGrid, Text, useMediaQuery } from '@chakra-ui/react';
import OfferLoader from 'components/Loaders/OfferLoader';
import Offer from 'components/Offer/Offer';
import TabPagination from 'components/Pagination/TabPagination';
import { useState } from 'react';
import { useGetOffersQuery } from 'redux/offers/offersApiSlice';

const OffersTab = () => {
  const [page, setPage] = useState(1);
  const [isLargerThan1250] = useMediaQuery('(min-width: 1250px)');
  const limit = isLargerThan1250 ? 3 : 2;

  const { data, isLoading, isFetching } = useGetOffersQuery({ page, limit });
  const { offers, totalOffers } = data || {};

  const totalPage = Math.ceil(totalOffers / limit);
  const decrDisabled = page === 1;
  const incrDisabled = page === totalPage || page === limit;

  const incrementHandler = () => {
    if (incrDisabled) return;
    setPage(prev => prev + 1);
  };

  const decrementHandler = () => {
    if (decrDisabled) return;
    setPage(prev => prev - 1);
  };

  const isLoaded = isLoading || isFetching;

  return (
    <>
      <Box
        position="relative"
        borderTop="1px solid"
        borderColor="borderColor"
        pt="30px"
        pb="0"
      >
        <Text
          position="absolute"
          top="-17px"
          left="30px"
          bg="bodyBG"
          px="10px"
          fontSize="20px"
          fontWeight="700"
          // color="secondaryTextColor"
        >
          Last added offers
        </Text>
        <SimpleGrid
          minChildWidth={{ base: '240px', msm: '300px' }}
          spacing="20px"
          width="100%"
          // columns={{ base: 1, md: 2, lg: 3 }}
        >
          {!isLoaded &&
            (offers?.length
              ? offers.map(offer => <Offer key={offer._id} offer={offer} />)
              : 'Sorry, no posts available...')}

          {isLoaded && (
            <>
              {Array(limit)
                .fill(0)
                .map((_, index) => (
                  <OfferLoader key={index} />
                ))}
            </>
          )}
        </SimpleGrid>
        <Box display="flex" justifyContent="flex-end" mt="10px">
          <TabPagination
            decrDisabled={decrDisabled}
            incrDisabled={incrDisabled}
            decrementHandler={decrementHandler}
            incrementHandler={incrementHandler}
          />
        </Box>
      </Box>
    </>
  );
};

export default OffersTab;
