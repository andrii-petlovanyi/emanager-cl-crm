import { SimpleGrid } from '@chakra-ui/react';
import SectionAnim from 'components/Animations/SectionAnim';
import OfferLoader from 'components/Loaders/OfferLoader';
import Offer from 'components/Offer/Offer';
import Pagination from 'components/Pagination/Pagination';
import usePagination from 'hooks/usePagination';
import { useEffect } from 'react';
import { useGetOffersQuery } from 'redux/offers/offersApiSlice';

const Offers = () => {
  const limitPerPage = 12;

  const {
    page,
    setPage,
    nextPage,
    prevPage,
    setTotalData,
    prevDisabled,
    nextDisabled,
    setLimit,
    totalPage,
  } = usePagination();
  const { data, isLoading, isFetching } = useGetOffersQuery({
    page,
    limit: limitPerPage,
  });
  const { offers, totalOffers } = data || [];

  useEffect(() => {
    if (!totalOffers) return;
    setTotalData(totalOffers);
    setLimit(limitPerPage);
  }, [totalOffers, limitPerPage]);

  const isLoaded = isLoading || isFetching;
  const isPagination = totalOffers > limitPerPage;

  return (
    <>
      <SectionAnim delay={0.1}>
        <SimpleGrid
          minChildWidth={{ base: '240px', msm: '300px' }}
          spacing="20px"
          justifyContent="center"
          width="100%"
        >
          {!isLoaded ? (
            offers?.length ? (
              offers.map(offer => <Offer key={offer._id} offer={offer} />)
            ) : (
              <>Sorry, no offers in database...</>
            )
          ) : (
            <>
              {Array(limitPerPage)
                .fill(0)
                .map((_, index) => (
                  <OfferLoader key={index} />
                ))}
            </>
          )}
        </SimpleGrid>
      </SectionAnim>
      <SectionAnim delay={0.2} justify="center">
        {isPagination && (
          <Pagination
            page={page}
            setPage={setPage}
            totalPage={totalPage}
            nextPage={nextPage}
            prevPage={prevPage}
            prevDisabled={prevDisabled}
            nextDisabled={nextDisabled}
          />
        )}
      </SectionAnim>
    </>
  );
};

export default Offers;
