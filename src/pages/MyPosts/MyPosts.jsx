import { Box, Divider, SimpleGrid } from '@chakra-ui/react';
import SectionAnim from 'components/Animations/SectionAnim';
import PostLoader from 'components/Loaders/PostLoader';
import Pagination from 'components/Pagination/Pagination';
import Post from 'components/Post/Post';
import PostSearch from 'components/Post/PostSearch';
import usePagination from 'hooks/pagination';
import { useState } from 'react';
import { useEffect } from 'react';
import { useGetPostsQuery } from 'redux/posts/postsApiSlice';

const MyPosts = () => {
  const limit = 4;
  const [search, setSearch] = useState('');
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
  const { data, isLoading, isFetching } = useGetPostsQuery({
    page,
    limit,
    search,
  });
  const { posts, totalPosts } = data || [];


  useEffect(() => {
    if (!totalPosts) return;
    setTotalData(totalPosts);
    setLimit(limit);
  }, [totalPosts]);

  const isLoaded = isLoading || isFetching;
  const isPagination = totalPosts > limit;

  return (
    <>
      <Box width={{ base: '100%', md: '30%' }}>
        <PostSearch setSearch={setSearch} />
      </Box>
      <Divider my="20px" />
      <SectionAnim delay={0.1}>
        <SimpleGrid
          minChildWidth={{ base: '240px', msm: '320px' }}
          spacing="20px"
          justifyContent="center"
          width="100%"
        >
          {!isLoaded &&
            (posts?.length > 0
              ? posts.map(post => (
                  <Post key={post._id} post={post} type={'post'} />
                ))
              : 'Sorry, no posts in database')}
          {isLoaded && (
            <>
              {Array(limit)
                .fill(0)
                .map((_, index) => (
                  <PostLoader key={index} />
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

export default MyPosts;
