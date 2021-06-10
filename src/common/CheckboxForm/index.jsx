import React from "react";
import styled from "styled-components";
import { Label } from "../../styledComponents";
import { STYLES } from "../../constains";

const CheckboxStyled = styled.div`
  input {
    position: relative;
    width: 15px;
    height: 15px;
    &::after {
      content: "";
      top: 0;
      left: 0;
      border: solid 1px red;
      width: 90%;
      height: 89%;
      border-radius: 4px;
      z-index: 10;
      position: absolute;
      display: ${({ error }) => (error ? "block" : "none")};
    }
    label {
      color: ${({ error }) => (error ? "red" : STYLES.border)};
    }
  }
`;

const CheckboxForm = ({ meta, label, input, ...props }) => {
  const hasError = meta.error && meta.touched;
  return (
    <CheckboxStyled className="checkbox-form" error={hasError}>
      <Label color={hasError && STYLES.red}>
        <input type="checkbox" {...input} {...props} />
        {label}
      </Label>
    </CheckboxStyled>
  );
};

export default CheckboxForm;
