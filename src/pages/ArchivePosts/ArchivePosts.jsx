import { SimpleGrid } from '@chakra-ui/react';
import Post from 'components/Post/Post';
import { useGetArchiveListQuery } from 'redux/archive/archiveApiSlice';

const ArchivePosts = () => {
  const { data, isLoading } = useGetArchiveListQuery({});
  const { archivePosts } = data || [];
  return (
    !isLoading && (
      <SimpleGrid
        minChildWidth={{ base: '240px', msm: '300px' }}
        spacing="20px"
        justifyContent="center"
        width="100%"
      >
        {archivePosts?.length
          ? archivePosts?.map(post => (
              <Post key={post._id} post={post} type={'archive'} />
            ))
          : 'Sorry, no posts in archive'}
      </SimpleGrid>
    )
  );
};

export default ArchivePosts;
