import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-size: ${({ size }) => size || "30px"};
  weight: ${({ weight }) => weight || "bold"};
  color: ${({ color }) => color || "black"};
  margin: ${({ margin }) => margin || "0"};
  text-align: ${({ center }) => center ? "center" : "left"};
`;

export default Title;
