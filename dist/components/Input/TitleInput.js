import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useCallback, useState } from "react";
import AnimatedTitle from "../Title";
import * as S from "./style";
import { reset } from "./utils";
export var TitleInput = function TitleInput(_ref) {
  var animationType = _ref.animationType,
      name = _ref.name,
      onChangeHandler = _ref.onChangeHandler,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? null : _ref$title;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      focusClass = _useState2[0],
      setFocusClass = _useState2[1];

  var addFocusClass = useCallback(function () {
    return setFocusClass(true);
  }, []);
  var removeFocusClass = useCallback(function () {
    return setFocusClass(false);
  }, []);

  var updateTitle = function updateTitle(e) {
    onChangeHandler && onChangeHandler(e.target.value);
    reset(e);
  };

  var renderInput = function renderInput() {
    return React.createElement(S.Input, {
      type: "text",
      name: name,
      value: title || "",
      onChange: updateTitle,
      onFocus: addFocusClass,
      onBlur: removeFocusClass,
      onMouseUp: reset,
      onKeyDown: reset,
      onKeyUp: reset
    });
  };

  return React.createElement(S.TitleInput, null, React.createElement(AnimatedTitle, {
    focus: focusClass,
    animationType: animationType
  }, title), renderInput());
};