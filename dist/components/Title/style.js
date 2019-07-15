import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  left: 7px;\n  font-size: 1em;\n  width: 0;\n  display: inline-block;\n  animation: ", " 1s ease infinite;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  min-width: 110px;\n  ", "\n  & > div {\n    display: inline-block;\n  }\n  .icon {\n    position: relative;\n    top: 2px;\n    margin-left: 19px;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  font-size: 1.7em;\n  display: flex;\n  flex-wrap: nowrap;\n  align-self: stretch;\n  position: relative;\n  text-shadow: 0 1px 1px rgba(96, 32, 214, 0.5);\n  letter-spacing: 0.6px;\n  width: 100%;\n  margin-bottom: 0;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\t0% {\n\t\topacity: 0;\n\t}\n\t50% {\n\t\topacity: 1;\n\t}\n\t100% {\n\t\topacity: 0\n\t}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import styled, { keyframes } from "styled-components";
export var Blink = keyframes(_templateObject());
export var Title = styled.h2(_templateObject2());
Title.displayName = "S.Title";
export var Word = styled.div(_templateObject3(), function (_ref) {
  var hide = _ref.hide;
  return hide && "position: absolute;\n\t\tleft: 0;";
});
Word.displayName = "S.Word";
export var Cursor = styled.span(_templateObject4(), Blink);
Cursor.displayName = "S.Cursor";