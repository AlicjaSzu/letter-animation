import React from "react";
import * as S from "./style";
import { reset } from "./utils";

export const Input = ({
  addFocusClass,
  removeFocusClass,
  input: { value, onChange, name },
  handleChange
}) => (
  <S.Input
    type="text"
    name={name}
    value={value}
    onChange={e => {
      handleChange && handleChange(e.target.value);
      reset(e);
      onChange(e);
    }}
    onFocus={addFocusClass}
    onBlur={removeFocusClass}
    onMouseUp={reset}
    onKeyDown={reset}
    onKeyUp={reset}
  />
);
