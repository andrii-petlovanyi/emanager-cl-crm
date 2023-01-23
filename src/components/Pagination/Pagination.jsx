/* eslint-disable react/prop-types */
import { Box, Button, IconButton, Text, useMediaQuery } from '@chakra-ui/react';
import BtnClickAnim from 'components/Animations/BtnClickAnim';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import PagBtn from './PagBtn';

const Pagination = ({
  page,
  setPage,
  totalPage,
  nextPage,
  prevPage,
  prevDisabled = false,
  nextDisabled = false,
}) => {
  const [notMobile] = useMediaQuery('(min-width: 768px)');

  const isVisible = page > 0 && totalPage > 0;

  const beforePage = page - 1;
  const afterPage = page + 1;

  return (
    isVisible && (
      <Box display="inline-block" mx="auto" mt="20px">
        <Box
          display="flex"
          mt="20px"
          mx="auto"
          maxW="auto"
          p="5px 10px"
          gap="5px"
          justifyContent="center"
          // maxW={{ base: '280px', msm: '430px' }}
          width="100%"
          borderRadius="10px"
          alignItems="center"
          bgColor="sectionBG"
        >
          <BtnClickAnim disabled={prevDisabled}>
            <IconButton
              isDisabled={prevDisabled}
              onClick={prevPage}
              icon={<MdKeyboardArrowLeft />}
              variant="tabArrowIB"
              _hover={{
                color: `${prevDisabled ? 'primaryTextColor' : 'hoverColor'}`,
              }}
            />
          </BtnClickAnim>
          {notMobile ? (
            <>
              {page !== 1 && <PagBtn page={Number(1)} setPage={setPage} />}

              {page > 3 && <Button variant="paginationDelimiter">...</Button>}
              {page > 2 && <PagBtn page={beforePage} setPage={setPage} />}

              {page === totalPage ? (
                ''
              ) : (
                <PagBtn page={page} variant="paginationActiveBtn" />
              )}

              {totalPage >= 2 && page < totalPage - 1 && (
                <PagBtn page={afterPage} setPage={setPage} />
              )}
              {page < totalPage - 1 && (
                <Button variant="paginationDelimiter">...</Button>
              )}

              <PagBtn
                page={totalPage}
                setPage={setPage}
                variant={
                  totalPage === page ? 'paginationActiveBtn' : 'paginationBtn'
                }
              />
            </>
          ) : (
            <>
              <PagBtn page={page} variant="paginationActiveBtn" />
              <Text variant="paginationDelimiter">...</Text>
              <PagBtn page={totalPage} />
            </>
          )}
          <BtnClickAnim disabled={nextDisabled}>
            <IconButton
              isDisabled={nextDisabled}
              onClick={nextPage}
              icon={<MdKeyboardArrowRight />}
              variant="tabArrowIB"
              _hover={{
                color: `${nextDisabled ? 'primaryTextColor' : 'hoverColor'}`,
              }}
            />
          </BtnClickAnim>
        </Box>
      </Box>
    )
  );
};

export default Pagination;
