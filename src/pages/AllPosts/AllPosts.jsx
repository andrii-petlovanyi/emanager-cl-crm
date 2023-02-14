import { Divider, Flex, SimpleGrid } from '@chakra-ui/react';
import SectionAnim from 'components/Animations/SectionAnim';
import PostLoader from 'components/Loaders/PostLoader';
import LimitPerPage from 'components/Pagination/LimitPerPage';
import Pagination from 'components/Pagination/Pagination';
import PostCard from 'components/PostCard/PostCard';
import PostSearch from 'components/PostCard/PostSearch';
import usePagination from 'hooks/usePagination';
import { useEffect, useState } from 'react';
import { useGetPostsQuery } from 'redux/posts/postsApiSlice';

const limitPostsList = [{ limit: 6 }, { limit: 12 }, { limit: 18 }];

const AllPosts = () => {
  const [limitPerPage, setLimitPerPage] = useState(6);
  const [search, setSearch] = useState('');
  const [fetch, setFetch] = useState(false);
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
    limit: limitPerPage,
    search,
  }, { skip: page == undefined });
  const { posts, totalPosts } = data || [];

  useEffect(() => {
    if (!totalPosts) return;
    setTotalData(totalPosts);
    setLimit(limitPerPage);
  }, [totalPosts, limitPerPage]);

  useEffect(() => {
    if (isFetching) {
      setFetch(true)
    } else {
      setFetch(false)
    }
  }, [page])

  const isPagination = totalPosts > limitPerPage;
  const isLoad = isLoading || (isFetching && fetch)

  return (
    <>
      <Flex display="flex" gap="30px" justifyContent="space-between">
        <PostSearch setSearch={setSearch} search={search} isFetching={isFetching} width={{ base: '100%', md: '30%' }} />
        <LimitPerPage
          limitPerPage={limitPerPage}
          setLimitPerPage={setLimitPerPage}
          limitList={limitPostsList}
        />
      </Flex>
      <Divider my="20px" />
      <SectionAnim delay={0.1}>
        <SimpleGrid
          minChildWidth={{ base: '240px', msm: '320px' }}
          spacing="20px"
          justifyContent="center"
          width="100%"
        >
          {!isLoad ? (
            posts?.length > 0 ? (
              posts.map(post => (
                <PostCard key={post._id} post={post} type={'post'} />
              ))
            ) : (
              'Sorry, no posts in database'
            )
          ) : (
            <>
              {Array(limitPerPage)
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

export default AllPosts;
