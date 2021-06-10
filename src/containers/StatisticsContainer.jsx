import React, { useEffect } from "react";
import { Statistics } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { getRegistry } from "../redux/actions/registryActions";
import { interestSum } from "../utils";
import { Redirect } from "react-router-dom";

const StatisticsContainer = () => {
  const { list, isFetching } = useSelector((state) => state.registry);
  const role = useSelector((state) => state.auth.role);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRegistry());
  }, []);
  const processing = list.filter((item) => item.status.includes("В обработке"));
  const consideration = list.filter((item) =>
    item.status.includes("На рассмотрений")
  );
  const approved = list.filter((item) => item.status.includes("Одобрено"));
  const renouncement = list.filter((item) => item.status.includes("Отказ"));

  const interest = {
    processing: interestSum(list.length, processing.length),
    consideration: interestSum(list.length, consideration.length),
    approved: interestSum(list.length, approved.length),
    renouncement: interestSum(list.length, renouncement.length),
  };
  return role ? (
    <Statistics interest={interest} isFetching={isFetching} />
  ) : (
    <Redirect to="login" />
  );
};

export default StatisticsContainer;
