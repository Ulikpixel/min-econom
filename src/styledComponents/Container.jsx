import React from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: ${({ small }) => (small ? "609px" : "1385px")};
  margin: 0 auto;
  padding: ${({ padding }) => padding || "0 15px"};
`;

export default Container;
