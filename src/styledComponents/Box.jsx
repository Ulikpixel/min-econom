import React from "react";
import styled from "styled-components";

const Box = styled.div`
  width: ${({ width }) => width || "100px"};
  min-height: ${({ height }) => height || "100px"};
  background: ${({ bg }) => bg || "white"};
  margin: ${({ margin }) => margin || "0"};
  border: ${({ border }) => border || "none"};
  border-radius: ${({ radius }) => radius || "none"};
  padding: ${({ padding }) => padding || "0"};
  text-align: ${({ textAlign }) => textAlign || "left"};
  cursor: ${({ pointer }) => (pointer ? "pointer" : "arrow")};
`;

export default Box;
