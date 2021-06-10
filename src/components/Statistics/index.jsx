import React from "react";
import { Container, Row, Box } from "../../styledComponents";
import styled from "styled-components";
import Graphics from "./Graphics";
import Download from "./Download";
import { STATUSES, STYLES } from "../../constains";
import { Loader } from "../../common";
import Filters from "./Filters";

const StatisticsStyled = styled.section`
  min-height: 87.8vh;
  .container {
    position: relative;
  }
  .row {
    @media screen and (max-width: ${STYLES.breakpoints.lg}) {
      align-items: center;
    }
    @media screen and (max-width: ${STYLES.breakpoints.sm}) {
      flex-direction: column;
    }
  }
  .title {
    @media screen and (max-width: ${STYLES.breakpoints.lg}) {
      font-size: 25px;
    }
  }
  .grafic {
    @media screen and (max-width: ${STYLES.breakpoints.lg}) {
      width: 300px;
      height: 300px;
    }
  }
`;

const Statistics = ({ interest, isFetching }) => {
  const interests = Object.values(interest);
  const labels = STATUSES.map((item) => item.text);
  const colors = STATUSES.map((item) => item.color);
  return isFetching ? (
    <Loader />
  ) : (
    <StatisticsStyled>
      <Container className="container" padding="61px 15px 0">
        <Row className="row" align="flex-start" justify="space-around">
          <Filters labels={labels} colors={colors} interests={interests} />
          <Box width="500px" height="500px" className="grafic">
            <Graphics {...interest} colors={colors} />
          </Box>
        </Row>
        <Download />
      </Container>
    </StatisticsStyled>
  );
};

export default Statistics;
