import React from "react";
import Select from "react-select";
import styled from "styled-components";
import { STYLES } from "../../constains";

const styles = {
  option: (provided, state) => ({
    ...provided,
    fontWeight: "400",
    fontFamily: STYLES.golos,
    color: STYLES.blue,
    backgroundColor: state.data.color,
    fontSize: "16px",
    borderBottom: "solid 1px #C4C4C4",
  }),
  control: () => ({
    border: "none",
    borderRadius: "10px",
    height: "41px",
    width: "100%",
    display: "flex",
  }),
  singleValue: (provided, state) => ({
    ...provided,
    fontSize: "16px",
    fontWeight: "400",
    fontFamily: STYLES.golos,
    color: STYLES.blue,
  }),
};

const SelectStyled = styled.div`
  width: 100%;
  border: solid 1px ${({ error }) => (error ? STYLES.red : STYLES.border)};
  border-radius: 10px;
  p {
    font-size: 16px;
    font-weight: 400;
    font-family: ${STYLES.golos};
    color: ${({ error }) => (error ? STYLES.red : STYLES.border)};
    margin-left: 5px;
  }
`;

const SelectForm = ({
  input,
  options,
  name,
  placeholder,
  meta,
  defaultValue,
}) => {
  const hasError = meta.error && meta.touched;
  return (
    <SelectStyled className="select-form" error={hasError}>
      {hasError && <div className="select-error"></div>}
      <Select
        {...input}
        name={name}
        options={options}
        value={input.value.value}
        onChange={({ value }) => input.onChange(value)}
        onBlur={() => input.onBlur()}
        placeholder={<p className="select-form--placeholder">{placeholder}</p>}
        styles={styles}
        defaultValue={defaultValue}
        noOptionsMessage={() => "Ничего не найдено"}
      />
    </SelectStyled>
  );
};

export default SelectForm;
