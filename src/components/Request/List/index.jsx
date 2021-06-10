import React from "react";
import styled from "styled-components";
import { STYLES } from "../../../constains";

const ListStyled = styled.div`
  max-width: 648px;
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  @media screen and (max-width: ${STYLES.breakpoints.sm}) {
    flex-direction: column;
  }
  .description {
    &__block {
      width: 50%;
      margin-bottom: 24px;
      @media screen and (max-width: ${STYLES.breakpoints.sm}) {
        width: 100%;
      }
      &--subtitle {
        font-weight: 400;
        font-size: 14px;
        color: #969696;
      }
      &--text {
        font-weight: 600;
        font-size: 16px;
        color: ${STYLES.blue};
      }
    }
  }
`;

const List = ({ name, economic, company, region, inn, organ, subjects }) => {
  return (
    <ListStyled className="description">
      {name && (
        <div className="description__block">
          <p className="description__block--subtitle">Имя заявителя:</p>
          <p className="description__block--text">{name}</p>
        </div>
      )}
      <div className="description__block">
        <p className="description__block--subtitle">
          Отрасль и вид экономической деятельности:
        </p>
        <p className="description__block--text">{economic}</p>
      </div>
      <div className="description__block">
        <p className="description__block--subtitle">Название компании:</p>
        <p className="description__block--text">{company}</p>
      </div>
      <div className="description__block">
        <p className="description__block--subtitle">Регион:</p>
        <p className="description__block--text">{region}</p>
      </div>
      {inn && (
        <div className="description__block">
          <p className="description__block--subtitle">ИНН:</p>
          <p className="description__block--text">{inn}</p>
        </div>
      )}
      <div className="description__block">
        <p className="description__block--subtitle">Орган:</p>
        <p className="description__block--text">{organ}</p>
      </div>
      <div className="description__block">
        <p className="description__block--subtitle">Тип субъекта:</p>
        <p className="description__block--text">{subjects}</p>
      </div>
    </ListStyled>
  );
};

export default List;
