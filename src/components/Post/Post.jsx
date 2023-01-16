/* eslint-disable react/prop-types */
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  IconButton,
  Image,
  Link,
  Stack,
  Text,
} from '@chakra-ui/react';
import { MdBookmark, MdMenuBook } from 'react-icons/md';
import PostInfoModal from './PostInfoModal';
import PostOptions from './PostOptions';

// eslint-disable-next-line no-unused-vars
const Post = ({ post = {} }) => {
  return (
    <>
      <Card
        // maxW="md"
        position="relative"
        display="flex"
        borderRadius="10px"
        flexDirection={{ base: 'column', msm: 'row' }}
        flexWrap="wrap"
        bgColor="sectionBG"
        height="150px"
      >
        <CardHeader p="0" flex={{ base: '0', msm: '1' }}>
          <PostOptions />
          <Box
            height="100%"
            width="100%"
            display={{ base: 'none', msm: 'block' }}
          >
            <Image
              borderLeftRadius="10px"
              height="100%"
              width="100%"
              objectFit="cover"
              src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="Preview model"
            />
          </Box>
        </CardHeader>
        <Box flex="2">
          <CardBody
            p="0"
            height="100%"
            display="flex"
            flexDirection="column"
            justifyContent="space-around"
          >
            <Stack textAlign={'center'} align={'center'}>
              <Text p="5px" bg="red" borderRadius="10px">
                EW7F348SU
              </Text>
            </Stack>
            <Box
              mx="auto"
              display="flex"
              gap="10px"
              flexDirection="row"
              justifyContent="center"
            >
              <PostInfoModal />
              <IconButton
                as={Link}
                href="https://google.com"
                isExternal
                color="primaryTextColor"
                icon={<MdBookmark />}
                colorScheme="gray"
                aria-label="Link to card model on official site"
                variant="outline"
              />
              <IconButton
                as={Link}
                href="https://google.com"
                isExternal
                color="primaryTextColor"
                icon={<MdMenuBook />}
                colorScheme="gray"
                aria-label="Link to documentations"
                variant="outline"
              />
            </Box>
          </CardBody>

          {/* <CardFooter
            justify="space-between"
            flexWrap="wrap"
            sx={{
              '& > button': {
                minW: '60px',
              },
            }}
          ></CardFooter> */}
        </Box>
      </Card>
    </>
  );
};

export default Post;
