import React from "react";
import { Header } from "../components";
import { useSelector } from "react-redux";

const HeaderContainer = () => {
  const role = useSelector((state) => state.auth.role);
  return <Header role={role} />;
};

export default HeaderContainer;
