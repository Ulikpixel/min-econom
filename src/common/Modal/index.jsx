import React from "react";
import styled from "styled-components";

const ModalStyled = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${({ width }) => width || "80%"};
  height: ${({ height }) => height || "80%"};
  z-index: 98;
  background: white;
  border-radius: ${({ radius }) => radius || "0"};
  display: ${({ active }) => (active ? "block" : "none")};
  padding: ${({ padding }) => padding || "10px"};
`;

const Modal = ({
  children,
  active,
  setActive,
  width,
  height,
  radius,
  className,
  padding,
}) => {
  const closeModal = () => {
    setActive(false);
  };
  return (
    <ModalStyled
      padding={padding}
      active={active}
      className={className}
      onClick={closeModal}
      width={width}
      height={height}
      radius={radius}
    >
      {children}
    </ModalStyled>
  );
};

export default Modal;
