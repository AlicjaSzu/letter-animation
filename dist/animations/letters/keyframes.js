import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n\t\t0% {\n\t\t\topacity: 1;\n\t\t\ttransform: rotateY(0);\n\t\t};\n\t\t100% {\n\t\t\ttransform: rotateY(90deg);\n\t\t\topacity: 0\n\t\t}\n\t"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n\t\t0% {\n\t\t\tperspective: 1000;\n\t\t\ttransform-origin: 50% 100%,\n\t\t\topacity: 0;\n\t\t\ttransform: rotateY(-90deg);\n\t\t};\n\t\t40% {\n\t\t\topacity: 1;\n\t\t}\n\t\t100%{\n\t\t\ttransform: rotateY(0);\n\t\t\topacity: 1\n\t\t}\n\t"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n\t\t0% {\n\t\t\topacity: 1;\n\t\t\ttransform: translateY(0) rotateY(0);\n\t\t};\n\t\t40% {\n\t\t\topacity: .5;\n\t\t}\n\t\t100% {\n\t\t\tperspective: 1000;\n\t\t\ttransform: translateY(150%) rotateY(180deg);\n\t\t\topacity: 0\n\t\t}\n\t"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n\t\t0% {\n\t\t\tperspective: 1000;\n\t\t\topacity: 0;\n\t\t\ttransform: translateY(150%) rotateY(180deg);\n\t\t};\n\t\t40% {\n\t\t\topacity: 1;\n\t\t}\n\t\t100% {\n\t\t\ttransform: translateY(0) rotateY(0);\n\t\t\topacity: 1\n\t\t}\n\t"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n\t\t0% {\n\t\t\ttransform: translateY(0);\n\t\t\topacity: 1\n\t\t}\n\t\t40% {\n\t\t\topacity: 1;\n\t\t}\n\t\t100% {\n\t\t\topacity: 0;\n\t\t\ttransform: translateY(", ");\n\t\t};\n\t"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n\t\t0% {\n\t\t\topacity: 0;\n\t\t\ttransform: translateY(", ");\n\t\t};\n\t\t40% {\n\t\t\topacity: 1;\n\t\t}\n\t\t100% {\n\t\t\ttransform: translateY(0);\n\t\t\topacity: 1\n\t\t}\n\t"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n\t\t0% {\n\t\t\topacity: 1;\n\t\t\ttransform:translateX(0);\n\n\t\t};\n\t\t80% {\n\t\t\topacity: 0;\n\t\t}\n\t\t100% {\n\t\t\ttransform: translateX(", "px);\n\t\t\topacity: 0\n\t\t}\n\t"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n\t\t0% {\n\t\t\topacity: 0;\n\t\t\ttransform: translateX(", "px);\n\t\t};\n\t\t70% {\n\t\t\topacity: 1;\n\t\t}\n\t\t100% {\n\t\t\ttransform:translateX(0);\n\t\t\topacity: 1\n\t\t}\n\t"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n\t\t0% {\n\t\t\topacity: 1;\n\t\t};\n\t\t100% {\n\t\t\topacity: 0\n\t\t}\n\t"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\t\t0% {\n\t\t\topacity: 0;\n\t\t};\n\t\t100% {\n\t\t\topacity: 1\n\t\t}\n\t"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import { keyframes } from "styled-components";
export var lettero1In = function lettero1In() {
  var inAnim = keyframes(_templateObject());
  return inAnim;
};
export var lettero1Out = function lettero1Out() {
  var outAnim = keyframes(_templateObject2());
  return outAnim;
};
export var lettero2In = function lettero2In(index) {
  var inAnim = keyframes(_templateObject3(), 50 + index * 10);
  return inAnim;
};
export var lettero2Out = function lettero2Out(index) {
  var outAnim = keyframes(_templateObject4(), 50 + index * 10);
  return outAnim;
};
export var lettero3In = function lettero3In(index) {
  var anim = keyframes(_templateObject5(), index % 2 === 0 ? "-80%" : "80%");
  return anim;
};
export var lettero3Out = function lettero3Out(index) {
  var anim = keyframes(_templateObject6(), index % 2 === 0 ? "-80%" : "80%");
  return anim;
};
export var lettero4In = function lettero4In() {
  var anim = keyframes(_templateObject7());
  return anim;
};
export var lettero4Out = function lettero4Out() {
  var anim = keyframes(_templateObject8());
  return anim;
};
export var lettero5In = function lettero5In(index) {
  var anim = keyframes(_templateObject9());
  return anim;
};
export var lettero5Out = function lettero5Out(index) {
  var anim = keyframes(_templateObject10());
  return anim;
}; // 'fx9' : {
// 	perspective: 1000,
// 	origin: '50% 100%',
// 	in: {
// 		duration: 400,
// 		delay: function(el, index) { return index*50; },
// 		easing: 'easeOutSine',
// 		opacity: 1,
// 		rotateY: [-90,0]
// 	},
// 	out: {
// 		duration: 200,
// 		delay: function(el, index) { return index*50; },
// 		easing: 'easeOutSine',
// 		opacity: 0,
// 		rotateY: 45
// 	}
// },