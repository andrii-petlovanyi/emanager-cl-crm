/* eslint-disable no-unused-vars */

import { Button } from '@chakra-ui/react';
import BtnClickAnim from 'components/Animations/BtnClickAnim';
import { Link } from 'react-router-dom';

/* eslint-disable react/prop-types */
const PagBtn = ({ variant = 'paginationBtn', setPage, page }) => {
  return (
    <>
      <BtnClickAnim>
        <Button
          as={Link}
          variant={variant}
          onClick={() => setPage(page)}
          to={`?page=${page}`}
        >
          {page}
        </Button>
      </BtnClickAnim>
    </>
  );
};

export default PagBtn;
