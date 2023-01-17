import { Box, SimpleGrid } from '@chakra-ui/react';
import Post from 'components/Post/Post';
import StatCard from 'components/StatCard/StatCard';
import { useEffect } from 'react';
import { usePrefetch } from 'redux/posts/postsApiSlice';

const Dashboard = () => {
  const prefetchPost = usePrefetch('getPosts');

  useEffect(() => {
    prefetchPost();
  }, []);

  return (
    <Box p="10px" pt="0" display="flex" flexDirection="column" gridGap="30px">
      <SimpleGrid minChildWidth="230px" spacing="30px" width="100%">
        <StatCard />
        <StatCard />
        <StatCard />
      </SimpleGrid>
      <SimpleGrid
        minChildWidth={{ base: '240px', msm: '300px' }}
        spacing="20px"
        justifyContent="center"
        width="100%"
      >
        <Post />
        <Post />
      </SimpleGrid>
    </Box>
  );
};

export default Dashboard;
