/* eslint-disable no-unused-vars */

import { Button } from '@chakra-ui/react';
import BtnClickAnim from 'components/Animations/BtnClickAnim';

/* eslint-disable react/prop-types */
const PagBtn = ({ variant = 'paginationBtn', setPage, page = 1 }) => {
  return (
    <>
      <BtnClickAnim>
        <Button variant={variant} onClick={() => setPage(page)}>
          {page}
        </Button>
      </BtnClickAnim>
    </>
  );
};

export default PagBtn;
