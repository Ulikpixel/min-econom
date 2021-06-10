import Navbar from "./Navbar";
import React, { useState } from "react";
import logo from "../../assets/images/icons/logo.png";
import { Popup, Burger } from "../../common";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { STYLES } from "../../constains";
import { Container, Row, Img, Button } from "../../styledComponents";

const HeaderStyled = styled.header`
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);
  .row {
    min-height: 64px;
    @media screen and (max-width: ${STYLES.breakpoints.xl}) {
      justify-content: space-between;
    }
  }
  .language {
    border-bottom: solid 1px ${STYLES.blue};
  }
  .burger {
    display: none;
    @media screen and (max-width: ${STYLES.breakpoints.xl}) {
      display: block;
    }
  }
`;

const Header = ({ role }) => {
  const [modal, setModal] = useState(false);
  return (
    <HeaderStyled>
      <Container>
        <Row className="row" justify="space-around">
          <Link to="/">
            <Img src={logo} alt="logo" width="55px" height="55px" />
          </Link>
          <Navbar
            role={role}
            className={modal && "active"}
            setActive={setModal}
          />
          <Button
            size="21px"
            weight="400"
            color={STYLES.blue}
            border="none"
            className="language"
            padding="0"
            radius="0"
            bgHover="none"
          >
            KG
          </Button>
          <Burger active={modal} setActive={setModal} className="burger" />
          <Popup active={modal} setActive={setModal} />
        </Row>
      </Container>
    </HeaderStyled>
  );
};

export default Header;
