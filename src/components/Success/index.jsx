import React from "react";
import styled from "styled-components";
import successImg from "../../assets/images/icons/success.png";
import { STYLES } from "../../constains";
import { useParams } from "react-router-dom";
import { Img, Container, Row } from "../../styledComponents";
import Status from "./Status";

const SuccessStyled = styled.section`
  .row {
    min-height: 87.8vh;
  }
  .block {
    text-align: center;
    max-width: 443px;
    .title {
      @media screen and (max-width: ${STYLES.breakpoints.xs}) {
        font-size: 25px;
      }
    }
  }
`;

const Success = () => {
  const { status } = useParams();
  return (
    <SuccessStyled>
      <Container>
        <Row className="row" justify="center" align="center">
          <div className="block">
            <Img
              src={successImg}
              alt="img/success"
              width="70px"
              height="70px"
              margin="0 0 15px"
            />
            <Status status={status} />
          </div>
        </Row>
      </Container>
    </SuccessStyled>
  );
};

export default Success;
