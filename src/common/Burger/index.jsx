import React from "react";
import styled from "styled-components";
import { STYLES } from "../../constains";

const BurgerStyled = styled.div`
  width: 45px;
  height: 45px;
  cursor: pointer;
  position: relative;
  z-index: 95;
  &::after,
  span,
  &::before {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    content: "";
    width: 80%;
    height: 6%;
    background: ${STYLES.blue};
    transition: 0.6s;
  }
  &::after {
    ${({ active }) =>
      active
        ? `top: 45%;
    transition: 0.6s;
    transform: rotate(43deg);
    left: 12%;`
        : `top: 25%;`}
  }
  span {
    ${({ active }) => (active ? "opacity: 0;" : "top: 45%;")}
  }
  &::before {
    ${({ active }) =>
      active
        ? `top: 45%;
    transition: 0.6s;
    transform: rotate(-43deg);
    left: 12%;`
        : `top: 65%;`}
  }
`;

const Burger = ({ active, setActive, className }) => {
  return (
    <BurgerStyled
      active={active}
      className={className}
      onClick={() => setActive(!active)}
    >
      <span></span>
    </BurgerStyled>
  );
};

export default Burger;
