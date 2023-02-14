import { Box, SimpleGrid, useMediaQuery } from '@chakra-ui/react';
import { useEffect } from 'react';
import { usePrefetch as usePrefetchPost } from 'redux/posts/postsApiSlice';
import { usePrefetch as usePrefetchOffer } from 'redux/offers/offersApiSlice';
import StatsTab from 'components/Dashboard/StatsTab';
import SectionAnim from 'components/Animations/SectionAnim';
import { useGetPostsQuery } from 'redux/posts/postsApiSlice';
import { useState } from 'react';
import PostCard from 'components/PostCard/PostCard';
import PostLoader from 'components/Loaders/PostLoader';
import ContentTab from 'components/Dashboard/ContentTab';
import { useGetOffersQuery } from 'redux/offers/offersApiSlice';
import OfferCard from 'components/OfferCard/OfferCard';
import OfferLoader from 'components/Loaders/OfferLoader';
import { useDispatch } from 'react-redux';
import authApiSlice from 'redux/auth/authApiSlice';

const Dashboard = () => {
  const prefetchPost = usePrefetchPost('getPosts');
  const prefetchOffer = usePrefetchOffer('getOffers');
  const dispatch = useDispatch();

  const [postsPage, setPostsPage] = useState(1);
  const [offersPage, setOffersPage] = useState(1);

  const postsLimit = 2;
  const [isLargerThan1250] = useMediaQuery('(min-width: 1250px)');
  const offersLimit = isLargerThan1250 ? 3 : 2;

  const {
    data: postsData,
    isLoading: isLoadPosts,
    isFetching: isFetchPost,
  } = useGetPostsQuery({
    page: postsPage,
    limit: postsLimit,
  });
  const { posts, totalPosts } = postsData || {};
  const isLoadedPosts = isLoadPosts || isFetchPost;

  const {
    data: offersData,
    isLoading: isLoadOffers,
    isFetching: isFetchOffers,
  } = useGetOffersQuery({ page: offersPage, limit: offersLimit });
  const { offers, totalOffers } = offersData || {};
  const isLoadedOffers = isLoadOffers || isFetchOffers;

  useEffect(() => {
    prefetchPost({});
    prefetchOffer({});
    dispatch(authApiSlice.util.invalidateTags(['notifi']));
  }, []);

  return (
    <Box p="10px" pt="0" display="flex" flexDirection="column" gap="20px">
      <SectionAnim delay="0.1">
        <StatsTab />
      </SectionAnim>
      <SectionAnim delay="0.1">
        <ContentTab
          totalData={totalPosts}
          setPage={setPostsPage}
          page={postsPage}
          limit={postsLimit}
          title="Last added posts"
        >
          <SimpleGrid
            minChildWidth={{ base: '240px', msm: '320px' }}
            spacing="20px"
            justifyContent="center"
            width="100%"
          >
            {!isLoadedPosts &&
              (posts?.length
                ? posts.map(post => (
                  <PostCard key={post._id} post={post} type="post" />
                ))
                : 'Sorry, no posts available...')}

            {isLoadedPosts && (
              <>
                {Array(postsLimit)
                  .fill(0)
                  .map((_, index) => (
                    <PostLoader key={index} />
                  ))}
              </>
            )}
          </SimpleGrid>
        </ContentTab>
      </SectionAnim>
      <SectionAnim delay="0.1">
        <ContentTab
          totalData={totalOffers}
          setPage={setOffersPage}
          page={offersPage}
          limit={offersLimit}
          title="Last added offers"
        >
          <SimpleGrid
            minChildWidth={{ base: '240px', msm: '300px' }}
            spacing="20px"
            width="100%"
          >
            {!isLoadedOffers &&
              (offers?.length
                ? offers.map(offer => <OfferCard key={offer._id} offer={offer} />)
                : 'Sorry, no posts available...')}

            {isLoadedOffers && (
              <>
                {Array(offersLimit)
                  .fill(0)
                  .map((_, index) => (
                    <OfferLoader key={index} />
                  ))}
              </>
            )}
          </SimpleGrid>
        </ContentTab>
      </SectionAnim>
    </Box>
  );
};

export default Dashboard;
