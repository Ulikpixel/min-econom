import React, { useState } from "react";
import styled from "styled-components";
import { STYLES } from "../../constains";
import { Row, Container } from "../../styledComponents";
import Section from "./Section";
import { Popup } from "../../common";
import ModalForm from "./ModalForm";

const AdminStyled = styled.section`
  .box {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    @media screen and (max-width: ${STYLES.breakpoints.sm}) {
      flex-direction: column;
      padding: 10px 0;
    }
  }
  .btn {
    &__change {
      display: flex;
      align-items: center;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 20px;
      svg {
        margin-left: 10px;
        @media screen and (max-width: ${STYLES.breakpoints.sm}) {
          display: none;
        }
      }
      @media screen and (max-width: ${STYLES.breakpoints.sm}) {
        position: relative;
        right: 0;
        top: 0;
        margin-top: 20px;
      }
    }
  }
  .title {
    @media screen and (max-width: ${STYLES.breakpoints.sm}) {
      font-size: 20px;
    }
  }
`;

const Admin = () => {
  const [modal, setModal] = useState(false);
  const sections = [
    { title: "Добавить новый гос.орган:", text: "Налоговая" },
    { title: "Добавить новый гос.орган:", text: "Омбудсмен" },
    { title: "Добавить новый регион:", text: "Чуйский регион" },
    { title: "Добавить отрасль деятельности:", text: "Отрасль деятельности" },
  ];
  return (
    <AdminStyled>
      <Container padding="15px">
        <Row column justify="center">
          {sections.map((item, i) => (
            <Section {...item} key={i} setModal={setModal} />
          ))}
        </Row>
        <ModalForm modal={modal} setModal={setModal} />
        <Popup active={modal} setActive={setModal} />
      </Container>
    </AdminStyled>
  );
};

export default Admin;
