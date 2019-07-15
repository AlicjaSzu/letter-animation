import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      animation-timing-function: ", ";\n      animation-delay: ", "ms;\n      animation-name: ", ";\n      animation-duration: ", "ms;\n      animation-fill-mode: both;\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import { css } from "styled-components";
import animationTypes from "./types";

var letterAnimation = function letterAnimation(_ref) {
  var type = _ref.type,
      index = _ref.index,
      _ref$letterDelay = _ref.letterDelay,
      letterDelay = _ref$letterDelay === void 0 ? 0 : _ref$letterDelay,
      _ref$inOut = _ref.inOut,
      inOut = _ref$inOut === void 0 ? "in" : _ref$inOut;
  var anim = animationTypes[type] ? animationTypes[type](index, letterDelay)[inOut] : null;
  return anim && css(_templateObject(), anim.easing, anim.delay, anim.func(index), anim.time);
};

export default letterAnimation;