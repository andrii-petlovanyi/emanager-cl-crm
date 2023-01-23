import { Box } from '@chakra-ui/react';
import { useEffect } from 'react';
import { usePrefetch as prefPost } from 'redux/posts/postsApiSlice';
import { usePrefetch } from 'redux/archive/archiveApiSlice';
import PostsTab from 'components/Dashboard/PostsTab';
import OffersTab from 'components/Dashboard/OffersTab';
import StatsTab from 'components/Dashboard/StatsTab';
import SectionAnim from 'components/Animations/SectionAnim';

const Dashboard = () => {
  const prefetchPost = prefPost('getPosts');
  const prefetchArchive = usePrefetch('getArchiveList');

  useEffect(() => {
    prefetchPost({});
    prefetchArchive({});
  }, []);

  return (
    <Box p="10px" pt="0" display="flex" flexDirection="column" gap="20px">
      <SectionAnim delay="0.1">
        <StatsTab />
      </SectionAnim>
      <SectionAnim delay="0.1">
        <PostsTab />
      </SectionAnim>
      <SectionAnim delay="0.1">
        <OffersTab />
      </SectionAnim>
    </Box>
  );
};

export default Dashboard;
