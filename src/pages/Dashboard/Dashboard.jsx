import { Box, SimpleGrid } from '@chakra-ui/react';
import StatCard from 'components/StatCard/StatCard';

const Dashboard = () => {
  return (
    <Box p="20px" display="flex" gridGap="30px">
      <SimpleGrid minChildWidth="230px" spacing="30px" width="100%">
        <StatCard />
        <StatCard />
        <StatCard />
        <StatCard />
      </SimpleGrid>
    </Box>
  );
};

export default Dashboard;
