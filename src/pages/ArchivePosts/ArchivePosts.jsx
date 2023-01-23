import { SimpleGrid } from '@chakra-ui/react';
import SectionAnim from 'components/Animations/SectionAnim';
import PostLoader from 'components/Loaders/PostLoader';
import Pagination from 'components/Pagination/Pagination';
import Post from 'components/Post/Post';
import usePagination from 'hooks/pagination';
import { useEffect } from 'react';
import { useGetArchiveListQuery } from 'redux/archive/archiveApiSlice';

const ArchivePosts = () => {
  const limit = 4;
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
    limit,
  });
  const { archivePosts, totalArchivePosts } = data || [];

  useEffect(() => {
    if (!totalArchivePosts) return;
    setTotalData(totalArchivePosts);
    setLimit(limit);
  }, [totalArchivePosts]);

  const isLoaded = isLoading || isFetching;
  const isPagination = totalArchivePosts > limit;

  return (
    <>
      <SectionAnim delay={0.1}>
        <SimpleGrid
          minChildWidth={{ base: '240px', msm: '300px' }}
          spacing="20px"
          justifyContent="center"
          width="100%"
        >
          {!isLoaded && archivePosts?.length > 0
            ? archivePosts?.map(post => (
                <Post key={post._id} post={post} type={'archive'} />
              ))
            : 'Sorry, no posts in archive'}
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

export default ArchivePosts;
