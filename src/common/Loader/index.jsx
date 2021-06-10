import React from "react";
import styled from "styled-components";
import { STYLES } from "../../constains";

const LoaderStyled = styled.div`
  width: ${({ width }) => width || "150px"};
  height: ${({ height }) => height || "150px"};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media screen and (max-width: ${STYLES.breakpoints.sm}) {
    width: 100px;
    height: 100px;
  }
  img {
    width: 100%;
    height: 100%;
  }
`;

const Loader = ({ width, height, className }) => {
  return (
    <LoaderStyled
      width={width}
      height={height}
      className={"loader " + className}
    >
      <img
        src="https://thumbs.gfycat.com/DefinitiveJaggedDalmatian-max-1mb.gif"
        alt="loader"
      />
    </LoaderStyled>
  );
};

export default Loader;
