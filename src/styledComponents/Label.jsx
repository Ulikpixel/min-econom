import React from "react";
import styled from "styled-components";
import { STYLES } from "../constains";

const Label = styled.label`
  font-size: ${({ size }) => size || "16px"};
  font-weight: ${({ weight }) => weight || "600"};
  font-family: ${STYLES.golos};
  color: ${({ color }) => color || STYLES.blue};
  margin: ${({ margin }) => margin || "0" };
`;

export default Label;
