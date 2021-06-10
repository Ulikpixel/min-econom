import React from "react";
import { Login } from "../components";

const LoginContainer = () => {
  const login = (data) => {
    console.log(data);
  };
  return <Login onSubmit={login} />;
};

export default LoginContainer;
