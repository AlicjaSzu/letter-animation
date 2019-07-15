import React, { useCallback, useEffect, useState } from "react";
import { Field } from "redux-form";

import AnimatedTitle from "../Title";
import { Input } from "./Input";
import * as S from "./style";

export const TitleInputWithField = ({
  animationType = "lettero4",
  delay = 200,
  name,
  children
}) => {
  const [value, setValue] = useState(children);

  useEffect(() => {
    setValue(children);
  }, [children]);

  const [focus, setFocus] = useState(false);

  const addFocusClass = useCallback(() => setFocus(true), []);
  const removeFocusClass = useCallback(() => setFocus(false), []);
  const handleChange = useCallback(value => setValue(value), []);

  return (
    <S.TitleInput>
      <AnimatedTitle delay={delay} focus={focus} animationType={animationType}>
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
