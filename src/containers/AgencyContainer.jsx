import React from "react";
import { Agency } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";

const AgencyContainer = () => {
  const role = useSelector((state) => state.auth.role);
  return role <= 1 ? <Redirect to="login" /> : <Agency />;
};

export default AgencyContainer;
