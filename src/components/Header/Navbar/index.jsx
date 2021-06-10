import React from "react";
import { NavLink } from "react-router-dom";
import { LINKS, STYLES } from "../../../constains";
import { Row } from "../../../styledComponents";
import styled from "styled-components";

const NavbarStyled = styled.nav`
  @media screen and (max-width: ${STYLES.breakpoints.xl}) {
    position: fixed;
    width: 300px;
    height: 100%;
    top: 0;
    right: -500px;
    background: white;
    transition: 0.6s;
    z-index: 90;
    padding: 0 20px;
    &.active {
      right: 0;
      transition: 0.6s;
    }
  }
  .row {
    @media screen and (max-width: ${STYLES.breakpoints.xl}) {
      flex-direction: column;
      align-items: flex-start;
      padding-top: 70px;
    }
  }
  .item {
    margin-left: 50px;
    &:nth-child(1) {
      margin-left: 0;
    }
    @media screen and (max-width: ${STYLES.breakpoints.xl}) {
      margin-left: 0;
      margin-bottom: 36px;
    }
    &.hide {
      display: none;
    }
  }
  .icon {
    display: none;
    width: 30px;
    height: 30px;
    margin-right: 13px;
    text-align: center;
    @media screen and (max-width: ${STYLES.breakpoints.xl}) {
      display: block;
    }
  }
  .link {
    font-size: 16px;
    font-weight: 400;
    color: ${STYLES.blue};
    @media screen and (max-width: ${STYLES.breakpoints.xl}) {
      color: ${STYLES.blue};
      font-size: 16px;
      display: flex;
      align-items: center;
    }
    @media screen and (max-width: ${STYLES.breakpoints.xs}) {
      font-size: 20px;
    }
  }
`;

const Navbar = ({ setActive, className, role }) => {
  return (
    <NavbarStyled className={className}>
      <ul className="list">
        <Row className="row">
          {LINKS.map(({ text, route, icon }, i) => {
            return (
              <li
                key={text}
                onClick={() => setActive(false)}
                className={
                  (i === 4 && role <= 0) || (i === 5 && role <= 1)
                    ? "item hide"
                    : "item"
                }
              >
                <NavLink to={route} exact className="link">
                  {icon && <span className="icon">{icon()}</span>}
                  {text}
                </NavLink>
              </li>
            );
          })}
        </Row>
      </ul>
    </NavbarStyled>
  );
};

export default Navbar;
