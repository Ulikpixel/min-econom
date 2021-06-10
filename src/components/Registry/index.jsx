import React from "react";
import { Title, Container, Row, Text } from "../../styledComponents";
import { Table } from "../../common";
import styled from "styled-components";
import { STYLES, COLUMNS, ECONOMIC } from "../../constains";
import Cart from "./Cart";
import Sort from "./Sort";
import Search from "./Search";
import { useHistory } from "react-router-dom";
import { searchRegistry } from "../../utils";
import { registryAPI } from "../../localStorage";
import { Loader } from "../../common";

const RegisrtyStyled = styled.section`
  @media screen and (max-width: ${STYLES.breakpoints.sm}) {
    text-align: center;
  }
  .table {
    margin-bottom: 30px;
    @media screen and (max-width: ${STYLES.breakpoints.lg}) {
      display: none;
    }
  }
  .slider {
    display: none;
    @media screen and (max-width: ${STYLES.breakpoints.lg}) {
      display: block;
    }
  }
  .pagination {
    width: 200px;
    margin: 0 auto;
    overflow-x: scroll;
    ::-webkit-scrollbar {
      height: 5px;
      &-thumb {
        background: ${STYLES.blue};
      }
    }
    p {
      &.active {
        color: ${STYLES.blue};
      }
    }
  }
`;

const Registry = ({
  pages,
  changePage,
  dots,
  currentPage,
  searchRedux,
  role,
  isFetching,
}) => {
  const history = useHistory();

  const setRequest = (e) => {
    const item = e.target;
    if (item.tagName === "TD") {
      const id = item.dataset.id;
      history.push("/request/" + id);
    }
  };

  const searchRequest = ({ text }) => {
    const data = registryAPI.get();
    const registry = searchRegistry(data, text);
    searchRedux(registry);
  };
  return isFetching ? (
    <Loader />
  ) : (
    <RegisrtyStyled>
      <Container padding="25px 15px">
        <Title margin="0 0 12px" color={STYLES.blue} weight="700" size="24px">
          Заявки:
        </Title>
        {role ? (
          <>
            <Sort {...ECONOMIC} />
            <Search onSubmit={searchRequest} />
          </>
        ) : (
          <Search onSubmit={searchRequest} />
        )}
        <Table data={pages} columns={COLUMNS} onClick={setRequest} />
        <Row wrap={true} className="slider">
          {pages.map((item) => (
            <Cart {...item} key={item.id} />
          ))}
        </Row>
        <Row justify="flex-start" className="pagination">
          {dots.map((item) => (
            <Text
              key={item}
              pointer
              margin="0 0 0 20px"
              size="18px"
              className={currentPage === item ? "active" : ""}
              color="black"
              onClick={() => changePage(item)}
            >
              {item}
            </Text>
          ))}
        </Row>
      </Container>
    </RegisrtyStyled>
  );
};

export default Registry;
