import React from "react";
import { STYLES } from "../../../constains";
import { Text, Title, LinkButton } from "../../../styledComponents";

const Status = ({ status }) => {
  switch (status) {
    case "consideration":
      return (
        <>
          <Title className="title" size="22px" margin="0 0 10px" color={STYLES.blue}>
            Ваша заявка находится на рассмотрении
          </Title>
          <Text className="text" margin="0 0 5px" size="16px" weight="600" color={STYLES.blue}>
            На ваш электронный адрес было отправлено письмо
          </Text>
          <LinkButton
            className="button"
            to="/"
            padding="12px 20px"
            radius="10px"
            margin="20px 0 0"
          >
            На главную страницу
          </LinkButton>
        </>
      );
    case "approved":
      return (
        <>
          <Title className="title" size="22px" margin="0 0 10px" color={STYLES.blue}>
            Заявка отправленна в реестр министерства
          </Title>
          <LinkButton
            margin="20px 0 0"
            to="/registry"
            padding="12px 20px"
            radius="10px"
          >
            На страницу заявок
          </LinkButton>
        </>
      );
    case "denied":
      return (
        <>
          <Title className="title" margin="0 0 10px" color={STYLES.blue}>
            Заявка отправленна на перерасмотрение
          </Title>
          <LinkButton
            margin="20px 0 0"
            to="/registry"
            size="12px"
            padding="12px 20px"
            radius="10px"
          >
            На страницу заявок
          </LinkButton>
        </>
      );
  }
};

export default Status;
