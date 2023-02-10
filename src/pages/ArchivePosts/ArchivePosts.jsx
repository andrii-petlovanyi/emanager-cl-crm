import { Divider, Flex, SimpleGrid } from '@chakra-ui/react';
import SectionAnim from 'components/Animations/SectionAnim';
import PostLoader from 'components/Loaders/PostLoader';
import LimitPerPage from 'components/Pagination/LimitPerPage';
import Pagination from 'components/Pagination/Pagination';
import Post from 'components/Post/Post';
import PostSearch from 'components/Post/PostSearch';
import usePagination from 'hooks/usePagination';
import { useEffect, useState } from 'react';
import { useGetArchiveListQuery } from 'redux/archive/archiveApiSlice';

const limitPostsList = [{ limit: 6 }, { limit: 12 }, { limit: 18 }];

const ArchivePosts = () => {
  const [limitPerPage, setLimitPerPage] = useState(6);
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
  const { data, isLoading, isFetching } = useGetArchiveListQuery({
    page,
    limit: limitPerPage,
    search
  }, { skip: page == undefined });
  const { archivePosts, totalArchivePosts } = data || [];

  useEffect(() => {
    if (!totalArchivePosts) return;
    setTotalData(totalArchivePosts);
    setLimit(limitPerPage);
  }, [totalArchivePosts, limitPerPage]);

  const isPagination = totalArchivePosts > limitPerPage;

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
          {!isLoading ? (
            archivePosts?.length > 0 ? (
              archivePosts?.map(post => (
                <Post key={post._id} post={post} type={'archive'} />
              ))
            ) : (
              'Sorry, no posts in archive'
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

export default ArchivePosts;
