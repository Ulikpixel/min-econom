import React from "react";
import Select from "react-select";

const styles = {
  control: (styles) => ({ ...styles, width: "300px" }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    
  },
};

const SelectTag = ({ options }) => {
  return <Select options={options} styles={styles} />;
};

export default SelectTag;
