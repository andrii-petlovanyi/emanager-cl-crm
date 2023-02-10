/* eslint-disable react/prop-types */
import { Flex, IconButton, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import debounce from 'lodash.debounce';
import { useCallback } from 'react';
import { MdSearch } from 'react-icons/md';

const PostSearch = ({ setSearch, isFetching = false, search, ...rest }) => {
  const searchHandler = e => {
    e.preventDefault();
    setSearch(() => e.target.value.trim().toLowerCase());
  };

  const debouncedChangeHandler = useCallback(debounce(searchHandler, 400), []);

  return (
    <>
      <Flex {...rest}>
        <InputGroup size="md">
          <InputLeftElement
            as={IconButton}
            pointerEvents="none"
            fontSize="22px"
            variant='customIB'
            isLoading={search && isFetching}
            // eslint-disable-next-line react/no-children-prop
            children={<MdSearch color="secondaryTextColor" />}
          />
          <Input
            type="text"
            placeholder="Search for model"
            variant="custom"
            onChange={debouncedChangeHandler}
            _placeholder={{ opacity: 0.8, color: 'primaryTextColor' }}
          />
        </InputGroup>
      </Flex>
    </>
  );
};

export default PostSearch;
