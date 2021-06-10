import React from "react";
import Select from "react-select";
import { STYLES } from "../../../../constains";

const styles = {
  control: (styles) => ({
    ...styles,
    width: "252px",
    minHeight: "20px",
    borderRadius: "5px",
    marginBottom: "20px",
  }),
  option: (styles) => ({
    ...styles,
    fontWeight: "400",
    fontFamily: STYLES.golos,
    color: STYLES.blue,
    fontSize: "14px",
    borderBottom: "solid 1px #C4C4C4",
    padding: "5px 10px",
  }),
  placeholder: (styles) => ({
    ...styles,
    fontSize: "14px",
    marginBottom: "10px",
    color: STYLES.border,
  }),
};

const SelectTag = ({ placeholder, options }) => {
  return <Select options={options} placeholder={placeholder} styles={styles} />;
};

export default SelectTag;
