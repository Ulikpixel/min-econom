import React from "react";
import { Field, reduxForm } from "redux-form";
import { Modal, InputForm, SelectForm } from "../../../common";
import { Text, Button, Label, Row } from "../../../styledComponents";
import { STYLES } from "../../../constains";
import styled from "styled-components";

const Form = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <Label>Название</Label>
        <Field name="organ" component={InputForm} placeholder="Налоговая" />
        <Label>Регион</Label>
        <Field name="field" component={InputForm} placeholder="Ош" />
      </div>
      <Row column>
        <Button color="white" margin="0 0 10px" bg={STYLES.blue} padding="9px 53px">
          Добавить
        </Button>
        <Button
          color="white"
          bg={STYLES.red}
          bgHover={STYLES.redWhite}
          padding="9px 53px"
        >
          Удалить
        </Button>
      </Row>
    </form>
  );
};

const ReduxForm = reduxForm({
  form: "organ",
})(Form);

const ModalFormStyled = styled.div`
  text-align: center;
  .modal {
    @media screen and (max-width: ${STYLES.breakpoints.sm}) {
      width: 310px;
      height: 310px;
    }
  }
  .field {
    text-align: left;
  }
  .input-form {
    margin: 0 0 20px;
  }
  .close {
    position: absolute;
    right: 15px;
    top: 10px;
  }
`;

const ModalForm = ({ modal, setModal }) => {
  return (
    <ModalFormStyled>
      <Modal
        width="436px"
        height="386px"
        active={modal}
        setActive={setModal}
        radius="20px"
        className="modal"
        padding="35px 23px"
      >
        <Text className="title" color={STYLES.blue} weight="bold" size="23px">
          Новый гос. орган
        </Text>
        <ReduxForm />
        <Button
          border="none"
          padding="0"
          bg="none"
          bgHover="none"
          className="close"
          onClick={() => setModal(false)}
          size="20px"
        >
          &#10006;
        </Button>
      </Modal>
    </ModalFormStyled>
  );
};

export default ModalForm;
