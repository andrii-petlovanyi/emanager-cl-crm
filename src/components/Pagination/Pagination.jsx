/* eslint-disable react/prop-types */
import { Box, IconButton, Text } from '@chakra-ui/react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

const Pagination = ({
  page,
  totalPage,
  nextPage,
  prevPage,
  prevDisabled = false,
  nextDisabled = false,
}) => {
  const isVisible = page > 0 && totalPage > 0;

  return (
    isVisible && (
      <Box
        display="flex"
        mt="20px"
        gap="5px"
        justifyContent="center"
        width="100%"
      >
        <IconButton
          isDisabled={prevDisabled}
          onClick={prevPage}
          icon={<MdKeyboardArrowLeft />}
          variant="tabArrowIB"
        />
        <Text p="6px">{page === totalPage ? '' : page}</Text>
        <Text p="6px">...</Text>
        <Text p="6px">{totalPage}</Text>
        <IconButton
          isDisabled={nextDisabled}
          onClick={nextPage}
          icon={<MdKeyboardArrowRight />}
          variant="tabArrowIB"
        />
      </Box>
    )
  );
};

export default Pagination;
