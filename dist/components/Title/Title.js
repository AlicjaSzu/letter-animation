import React, { useEffect, useRef } from "react";
import { map, isEqual, isEmpty, last, sumBy } from "lodash";
import uniqid from "uniqid";
import FontAwesome from "react-fontawesome";
import { Letter } from "../Letter";
import { convertStringToList } from "../../utils";
import * as S from "./style";
import { Fade } from "../../animations";
var ANIMATION_NONE = "none";

var getLastLetterObj = function getLastLetterObj(title) {
  return last(last(title));
};

var getType = function getType(_ref) {
  var type = _ref.type,
      letter = _ref.letter,
      lastPrevLetter = _ref.lastPrevLetter,
      title = _ref.title,
      prevTitle = _ref.prevTitle;
  var renderedFirstTime = !prevTitle;

  if (renderedFirstTime) {
    return type;
  }

  return isEqual(lastPrevLetter, letter) && !isEqual(prevTitle, title) ? type : ANIMATION_NONE;
};

var shouldRenderIn = function shouldRenderIn(title, prevTitle) {
  var titleLength = title[title.length - 1].length;
  var prevTitleLength = prevTitle ? prevTitle[prevTitle.length - 1].length : 0;
  return isEmpty(prevTitle) || titleLength >= prevTitleLength;
};

var renderIcon = function renderIcon(_ref2) {
  var iconType = _ref2.iconType,
      focus = _ref2.focus,
      iconDelay = _ref2.iconDelay,
      _ref2$duration = _ref2.duration,
      duration = _ref2$duration === void 0 ? 600 : _ref2$duration,
      type = _ref2.type;
  return React.createElement(Fade, {
    in: !focus && type === "input",
    timeout: iconDelay || 200,
    delay: iconDelay,
    appear: true,
    unmountOnExit: true
  }, React.createElement(FontAwesome, {
    name: iconType,
    style: {
      cursor: "pointer"
    },
    className: "icon"
  }));
};

var renderCursor = function renderCursor(focus) {
  return focus && React.createElement(S.Cursor, {
    key: uniqid()
  }, "|");
};

var renderEmpty = function renderEmpty(focus) {
  return React.createElement(S.Title, null, React.createElement(S.Word, null, renderCursor(focus)));
};

var getLetterDelay = function getLetterDelay(focus, animationIn, delay) {
  return focus ? null : animationIn ? delay : 50;
};

var renderLetters = function renderLetters(_ref3) {
  var _ref3$delay = _ref3.delay,
      delay = _ref3$delay === void 0 ? 200 : _ref3$delay,
      word = _ref3.word,
      _ref3$animationType = _ref3.animationType,
      animationType = _ref3$animationType === void 0 ? "lettero1" : _ref3$animationType,
      animationIn = _ref3.animationIn,
      focus = _ref3.focus,
      lastPrevLetter = _ref3.lastPrevLetter,
      title = _ref3.title,
      prevTitle = _ref3.prevTitle;
  return map(word, function (_ref4) {
    var letter = _ref4.letter,
        letterIndex = _ref4.index;
    return React.createElement(Letter, {
      id: letterIndex,
      key: uniqid(),
      type: getType({
        type: animationType,
        letter: {
          index: letterIndex,
          letter: letter
        },
        lastPrevLetter: lastPrevLetter,
        title: title,
        prevTitle: prevTitle
      }),
      text: letter,
      letterDelay: getLetterDelay(focus, animationIn, delay),
      animationIn: animationIn
    });
  });
};

var renderWords = function renderWords(_ref5) {
  var title = _ref5.title,
      animationType = _ref5.animationType,
      animationIn = _ref5.animationIn,
      delay = _ref5.delay,
      focus = _ref5.focus,
      prevTitle = _ref5.prevTitle;
  var text = animationIn ? title : prevTitle;
  var lastPrevLetter = getLastLetterObj(text);
  return map(text, function (word) {
    return renderLetters({
      word: word,
      animationType: animationType,
      animationIn: animationIn,
      delay: delay,
      focus: focus,
      lastPrevLetter: lastPrevLetter,
      title: title,
      prevTitle: prevTitle
    });
  });
};

var renderText = function renderText(_ref6) {
  var animationType = _ref6.animationType,
      delay = _ref6.delay,
      duration = _ref6.duration,
      focus = _ref6.focus,
      iconType = _ref6.iconType,
      prevTitle = _ref6.prevTitle,
      title = _ref6.title,
      type = _ref6.type;
  var renderedFirstTime = !!prevTitle;
  var animationIn = shouldRenderIn(title, prevTitle);
  var iconDelay = renderedFirstTime ? 0 : sumBy(title, "length") * 250;
  return React.createElement(S.Word, null, renderWords({
    animationType: animationType,
    animationIn: animationIn,
    delay: delay,
    focus: focus,
    title: title,
    prevTitle: prevTitle
  }), renderCursor(focus), renderIcon({
    iconType: iconType,
    focus: focus,
    iconDelay: iconDelay,
    duration: duration,
    type: type
  }));
};

var AnimatedTitle = function AnimatedTitle(_ref7) {
  var _ref7$delay = _ref7.delay,
      delay = _ref7$delay === void 0 ? 200 : _ref7$delay,
      _ref7$duration = _ref7.duration,
      duration = _ref7$duration === void 0 ? 500 : _ref7$duration,
      _ref7$focus = _ref7.focus,
      focus = _ref7$focus === void 0 ? false : _ref7$focus,
      children = _ref7.children,
      _ref7$animationType = _ref7.animationType,
      animationType = _ref7$animationType === void 0 ? "lettero1" : _ref7$animationType,
      _ref7$iconType = _ref7.iconType,
      iconType = _ref7$iconType === void 0 ? "edit" : _ref7$iconType,
      _ref7$type = _ref7.type,
      type = _ref7$type === void 0 ? "text" : _ref7$type;
  var title = convertStringToList(children);
  var prevTitle = useRef(null);
  useEffect(function () {
    prevTitle.current = title;
  }, [children, focus, title]);
  return children ? React.createElement(S.Title, null, renderText({
    animationType: animationType,
    delay: delay,
    duration: duration,
    focus: focus,
    iconType: iconType,
    title: title,
    type: type,
    prevTitle: prevTitle.current
  })) : renderEmpty(focus);
};

export default AnimatedTitle;