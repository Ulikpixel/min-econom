import React from "react";
import styled from "styled-components";
import { STYLES } from "../constains";

const Button = styled.button`
  font-size: ${({ size }) => size || "16px"};
  font-weight: ${({ weight }) => weight || "400"};
  font-family: ${STYLES.golos};
  color: ${({ color }) => color || "black"};
  background: ${({ bg }) => bg || "none"};
  padding: ${({ padding }) => padding || "12px 38px"};
  border-radius: ${({ radius }) => radius || "10px"};
  border: ${({ bg, border }) => border || `solid 1px ${bg ? bg : STYLES.blue}`};
  margin: ${({ margin }) => margin || "0"};
  &:hover {
   background: ${({ bgHover }) => bgHover || STYLES.blueWhite};
  }
`;

export default Button;
