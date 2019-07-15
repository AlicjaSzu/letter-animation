import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React, { useCallback, useEffect, useState } from "react";
import { TitleInput } from "./TitleInput";
export var TitleInputWithState = function TitleInputWithState(_ref) {
  var _ref$children = _ref.children,
      children = _ref$children === void 0 ? null : _ref$children,
      rest = _objectWithoutProperties(_ref, ["children"]);

  var _useState = useState(children),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  useEffect(function () {
    setValue(children);
  }, [children]);
  var onChange = useCallback(function (value) {
    return setValue(value);
  }, []);
  return React.createElement(TitleInput, Object.assign({
    title: value,
    onChangeHandler: onChange
  }, rest));
};