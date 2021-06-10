import React, { useState } from "react";
import {
  Text,
  Container,
  LinkButton,
  Button,
  Row,
} from "../../styledComponents";
import styled from "styled-components";
import { STYLES } from "../../constains";
import { useHistory } from "react-router-dom";
import { Loader, Document } from "../../common";
import List from "./List";
import Panel from "./Panel";
import Topline from "./Topline";

const RequestStyled = styled.section`
  @media screen and (max-width: ${STYLES.breakpoints.sm}) {
    text-align: center;
  }
  .field {
    margin: 10px 0;
    @media screen and (max-width: ${STYLES.breakpoints.sm}) {
      flex-direction: column;
      justify-content: center;
    }
  }
  textarea {
    border: solid 2px ${STYLES.blue};
    border-radius: 20px;
    width: 60%;
    padding: 10px;
    height: 201px;
    font-weight: 600;
    font-size: 16px;
    color: ${STYLES.blue};
    margin-right: ${({ files }) => (files ? "32px" : "0")};
    &::placeholder {
      font-weight: 400;
      font-size: 16px;
      color: ${STYLES.blue};
    }
    @media screen and (max-width: ${STYLES.breakpoints.lg}) {
      width: ${({ files }) => (files ? "55%" : "90%")};
    }
    @media screen and (max-width: ${STYLES.breakpoints.sm}) {
      width: 90%;
      margin-bottom: ${({ files }) => (files ? "20px" : 0)};
      margin-right: 0;
    }
  }
  .send {
    @media screen and (max-width: ${STYLES.breakpoints.sm}) {
      margin: 0 auto;
    }
  }
  .link {
    margin-top: 20px;
  }
`;

const Request = ({ status, role, isGetRequest, files, cause, ...props }) => {
  const [panel, setPanel] = useState(false);
  const [changeStatus, setChangeStatus] = useState(true);
  const history = useHistory();

  const sendNewStatus = () => {
    history.push(`/success/${changeStatus ? "approved" : "denied"}`);
  };

  return isGetRequest ? (
    <Loader />
  ) : (
    <RequestStyled files={files}>
      <Container padding="25px 15px">
        <Topline
          panel={panel}
          setPanel={setPanel}
          status={status}
          role={role}
        />
        <List {...props} />
        <Text weight="600" size="16px" color={STYLES.blue}>
          Описание не благоприятного фактора:
        </Text>
        <Row wrap className="field" justify="flex-start">
          <textarea placeholder="Описание фактора">{cause}</textarea>
          {files && <Document files={files} />}
        </Row>
        {panel && (
          <Panel
            setChangeStatus={setChangeStatus}
            changeStatus={changeStatus}
          />
        )}
        {panel ? (
          <Button
            bg={STYLES.blue}
            className="send"
            color="white"
            onClick={sendNewStatus}
          >
            Отправить
          </Button>
        ) : (
          <LinkButton to="/registry" className="link" radius="10px" size="16px">
            Закрыть просмотр
          </LinkButton>
        )}
      </Container>
    </RequestStyled>
  );
};

export default Request;
