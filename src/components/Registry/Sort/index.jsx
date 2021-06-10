import React, { useState } from "react";
import { Row, Button } from "../../../styledComponents";
import Select from "./Select";
import { STYLES } from "../../../constains";

const Sort = ({ region, organ, cause, types }) => {
  const [sort, setSort] = useState(false);
  return (
    <Row column justify="flex-start" align="flex-start" margin="0 0 10px">
      <Button
        margin="0 0 12px"
        onClick={() => setSort(!sort)}
        bg={STYLES.blue}
        color="white"
        padding="10px 15px"
        radius="33px"
      >
        Сортировка
      </Button>
      {sort && (
        <Row wrap justify="space-around" style={{ width: "100%" }}>
          <Select options={region} placeholder="Регионы" />
          <Select options={organ} placeholder="Орган" />
          <Select options={cause} placeholder="Неблагоприятный фактор" />
          <Select options={types} placeholder="Вид деятельности" />
        </Row>
      )}
    </Row>
  );
};

export default Sort;
