import React from "react";
import styled from "styled-components";

const Img = styled.img`
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "100%"};
  margin: ${({ margin }) => margin || "0"};
`;

export default Img;
