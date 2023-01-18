import { SimpleGrid } from '@chakra-ui/react';
import StatCard from 'components/StatCard/StatCard';
import { useGetArchiveListQuery } from 'redux/archive/archiveApiSlice';
import { useGetOffersQuery } from 'redux/offers/offersApiSlice';
import { useGetPostsQuery } from 'redux/posts/postsApiSlice';

const StatList = () => {
  const { data: archive } = useGetArchiveListQuery({});
  const { data: posts, isLoading } = useGetPostsQuery({});
  const { data: offers } = useGetOffersQuery({});
  const stats = [
    {
      title: 'Total archive',
      count: archive?.totalArchivePosts,
    },
    {
      title: 'Total posts',
      count: posts?.totalPosts,
    },
    {
      title: 'Total offers',
      count: offers?.totalOffers,
    },
  ];
  return (
    !isLoading && (
      <>
        <SimpleGrid minChildWidth="230px" spacing="30px" width="100%">
          {stats.map(stat => (
            <StatCard key={stat.title} stat={stat} />
          ))}
        </SimpleGrid>
      </>
    )
  );
};

export default StatList;
