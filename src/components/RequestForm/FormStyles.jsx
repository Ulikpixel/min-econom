import React from "react";
import styled from "styled-components";
import { STYLES } from "../../constains";

const FormRequest = styled.form`
  @media screen and (max-width: ${STYLES.breakpoints.sm}) {
    label {
      font-size: 16px;
    }
    input::placeholder, .select-form--placeholder {
      font-size: 14px;
      color: red;
    }
  }
  .select-form,
  .textarea-form,
  .file-form,
  .input-form {
    margin-bottom: 29px;
  }
  .request-form--checkbox {
    margin-bottom: 44px;
    padding: 5px;
    input {
      width: 15px;
      height: 15px;
      margin-right: 10px;
    }
  }
`;

export default FormRequest;
