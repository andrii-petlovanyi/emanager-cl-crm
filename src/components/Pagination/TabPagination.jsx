/* eslint-disable react/prop-types */
import { IconButton } from '@chakra-ui/react';
import BtnClickAnim from 'components/Animations/BtnClickAnim';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

const TabPagination = ({
  decrDisabled,
  incrDisabled,
  decrementHandler,
  incrementHandler,
}) => {
  return (
    <>
      <BtnClickAnim disabled={decrDisabled}>
        <IconButton
          isDisabled={decrDisabled}
          onClick={decrementHandler}
          icon={<MdKeyboardArrowLeft />}
          variant="tabArrowIB"
          _hover={{
            color: `${decrDisabled ? 'primaryTextColor' : 'hoverColor'}`,
          }}
        />
      </BtnClickAnim>
      <BtnClickAnim disabled={incrDisabled}>
        <IconButton
          isDisabled={incrDisabled}
          onClick={incrementHandler}
          icon={<MdKeyboardArrowRight />}
          variant="tabArrowIB"
          _hover={{
            color: `${incrDisabled ? 'primaryTextColor' : 'hoverColor'}`,
          }}
        />
      </BtnClickAnim>
    </>
  );
};

export default TabPagination;
