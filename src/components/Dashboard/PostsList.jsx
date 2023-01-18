import { Box, IconButton, SimpleGrid } from '@chakra-ui/react';
import Post from 'components/Post/Post';
import { useState } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { useGetPostsQuery } from 'redux/posts/postsApiSlice';

const PostsList = () => {
  const [page, setPage] = useState(1);

  const { data, isLoading } = useGetPostsQuery({ page, limit: 2 });
  const { posts, totalPosts } = data || {};
  const totalPage = Math.ceil(totalPosts / 2);

  const incrementHandler = () => {
    if (page === totalPage || page === 5) return;
    setPage(prev => prev + 1);
  };

  const decrementHandler = () => {
    if (page === 1) return;
    setPage(prev => prev - 1);
  };

  return !isLoading ? (
    <>
      <Box>
        <SimpleGrid
          minChildWidth={{ base: '240px', msm: '320px' }}
          spacing="20px"
          justifyContent="center"
          width="100%"
        >
          {posts?.length
            ? posts.map(post => <Post key={post._id} post={post} type="post" />)
            : 'Sorry, no posts available...'}
        </SimpleGrid>
        <IconButton
          onClick={decrementHandler}
          icon={<MdKeyboardArrowLeft />}
          variant="tabArrowIB"
        />
        <IconButton
          onClick={incrementHandler}
          icon={<MdKeyboardArrowRight />}
          variant="tabArrowIB"
        />
      </Box>
    </>
  ) : (
    <>Loading...</>
  );
};

export default PostsList;
