import { SimpleGrid } from '@chakra-ui/react';
import SectionAnim from 'components/Animations/SectionAnim';
import Post from 'components/Post/Post';
import { useGetArchiveListQuery } from 'redux/archive/archiveApiSlice';

const ArchivePosts = () => {
  const { data, isLoading } = useGetArchiveListQuery({});
  const { archivePosts } = data || [];
  return (
    !isLoading && (
      <SectionAnim delay={0.1}>
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
      </SectionAnim>
    )
  );
};

export default ArchivePosts;
