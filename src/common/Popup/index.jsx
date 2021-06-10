import React from "react";
import styled from "styled-components";

const PopupStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  cursor: pointer;
  z-index: 80;
  display: none;
  display: ${({ active }) => (active ? "block" : "none")};
`;

const Popup = ({ active, setActive, className }) => {
  return (
    <PopupStyled
      onClick={() => setActive(false)}
      active={active}
      className={className}
    ></PopupStyled>
  );
};

export default Popup;
