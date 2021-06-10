import React from "react";
import EntityForm from "./EntityForm";
import IndividualForm from "./IndividualForm";
import { STYLES } from "../../constains";
import { Route, useHistory } from "react-router-dom";
import { Container, Title, Row } from "../../styledComponents";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { postRequest } from "../../redux/actions/registryActions";

const RequestStyled = styled.section`
  .title {
    @media screen and (max-width: ${STYLES.breakpoints.sm}) {
      font-size: 25px;
    }
  }
  button {
    display: block;
  }
`;

const RequestPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const routeRole = (value) => {
    if (value === "Физическое лицо") {
      history.push("/requestForm/individual");
    } else {
      history.push("/requestForm");
    }
  };

  const sendRequest = (data) => {
    history.push("/success/consideration");
    dispatch(postRequest({ ...data, id: Date.now() }));
  };
  return (
    <RequestStyled>
      <Container small padding="30px 15px">
        <Row column>
          <Title className="title" margin="0 0 20px" color={STYLES.blue} size="23px">
            Жалоба о негативном факторе
          </Title>
          <Route
            path="/requestForm"
            exact
            render={() => (
              <EntityForm routeRole={routeRole} onSubmit={sendRequest} />
            )}
          />
          <Route
            path="/requestForm/individual"
            exact
            render={() => (
              <IndividualForm routeRole={routeRole} onSubmit={sendRequest} />
            )}
          />
        </Row>
      </Container>
    </RequestStyled>
  );
};

export default RequestPage;
