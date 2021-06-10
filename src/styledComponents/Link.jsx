import React from "react";
import styled from "styled-components";

const A = styled.a`
  color: ${({ color }) => color || "black"};
  font-size: ${({ size }) => size || "14px"};
  font-weight: ${({ weight }) => weight || "400"};
`;

export default A;
