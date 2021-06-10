import React from "react";
import styled from "styled-components";
import { STYLES } from "../../constains";

const TextareaStyled = styled.div`
  position: relative;
  width: 100%;
  height: 174px;
  overflow: hidden;
  textarea {
    border: solid 1px
      ${({ error }) => (error ? "rgb(196, 98, 98)" : STYLES.border)};
    width: 100%;
    height: 174px;
    padding: 10px;
    color: black;
    font-family: ${STYLES.golos};
    font-weight: 400;
    font-size: 16px;
    border-radius: 10px;
  }
`;

const TextareaForm = ({ input, meta, ...props }) => {
  const hasError = meta.error && meta.touched;
  return (
    <TextareaStyled error={hasError} className="textarea-form">
      <textarea cols="30" {...input} {...props} rows="10"></textarea>
    </TextareaStyled>
  );
};

export default TextareaForm;
