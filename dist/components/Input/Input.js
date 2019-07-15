import React from "react";
import * as S from "./style";
import { reset } from "./utils";
export var Input = function Input(_ref) {
  var addFocusClass = _ref.addFocusClass,
      removeFocusClass = _ref.removeFocusClass,
      _ref$input = _ref.input,
      value = _ref$input.value,
      _onChange = _ref$input.onChange,
      name = _ref$input.name,
      handleChange = _ref.handleChange;
  return React.createElement(S.Input, {
    type: "text",
    name: name,
    value: value,
    onChange: function onChange(e) {
      handleChange && handleChange(e.target.value);
      reset(e);

      _onChange(e);
    },
    onFocus: addFocusClass,
    onBlur: removeFocusClass,
    onMouseUp: reset,
    onKeyDown: reset,
    onKeyUp: reset
  });
};