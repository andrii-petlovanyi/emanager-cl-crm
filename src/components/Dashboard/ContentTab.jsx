/* eslint-disable react/prop-types */
import { Box, Text } from '@chakra-ui/react';
import TabPagination from 'components/Pagination/TabPagination';

const ContentTab = ({ totalData, setPage, page, limit, title, children }) => {
  const totalPage = Math.ceil(totalData / limit);
  const decrDisabled = page === 1;
  const incrDisabled = page === totalPage || page === 3;

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
          {title}
        </Text>

        {children}
        <Box display="flex" justifyContent="flex-end" mt="10px">
          <TabPagination
            decrDisabled={decrDisabled}
            incrDisabled={incrDisabled}
            decrementHandler={decrementHandler}
            incrementHandler={incrementHandler}
          />
        </Box>
      </Box>
    </>
  );
};

export default ContentTab;
