import { Box } from '@chakra-ui/react';
import { useEffect } from 'react';
import { usePrefetch as prefPost } from 'redux/posts/postsApiSlice';
import { usePrefetch } from 'redux/archive/archiveApiSlice';
import PostsTab from 'components/Dashboard/PostsTab';
import OffersTab from 'components/Dashboard/OffersTab';
import StatsTab from 'components/Dashboard/StatsTab';

const Dashboard = () => {
  const prefetchPost = prefPost('getPosts');
  const prefetchArchive = usePrefetch('getArchiveList');

  useEffect(() => {
    prefetchPost({});
    prefetchArchive({});
  }, []);

  return (
    <Box p="10px" pt="0" display="flex" flexDirection="column" gap="30px">
      <StatsTab />
      <PostsTab />
      <OffersTab />
    </Box>
  );
};

export default Dashboard;
