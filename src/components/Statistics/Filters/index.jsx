import React from "react";
import styled from "styled-components";
import { Row, Title, Text, Box } from "../../../styledComponents";
import { ECONOMIC, STYLES } from "../../../constains";
import Select from "./Select";

const Filters = ({ labels, colors, interests }) => {
  return (
    <Row column align="flex-start">
      <Title margin="0 0 20px" className="title" color={STYLES.blue}>
        Просмотрть заявки:
      </Title>
      <Select options={ECONOMIC.types} placeholder="Заявки по датам" />
      <Select options={ECONOMIC.organ} placeholder="Заявки по органам" />
      {labels.map((item, i) => (
        <Row className="box" margin="0 0 20px">
          <Box
            width="20px"
            margin="0 10px 0 0"
            height="20px"
            bg={colors[i]}
            pointer
          ></Box>
          <Text size="18px" pointer color={STYLES.blue} weight="500">
            {item}
          </Text>
          <Text margin="0 0 0 10px" size="16px" pointer color="black" weight="600">
            {interests[i]}%
          </Text>
        </Row>
      ))}
    </Row>
  );
};

export default Filters;
