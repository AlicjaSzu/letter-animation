import React, { useCallback, useEffect, useState } from "react";
import { Field } from "redux-form";

import AnimatedTitle from "../Title";
import { Input } from "./Input";
import * as S from "./style";

export const TitleInputWithField = ({ animationType, name, title = null }) => {
  const [value, setValue] = useState(title);

  useEffect(() => {
    setValue(title);
  }, [title]);

  const [focusClass, setFocusClass] = useState("");

  const addFocusClass = useCallback(() => setFocusClass("focus"), []);
  const removeFocusClass = useCallback(() => setFocusClass(""), []);
  const handleChange = useCallback(value => setValue(value), []);

  return (
    <S.TitleInput>
      <AnimatedTitle
        focus={focusClass}
        animationType={animationType}
        dynamicType={true}
        inputStyle
      >
        {value}
      </AnimatedTitle>
      <Field
        component={Input}
        name={name}
        handleChange={handleChange}
        addFocusClass={addFocusClass}
        removeFocusClass={removeFocusClass}
      />
    </S.TitleInput>
  );
};
