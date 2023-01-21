import { SimpleGrid } from '@chakra-ui/react';
// import OfferLoader from 'components/Loaders/OfferLoader';
import Offer from 'components/Offer/Offer';
import { useGetOffersQuery } from 'redux/offers/offersApiSlice';

const Offers = () => {
  const { data, isLoading } = useGetOffersQuery({});
  const { offers } = data || [];

  return (
    !isLoading && (
      <>
        <SimpleGrid
          minChildWidth={{ base: '240px', msm: '300px' }}
          spacing="20px"
          justifyContent="center"
          width="100%"
        >
          {offers?.length ? (
            offers.map(offer => <Offer key={offer._id} offer={offer} />)
          ) : (
            <>Sorry, no offers in database...</>
          )}
        </SimpleGrid>
      </>
    )
  );
};

export default Offers;
