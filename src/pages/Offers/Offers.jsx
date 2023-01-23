import { SimpleGrid } from '@chakra-ui/react';
import OfferLoader from 'components/Loaders/OfferLoader';
// import OfferLoader from 'components/Loaders/OfferLoader';
import Offer from 'components/Offer/Offer';
import Pagination from 'components/Pagination/Pagination';
import usePagination from 'hooks/pagination';
import { useEffect } from 'react';
import { useGetOffersQuery } from 'redux/offers/offersApiSlice';

const Offers = () => {
  const limit = 3;
  const {
    page,
    nextPage,
    prevPage,
    setTotalData,
    prevDisabled,
    nextDisabled,
    setLimit,
    totalPage,
  } = usePagination();
  const { data, isLoading, isFetching } = useGetOffersQuery({ page, limit });
  const { offers, totalOffers } = data || [];

  useEffect(() => {
    if (!totalOffers) return;
    setTotalData(totalOffers);
    setLimit(limit);
  }, [totalOffers]);

  const isLoaded = isLoading || isFetching;
  const isPagination = totalOffers > limit;

  return (
    <>
      <SimpleGrid
        minChildWidth={{ base: '240px', msm: '300px' }}
        spacing="20px"
        justifyContent="center"
        width="100%"
      >
        {!isLoaded &&
          (offers?.length ? (
            offers.map(offer => <Offer key={offer._id} offer={offer} />)
          ) : (
            <>Sorry, no offers in database...</>
          ))}
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
      {isPagination && (
        <Pagination
          page={page}
          totalPage={totalPage}
          nextPage={nextPage}
          prevPage={prevPage}
          prevDisabled={prevDisabled}
          nextDisabled={nextDisabled}
        />
      )}
    </>
  );
};

export default Offers;
