/* eslint-disable react/prop-types */

import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Text,
  Tooltip,
} from '@chakra-ui/react';
import moment from 'moment';
import OfferOptions from './OfferOptions';

/* eslint-disable no-unused-vars */
const OfferCard = ({ offer = {} }) => {
  const { _id: id, model, date, firstName, lastName, username } = offer;

  const firstNameLetter = firstName ? firstName.charAt(0).toUpperCase() : '';
  const lastNameLetter = lastName ? lastName.charAt(0).toUpperCase() : '';
  return (
    <>
      <Card
        position="relative"
        maxW={{ base: '420px', lg: '320px' }}
        borderRadius="10px"
        bgColor="sectionBG"
        color="primaryTextColor"
        mx={{ base: 'auto', md: '0' }}
        width="100%"
        boxShadow="cardShadow"
      >
        <CardHeader>
          <Flex spacing="4">
            <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
              <Text
                width="45px"
                height="45px"
                borderRadius="50%"
                color="secondaryTextColor"
                bg="badgeAccentBG"
                display="flex"
                justifyContent="center"
                alignItems="center"
                fontSize="18px"
              >
                {firstNameLetter + lastNameLetter}
              </Text>
              <Box>
                <Text>
                  {firstName ?? ''} {lastName ?? ''}
                </Text>
                <Text fontSize="12px">{username ?? ''}</Text>
              </Box>
            </Flex>
            <OfferOptions id={id} />
          </Flex>
        </CardHeader>
        <CardBody p="0 20px 20px 20px" display="flex" justifyContent="center">
          <Text
            p="5px 10px"
            bg="badgeAccentBG"
            fontSize="18px"
            fontWeight="700"
            fontFamily="'Montserat' san-serif"
            color="secondaryTextColor"
            borderRadius="10px"
            textAlign="center"
          >
            {model.length > 15 ? (
              <Tooltip hasArrow label={model} bg="gray.300" color="black">
                {model.slice(0, 15) + '...'}
              </Tooltip>
            ) : (
              model
            )}
          </Text>
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
            <Text mb="5px">added:</Text>
            <Text>{moment(new Date(date * 1000)).format('DD/MM')}</Text>
            <Text fontSize="16px">
              {moment(new Date(date * 1000)).format('YY')}
            </Text>
          </Box>
        </Box>
      </Card>
    </>
  );
};

export default OfferCard;
