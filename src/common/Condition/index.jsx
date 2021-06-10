import React from "react";
import { Text } from "../../styledComponents";
import styled from "styled-components";
import { STYLES } from "../../constains";

const ConditionStyled = styled.div`
  height: 490px;
  padding: 5px;
  overflow-y: scroll;
  margin-bottom: 10px;
  position: relative;
  ::-webkit-scrollbar {
    width: 5px;
    &-thumb {
      border-radius: 50px;
      background: ${STYLES.blue};
    }
  }
  p {
    margin-bottom: 44px;
    &:nth-last-child(1) {
      margin-bottom: 0;
    }
  }
`;

const Condition = ({ data }) => {
  return (
    <ConditionStyled className="condition">
      {data.map((item, i) => (
        <Text key={i}>{item}</Text>
      ))}
    </ConditionStyled>
  );
};

export default Condition;
