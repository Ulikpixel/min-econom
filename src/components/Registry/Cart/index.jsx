import React from "react";
import styled from "styled-components";
import { STYLES } from "../../../constains";
import { useHistory } from "react-router-dom";
import { getStatus } from "../../../utils";

const CartStyled = styled.div`
  border: solid 1px ${STYLES.tableBorder};
  max-width: 320px;
  min-height: 320px;
  margin: 0 auto 30px;
  border-radius: 10px;
  cursor: pointer;
  div {
    border-bottom: solid 1px $table-border;
    text-align: center;
    padding: 10px;
  }
  .header,
  .description,
  .index {
    border-bottom: solid 1px ${STYLES.tableBorder};
  }
  .description {
    font-size: 16px;
    font-weight: 200;
  }
  .header {
    color: ${STYLES.blue};
    font-weight: 600;
    font-size: 16px;
  }
  .status {
    border-bottom: none;
    color: ${({ color }) => color || "black"};
  }
`;

const Cart = ({ id, cause, subjects, economic, region, organ, status }) => {
  const history = useHistory();
  return (
    <CartStyled
      onClick={() => history.push("/request/" + id)}
      color={getStatus(status)}
    >
      <div className="index">
        <p>№{id}</p>
      </div>
      <div className="header">
        <p>Неблагоприятный фактор</p>
      </div>
      <div className="description">
        <p>{cause}</p>
      </div>
      <div className="header">
        <p>
          Субъекты/Ассоциация субъектов предпринимательства, на которую влияет
          неблагоприятный фактор
        </p>
      </div>
      <div className="description">
        <p>{subjects}</p>
      </div>
      <div className="header">
        <p>Отрасль экономической деятельности</p>
      </div>
      <div className="description">
        <p>{economic}</p>
      </div>
      <div className="header">
        <p>Область (г. Бишкек/Ош)</p>
      </div>
      <div className="description">
        <p>{region}</p>
      </div>
      <div className="header">
        <p>Ответственный государственный орган</p>
      </div>
      <div className="description">
        <p>{organ}</p>
      </div>
      <div className="header">
        <p>Статус решения Неблагоприятного фактора</p>
      </div>
      <div className={"status + " + getStatus(status)}>
        <p>{status}</p>
      </div>
    </CartStyled>
  );
};

export default Cart;
