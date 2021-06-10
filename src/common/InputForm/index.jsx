import React from "react";
import styled from "styled-components";
import { STYLES } from "../../constains";

const InputStyled = styled.div`
  position: relative;
  height: 43px;
  overflow: hidden; 
  width: 100%;
  input {
    padding: 11px 14px;
    border: ${({ error }) =>
      error ? `solid 1px rgb(196, 98, 98);` : `solid 1px ${STYLES.border};`}
    height: 41px;
    width: 100%;
    border-radius: 10px;
    font-size: 16px;
    font-weight: 400;
    font-family: ${STYLES.golos};
    color: black;
    &::placeholder {
      opacity: ${({ error }) => (error ? "0" : "1")};
      color: ${STYLES.border};
    }
  }
`;

const InputForm = ({ input, meta, ...props }) => {
  const hasError = meta.error && meta.touched;
  return (
    <InputStyled error={hasError} className="input-form">
      <input type="text" {...input} {...props} />
    </InputStyled>
  );
};

export default InputForm;
