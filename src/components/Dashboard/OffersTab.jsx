import { Box, IconButton, SimpleGrid } from '@chakra-ui/react';
import Offer from 'components/Offer/Offer';
import { useState } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { useGetOffersQuery } from 'redux/offers/offersApiSlice';

const OffersTab = () => {
  const [page, setPage] = useState(1);

  const { data, isLoading } = useGetOffersQuery({ page, limit: 3 });
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

  return !isLoading ? (
    <>
      <Box>
        <SimpleGrid
          minChildWidth={{ base: '240px', msm: '300px' }}
          spacing="20px"
          justifyContent="center"
          width="100%"
        >
          {offers?.length
            ? offers.map(offer => <Offer key={offer._id} offer={offer} />)
            : 'Sorry, no posts available...'}
        </SimpleGrid>
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
    </>
  ) : (
    <>Loading...</>
  );
};

export default OffersTab;
