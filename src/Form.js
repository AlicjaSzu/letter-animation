import React from "react";
import { reduxForm } from "redux-form";

import { AnimatedInputWithField } from "./lib";

const Form = () => (
  <div>
    <h2>Form</h2>
    <form key="testForm">
      <AnimatedInputWithField name="Title" animationType="lettero4">
        Lettero4
      </AnimatedInputWithField>
    </form>
  </div>
);

export default reduxForm({
  form: "testForm"
})(Form);
