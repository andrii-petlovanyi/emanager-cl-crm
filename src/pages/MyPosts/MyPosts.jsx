import { SimpleGrid } from '@chakra-ui/react';
import Pagination from 'components/Pagination/Pagination';
import Post from 'components/Post/Post';
import usePagination from 'hooks/pagination';
import { useEffect } from 'react';
import { useGetPostsQuery } from 'redux/posts/postsApiSlice';

const MyPosts = () => {
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
  const { data, isLoading } = useGetPostsQuery({ page, limit });
  const { posts, totalPosts } = data || [];

  useEffect(() => {
    if (!totalPosts) return;
    setTotalData(totalPosts);
    setLimit(limit);
  }, [totalPosts]);

  return (
    !isLoading && (
      <>
        <SimpleGrid
          minChildWidth={{ base: '240px', msm: '320px' }}
          spacing="20px"
          justifyContent="center"
          width="100%"
        >
          {posts?.length
            ? posts.map(post => (
                <Post key={post._id} post={post} type={'post'} />
              ))
            : 'Sorry, no posts in database'}
        </SimpleGrid>
        <Pagination
          page={page}
          totalPage={totalPage}
          nextPage={nextPage}
          prevPage={prevPage}
          prevDisabled={prevDisabled}
          nextDisabled={nextDisabled}
        />
      </>
    )
  );
};

export default MyPosts;
