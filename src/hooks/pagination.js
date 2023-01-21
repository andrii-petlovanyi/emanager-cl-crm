import { useEffect, useState } from 'react';

const usePagination = () => {
  const [page, setPage] = useState(1);
  const [totalData, setTotalData] = useState();
  const [limit, setLimit] = useState();
  const [prevDisabled, setPrevDisabled] = useState(false);
  const [nextDisabled, setNextDisabled] = useState(false);

  const totalPage = Math.ceil(Number(totalData) / Number(limit));

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
