import React from "react";
import { reduxForm } from "redux-form";

import { TitleInputWithField } from "./lib";

const Form = () => (
  <div>
    <h2>Form</h2>
    <form key="testForm">
      <TitleInputWithField name="Title" animationType="lettero4">
        Lettero4
      </TitleInputWithField>
    </form>
  </div>
);

export default reduxForm({
  form: "testForm"
})(Form);
