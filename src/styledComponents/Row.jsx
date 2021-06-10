import React from "react";
import styled from "styled-components";

const Row = styled.div`
  display: flex;
  justify-content: ${({ justify }) => justify || "space-between"};
  align-items: ${({ align }) => align || "center"};
  flex-wrap: ${({ wrap }) => (wrap ? "wrap" : "nowrap")};
  flex-direction: ${({ column }) => (column ? "column" : "row")};
  padding: ${({ padding }) => padding || "0"};
  margin: ${({ margin }) => margin || "0"}; 
`;

export default Row;
