import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\t&:enter, &:appear {\n\t\t\topacity: 0.01;\n\t}\n\n\t&:enter-active, &:appear-active  {\n\t\topacity: 1;\n\t\ttransition: opacity ", "ms ease-out;\n    transition-delay: ", "\n\t}\n\n\t&:exit {\n\t\topacity: 1;\n\t}\n\n\t&:exit-active {\n\t\topacity: 0.01;\n\t\ttransition: opacity ", "ms ease-out;\n\t}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import transition from "styled-transition-group";
var appearDuration = 600;
var leaveDuration = 1000;
export var Fade = transition.div(_templateObject(), appearDuration, function (_ref) {
  var _ref$delay = _ref.delay,
      delay = _ref$delay === void 0 ? 0 : _ref$delay;
  return "".concat(delay, "ms;");
}, leaveDuration);