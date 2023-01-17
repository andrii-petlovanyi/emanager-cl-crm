import { SimpleGrid } from '@chakra-ui/react';
import Post from 'components/Post/Post';
import { useGetPostsQuery } from 'redux/posts/postsApiSlice';

const MyPosts = () => {
  const { data, isLoading } = useGetPostsQuery();
  const posts = data?.data;

  return (
    !isLoading && (
      <SimpleGrid
        minChildWidth={{ base: '240px', msm: '320px' }}
        spacing="20px"
        justifyContent="center"
        width="100%"
      >
        {posts.length
          ? posts.map(post => <Post key={post._id} post={post} type={'post'} />)
          : 'Sorry, no posts in database'}
      </SimpleGrid>
    )
  );
};

export default MyPosts;
