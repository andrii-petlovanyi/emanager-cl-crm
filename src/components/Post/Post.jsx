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
  Tooltip,
} from '@chakra-ui/react';
import { MdBookmark, MdMenuBook } from 'react-icons/md';

import PostInfoModal from './PostInfoModal';
import PostOptions from './PostOptions';
import moment from 'moment';
import PostEdit from './PostEdit';
import { useState } from 'react';

// eslint-disable-next-line no-unused-vars
const Post = ({ post = {}, type = '' }) => {
  // eslint-disable-next-line no-unused-vars
  const { model, urlOffSite, urlBook, urlImg, info, author, updatedAt } = post;
  const [open, setOpen] = useState(false);

  return (
    <>
      <Card
        position="relative"
        display="flex"
        flexWrap="wrap"
        flexDirection={{ base: 'column', msm: 'row' }}
        maxW={{ base: '100%', md: '480px' }}
        borderRadius="10px"
        bgColor="sectionBG"
        height="150px"
      >
        <CardHeader p="0" flex={{ base: '0', msm: '1' }}>
          <PostOptions post={post} type={type} setOpen={setOpen} />
          <PostEdit openModal={open} setOpen={setOpen} post={post} />
          <Box
            height="150px"
            width="100%"
            display={{ base: 'none', msm: 'block' }}
          >
            <Image
              borderLeftRadius="10px"
              height="100%"
              width="100%"
              objectFit="cover"
              src={
                urlImg
                  ? urlImg
                  : 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
              }
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
              <Text
                p="5px 10px"
                bg="badgeAccentBG"
                fontSize="18px"
                fontWeight="700"
                fontFamily="'Montserat' san-serif"
                color="secondaryTextColor"
                borderRadius="10px"
              >
                {model ? model : 'EW7F348SU'}
              </Text>
            </Stack>
            <Box mx="auto" display="flex" gap="10px">
              <PostInfoModal
                postInfo={info ? info : {}}
                model={model ? model : ''}
              />
              <Tooltip hasArrow label="Link to card product on official site">
                <IconButton
                  as={Link}
                  href={urlOffSite ? urlOffSite : 'https://google.com'}
                  isExternal
                  icon={<MdBookmark />}
                  aria-label="Link to card model on official site"
                  variant="customOutIB"
                />
              </Tooltip>
              <Tooltip hasArrow label="Link to product documentations">
                <IconButton
                  as={Link}
                  href={urlBook ? urlBook : 'https://google.com'}
                  isExternal
                  icon={<MdMenuBook />}
                  aria-label="Link to documentations"
                  variant="customOutIB"
                />
              </Tooltip>
            </Box>
          </CardBody>
          <Box
            position="absolute"
            bottom="0"
            right="0"
            height="100px"
            width="50px"
            borderTopLeftRadius="10px"
            borderBottomRightRadius="10px"
            overflow="hidden"
          >
            <Box
              position="absolute"
              bottom="-45px"
              right="0"
              textAlign="center"
              fontSize="11px"
              fontWeight="700"
              p="4px"
              borderTopLeftRadius="10px"
              borderBottomRightRadius="10px"
              bgColor="sidebarActiveLinkBG"
              color="secondaryTextColor"
              transition="350ms ease"
              _hover={{ bottom: '0' }}
            >
              <Text mb="5px">upd:</Text>
              <Text>{moment(updatedAt).format('DD/MM')}</Text>
              <Text fontSize="16px">{moment(updatedAt).format('YY')}</Text>
            </Box>
          </Box>
        </Box>
      </Card>
    </>
  );
};

export default Post;
