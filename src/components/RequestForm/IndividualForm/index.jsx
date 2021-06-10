import React from "react";
import { Field, reduxForm } from "redux-form";
import {
  validField,
  validFieldMin,
  validFieldMax,
  errorScroll,
} from "../../../utils";
import {
  InputForm,
  TextareaForm,
  SelectForm,
  FileForm,
  CheckboxForm,
  Condition,
} from "../../../common";
import { ECONOMIC, ROLES, CONDITIONS, OPTIONS, STYLES } from "../../../constains";
import FormRequest from "../FormStyles";
import { Button, Label } from "../../../styledComponents";

const minLength = validFieldMin(2);
const maxLengthInput = validFieldMax(30);
const maxLengthTextarea = validFieldMax(1000);

const Form = ({ handleSubmit, routeRole }) => {
  return (
    <FormRequest onSubmit={handleSubmit}>
      <Label>Заявитель:</Label>
      <Field
        options={ROLES}
        component={SelectForm}
        name="role"
        onChange={routeRole}
        defaultValue={ROLES[0]}
      />
      <Label>ФИО:</Label>
      <Field
        component={InputForm}
        name="name"
        validate={[validField, maxLengthInput, minLength]}
        placeholder="Введите ФИО"
      />
      <Label>Место работы:</Label>
      <Field
        component={InputForm}
        name="work"
        validate={[validField, maxLengthInput, minLength]}
        placeholder="Введите место работы"
      />
      <Label>Контакный телефон:</Label>
      <Field
        component={InputForm}
        name="phone"
        type="tel"
        validate={[validField, maxLengthInput, minLength]}
        placeholder="Введите контактный телефон"
      />
      <Label>Электронная почта:</Label>
      <Field
        component={InputForm}
        name="mail"
        validate={[validField, maxLengthInput, minLength]}
        placeholder="Введите электронную почту"
        type="email"
      />
      <Label>Тип субъекта предпринимательста:</Label>
      <Field
        name="subjects"
        component={SelectForm}
        options={OPTIONS}
        validate={[validField]}
        placeholder="Выберите тип субъекта"
      />
      <Label>Отрасль и вид экономической деятельности:</Label>
      <Field
        name="economic"
        component={SelectForm}
        options={ECONOMIC.types}
        validate={[validField]}
        placeholder="Выберите вид экономической деятельности"
      />
      <Label>Оргнан к которому адресована заявка:</Label>
      <Field
        name="organ"
        component={SelectForm}
        options={ECONOMIC.organ}
        validate={[validField]}
        placeholder="Выберите орган"
      />
      <Label>Регион осуществления предпринимательской деятельности:</Label>
      <Field
        name="region"
        component={SelectForm}
        options={ECONOMIC.region}
        validate={[validField]}
        placeholder="Выберите регион"
      />
      <Label>Причина неблагоприятного фактора:</Label>
      <Field
        name="description"
        component={SelectForm}
        options={ECONOMIC.cause}
        validate={[validField]}
        placeholder="Выберите тип неблагоприятного фактора"
      />
      <Label>Описание неблагоприятного фактора:</Label>
      <Field
        component={TextareaForm}
        name="descriptionReason"
        validate={[validField, maxLengthTextarea, minLength]}
      />
      <Label>
        Каким образом и в какой период времени зафиксирован неблагоприятный
        фактор:
      </Label>
      <Field
        component={TextareaForm}
        name="descriptionDate"
        validate={[validField, maxLengthTextarea, minLength]}
      />
      <Label>Как и кем по вашему должна решится ваша проблема? </Label>
      <Field
        component={TextareaForm}
        name="clarification"
        validate={[validField, maxLengthTextarea, minLength]}
      />
      <Field
        component={FileForm}
        type="file"
        name="file"
      />
      <Condition data={CONDITIONS} />
      <div className="request-form--checkbox">
        <Field
          component={CheckboxForm}
          name="condition"
          label="Принять соглашение"
          validate={[validField]}
        />
      </div>
      <Button bg={STYLES.blue} margin="0 auto" color="white">
        Подать жалобу
      </Button>
    </FormRequest>
  );
};

const IndividualForm = reduxForm({
  form: "individual",
  onSubmitFail: errorScroll,
})(Form);

export default IndividualForm;
