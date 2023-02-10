import Toast from 'components/Toast/Toast';
import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

const usePagination = () => {
  const location = useLocation();
  const [, setSearchParams] = useSearchParams();
  const [totalData, setTotalData] = useState();
  const [limit, setLimit] = useState();
  const [prevDisabled, setPrevDisabled] = useState(false);
  const [nextDisabled, setNextDisabled] = useState(false);
  const { addToast } = Toast();

  const pageNumber = Number(location.search.split('=').at(-1));
  const totalPage = Math.ceil(Number(totalData) / Number(limit));

  const [page, setPage] = useState(pageNumber ? pageNumber : 1);

  useEffect(() => {
    if (totalData && pageNumber > totalPage) {
      addToast({
        message: `Sorry, but page with number ${pageNumber} not found`,
        type: 'error',
      });
      setPage(totalPage);
      setSearchParams(() => `page=` + totalPage);
    }
    page === 1 ? setPrevDisabled(true) : setPrevDisabled(false);
    page === totalPage ? setNextDisabled(true) : setNextDisabled(false);
  }, [page, totalData]);

  const nextPage = () => {
    if (page === totalPage) return;
    setPage(prev => prev + 1);
  };

  const prevPage = () => {
    if (page === 1) return;
    setPage(prev => prev - 1);
  };

  return {
    page,
    setPage,
    nextPage,
    prevPage,
    setTotalData,
    setLimit,
    prevDisabled,
    nextDisabled,
    totalPage,
  };
};

export default usePagination;
