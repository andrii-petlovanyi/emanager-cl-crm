import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const usePagination = () => {
  const location = useLocation();
  const [totalData, setTotalData] = useState();
  const [limit, setLimit] = useState();
  const [prevDisabled, setPrevDisabled] = useState(false);
  const [nextDisabled, setNextDisabled] = useState(false);

  const pageNumber = Number(location.search.split('=').at(-1));
  const totalPage = Math.ceil(Number(totalData) / Number(limit));
  const isPageInParams = pageNumber && pageNumber <= totalPage;

  const [page, setPage] = useState(isPageInParams ? pageNumber : 1);

  useEffect(() => {
    page === 1 ? setPrevDisabled(true) : setPrevDisabled(false);
    page === totalPage ? setNextDisabled(true) : setNextDisabled(false);
  }, [page]);

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
