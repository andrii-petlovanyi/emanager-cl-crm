import { Box } from '@chakra-ui/react';
import { useEffect } from 'react';
import { usePrefetch as prefPost } from 'redux/posts/postsApiSlice';
import { usePrefetch } from 'redux/archive/archiveApiSlice';
import StatList from 'components/StatList/StatList';
import PostsList from 'components/Dashboard/PostsList';

const Dashboard = () => {
  const prefetchPost = prefPost('getPosts');
  const prefetchArchive = usePrefetch('getArchiveList');

  useEffect(() => {
    prefetchPost({});
    prefetchArchive({});
  }, []);

  return (
    <Box p="10px" pt="0" display="flex" flexDirection="column" gridGap="30px">
      <StatList />
      <PostsList />
    </Box>
  );
};

export default Dashboard;
