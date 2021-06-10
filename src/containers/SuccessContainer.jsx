import React from "react";
import { Success } from "../components";
import { Loader } from "../common";
import { useSelector } from "react-redux";

const SuccessContainer = () => {
  const isSend = useSelector(({ registry }) => registry.isSend);
  if (isSend) return <Loader />;
  return <Success />;
};

export default SuccessContainer;
