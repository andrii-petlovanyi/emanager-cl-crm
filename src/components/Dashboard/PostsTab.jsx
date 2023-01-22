import { Box, IconButton, SimpleGrid, Text } from '@chakra-ui/react';
import PostLoader from 'components/Loaders/PostLoader';
import Post from 'components/Post/Post';
import { useState } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { useGetPostsQuery } from 'redux/posts/postsApiSlice';

const PostsTab = () => {
  const [page, setPage] = useState(1);

  const { data, isLoading, isFetching } = useGetPostsQuery({ page, limit: 2 });
  const { posts, totalPosts } = data || {};

  const totalPage = Math.ceil(totalPosts / 2);
  const decrDisabled = page === 1;
  const incrDisabled = page === totalPage || page === 5;

  const incrementHandler = () => {
    if (incrDisabled) return;
    setPage(prev => prev + 1);
  };

  const decrementHandler = () => {
    if (decrDisabled) return;
    setPage(prev => prev - 1);
  };

  return (
    <>
      <Box
        position="relative"
        borderTop="1px solid"
        // borderBottom="1px solid"
        borderColor="borderColor"
        // p="10px"
        pt="30px"
        pb="0"
        // borderRadius="10px"
      >
        <Text
          position="absolute"
          top="-17px"
          left="30px"
          bg="bodyBG"
          px="10px"
          fontSize="20px"
          fontWeight="700"
          // color="secondaryTextColor"
        >
          Last added posts
        </Text>
        <SimpleGrid
          minChildWidth={{ base: '240px', msm: '320px' }}
          spacing="20px"
          justifyContent="center"
          width="100%"
        >
          {!isLoading &&
            !isFetching &&
            (posts?.length
              ? posts.map(post => (
                  <Post key={post._id} post={post} type="post" />
                ))
              : 'Sorry, no posts available...')}

          {(isLoading || isFetching) && (
            <>
              <PostLoader />
              <PostLoader />
            </>
          )}
        </SimpleGrid>
        <Box display="flex" justifyContent="flex-end" mt="10px">
          <IconButton
            isDisabled={decrDisabled}
            onClick={decrementHandler}
            icon={<MdKeyboardArrowLeft />}
            variant="tabArrowIB"
            _hover={{ transform: `${decrDisabled ? 'none' : 'scale(1.1)'}` }}
          />
          <IconButton
            isDisabled={incrDisabled}
            onClick={incrementHandler}
            icon={<MdKeyboardArrowRight />}
            variant="tabArrowIB"
            _hover={{ transform: `${incrDisabled ? 'none' : 'scale(1.1)'}` }}
          />
        </Box>
      </Box>
    </>
  );
};

export default PostsTab;
