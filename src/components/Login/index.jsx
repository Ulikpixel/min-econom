import React from "react";
import { reduxForm, Field } from "redux-form";
import { InputForm } from "../../common";
import { Title, Label, Button, Row, Text } from "../../styledComponents";
import styled from "styled-components";
import { STYLES } from "../../constains";
import { validFieldMin, validField } from "../../utils";

const minLength = validFieldMin(2);

const FormStyled = styled.form`
  .row {
    min-height: 500px;
  }
  .block {
    border: solid 2px ${STYLES.blue};
    width: 400px;
    padding: 35px 23px 61px;
    border-radius: 15px;
    @media screen and (max-width: ${STYLES.breakpoints.sm}) {
      max-width: 400px;
    }
  }
  .input-form {
    margin-bottom: 30px;
    border: solid 1px ${STYLES.blue};
    border-radius: 10px;
    input {
      border: none;
    }
  }
  .btn {
    text-align: center;
  }
  .error {
    text-align: center;
    margin-top: 16px;
  }
`;

const Form = ({ handleSubmit, error }) => {
  return (
    <FormStyled onSubmit={handleSubmit}>
      <Row className="row" justify="center" align="center" padding="0 15px">
        <div className="block">
          <Title
            margin="0 0 20px"
            center
            color={STYLES.blue}
            weight="700"
            size="24px"
          >
            Авторизация
          </Title>
          <Label margin="0 0 0 5px">Логин</Label>
          <Field
            type="email"
            validate={[validField, minLength]}
            component={InputForm}
            placeholder="info@minecon.kg"
            name="email"
          />
          <Label margin="0 0 0 5px">Пароль</Label>
          <Field
            type="password"
            validate={[validField, minLength]}
            component={InputForm}
            placeholder="**************"
            name="password"
          />
          <div className="btn">
            <Button
              bg={STYLES.blue}
              color="white"
              padding="9px 69px"
              weight="700"
              size="16px"
            >
              Войти
            </Button>
          </div>
          {error && (
            <Text className="error" weight="700" size="16px" color={STYLES.red}>
              Неверный логин или пароль
            </Text>
          )}
        </div>
      </Row>
    </FormStyled>
  );
};

const Login = reduxForm({
  form: "login",
})(Form);

export default Login;
