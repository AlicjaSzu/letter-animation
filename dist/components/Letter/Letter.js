import React from "react";
import * as S from "./style";
var ANIMATION_NONE = "none";
export var Letter = function Letter(_ref) {
  var id = _ref.id,
      text = _ref.text,
      type = _ref.type,
      _ref$animationIn = _ref.animationIn,
      animationIn = _ref$animationIn === void 0 ? true : _ref$animationIn,
      _ref$letterDelay = _ref.letterDelay,
      letterDelay = _ref$letterDelay === void 0 ? 50 : _ref$letterDelay;
  return React.createElement(S.Letter, {
    index: id,
    type: type === ANIMATION_NONE ? null : type,
    letterDelay: letterDelay,
    inOut: animationIn ? "in" : "out"
  }, text);
};