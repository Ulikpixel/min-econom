import React from "react";
import styled from "styled-components";
import { STYLES } from "../constains";

const Text = styled.p`
  color: ${({ color }) => color || "#737373"};
  font-weight: ${({ weight }) => weight || "400"};
  font-family: ${STYLES.golos};
  font-size: ${({ size }) => size || "16px"};
  cursor: ${({ pointer }) => pointer ? "pointer" : "arrow"};
  margin: ${({ margin }) => margin || "0"};
`;

export default Text;
