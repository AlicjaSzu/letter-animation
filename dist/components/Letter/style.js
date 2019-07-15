import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  min-width: 7px;\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import styled from "styled-components";
import letterAnimation from "../../animations/letters";
export var Letter = styled.span(_templateObject(), function (_ref) {
  var type = _ref.type,
      index = _ref.index,
      letterDelay = _ref.letterDelay,
      inOut = _ref.inOut;
  return letterAnimation({
    type: type,
    index: index,
    letterDelay: letterDelay,
    inOut: inOut
  });
});
Letter.displayName = "S.Letter";