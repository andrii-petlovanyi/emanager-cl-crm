import { Box, IconButton, SimpleGrid } from '@chakra-ui/react';
import PostLoader from 'components/Loaders/PostLoader';
import Post from 'components/Post/Post';
import { useState } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { useGetPostsQuery } from 'redux/posts/postsApiSlice';

const PostsTab = () => {
  const [page, setPage] = useState(1);

  const { data, isLoading, isFetching } = useGetPostsQuery({ page, limit: 2 });
  const { posts, totalPosts } = data || {};

  const totalPage = Math.ceil(totalPosts / 2);
  const decrDisabled = page === 1;
  const incrDisabled = page === totalPage || page === 5;

  const incrementHandler = () => {
    if (incrDisabled) return;
    setPage(prev => prev + 1);
  };

  const decrementHandler = () => {
    if (decrDisabled) return;
    setPage(prev => prev - 1);
  };

  return (
    <>
      <Box>
        <SimpleGrid
          minChildWidth={{ base: '240px', msm: '320px' }}
          spacing="20px"
          justifyContent="center"
          width="100%"
        >
          {!isLoading &&
            !isFetching &&
            (posts?.length
              ? posts.map(post => (
                  <Post key={post._id} post={post} type="post" />
                ))
              : 'Sorry, no posts available...')}

          {(isLoading || isFetching) && (
            <>
              <PostLoader />
              <PostLoader />
            </>
          )}
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
  );
};

export default PostsTab;
