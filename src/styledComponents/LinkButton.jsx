import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { STYLES } from "../constains";

const LinkStyled = styled.div`
  width: 100%;
  height: 100%;
  margin: ${({ margin }) => margin || "0"};
  a {
    color: ${({ color }) => color || "white"};
    font-weight: ${({ weight }) => weight || "400"};
    font-size: ${({ size }) => size || "16px"};
    background: ${({ bg }) => bg || STYLES.blue};
    border-radius: ${({ radius }) => radius || "20px"};
    padding: ${({ padding }) => padding || "11px 30px"};
    &:hover {
      background: ${({ bg }) => (bg !== STYLES.blue ? STYLES.blueWhite : bg)};
    }
  }
`;

const LinkButton = ({
  children,
  to,
  padding,
  radius,
  size,
  color,
  bg,
  weight,
  className,
  margin,
}) => {
  return (
    <LinkStyled
      margin={margin}
      padding={padding}
      radius={radius}
      size={size}
      color={color}
      bg={bg}
      className={className}
      weight={weight}
    >
      <Link to={to}>{children}</Link>
    </LinkStyled>
  );
};

export default LinkButton;
