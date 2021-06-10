import { Registry } from "../components";
import React, { useEffect } from "react";
import {
  setCurrentPage,
  getRegistry,
  searchRedux,
} from "../redux/actions/registryActions";
import { useSelector, useDispatch } from "react-redux";
import { pagination } from "../utils";

const RegistryContainer = () => {
  const dispatch = useDispatch();
  const { currentPage, pageSize, list, isFetching, totalCount } = useSelector(
    (state) => state.registry
  );
  const auth = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(getRegistry());
  }, []);

  const dots = [];
  const pages = pagination(list)(currentPage, pageSize);
  const pagesCount = Math.ceil(totalCount / pageSize);
  for (let i = 1; i <= pagesCount; i++) {
    dots.push(i);
  }
  return (
    <Registry
      dots={dots}
      currentPage={currentPage}
      pageSize={pageSize}
      pages={pages}
      list={list}
      isFetching={isFetching}
      changePage={(current) => dispatch(setCurrentPage(current))}
      getRegistry={() => dispatch(getRegistry())}
      searchRedux={() => dispatch(searchRedux())}
      {...auth}
    />
  );
};

export default RegistryContainer;
