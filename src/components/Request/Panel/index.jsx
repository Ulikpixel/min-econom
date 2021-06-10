import React from "react";
import styled from "styled-components";
import { Text, Button } from "../../../styledComponents";
import { STYLES } from "../../../constains";

const PanelStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  max-width: 500px;
  margin-bottom: 20px;
  @media screen and (max-width: ${STYLES.breakpoints.sm}) {
    flex-direction: column;
  }
`;

const Panel = ({ setChangeStatus, changeStatus }) => {
  return (
    <PanelStyled className="panel">
      <Text color={STYLES.blue} size="18px" weight="700" margin="0 0 20px">
        Статус заявки:
      </Text>
      <Button
        color={changeStatus ? "white" : STYLES.blue}
        bg={changeStatus && STYLES.green}
        bgHover={changeStatus && STYLES.greenWhite}
        onClick={() => setChangeStatus(true)}
        size="14px"
        margin="0 0 20px"
      >
        Одобрено
      </Button>
      <Button
        color={changeStatus ? STYLES.blue : "white"}
        bg={!changeStatus && STYLES.red}
        bgHover={!changeStatus && STYLES.redWhite}
        onClick={() => setChangeStatus(false)}
        size="14px"
        margin="0 0 20px"
      >
        Отказано
      </Button>
    </PanelStyled>
  );
};

export default Panel;
