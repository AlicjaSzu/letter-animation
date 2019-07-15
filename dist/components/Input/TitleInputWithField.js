import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useCallback, useEffect, useState } from "react";
import { Field } from "redux-form";
import AnimatedTitle from "../Title";
import { Input } from "./Input";
import * as S from "./style";
export var TitleInputWithField = function TitleInputWithField(_ref) {
  var _ref$animationType = _ref.animationType,
      animationType = _ref$animationType === void 0 ? "lettero4" : _ref$animationType,
      _ref$delay = _ref.delay,
      delay = _ref$delay === void 0 ? 200 : _ref$delay,
      name = _ref.name,
      children = _ref.children;

  var _useState = useState(children),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  useEffect(function () {
    setValue(children);
  }, [children]);

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      focus = _useState4[0],
      setFocus = _useState4[1];

  var addFocusClass = useCallback(function () {
    return setFocus(true);
  }, []);
  var removeFocusClass = useCallback(function () {
    return setFocus(false);
  }, []);
  var handleChange = useCallback(function (value) {
    return setValue(value);
  }, []);
  return React.createElement(S.TitleInput, null, React.createElement(AnimatedTitle, {
    delay: delay,
    focus: focus,
    animationType: animationType
  }, value), React.createElement(Field, {
    component: Input,
    name: name,
    handleChange: handleChange,
    addFocusClass: addFocusClass,
    removeFocusClass: removeFocusClass
  }));
};