import React, { useEffect, useRef } from "react";
import { map, isEqual, isEmpty, last, number, sumBy } from "lodash";
import { bool, string } from "prop-types";
import uniqid from "uniqid";
import FontAwesome from "react-fontawesome";

import { Letter } from "../Letter";
import { convertStringToList } from "../../utils";

import * as S from "./style";
import { Fade } from "../../animations";

const ANIMATION_NONE = "none";

const getLastLetterObj = title => last(last(title));

const getType = ({ type, letter, lastPrevLetter, title, prevTitle }) => {
  const renderedFirstTime = !prevTitle;
  if (renderedFirstTime) {
    return type;
  }
  return isEqual(lastPrevLetter, letter) && !isEqual(prevTitle, title)
    ? type
    : ANIMATION_NONE;
};

const shouldRenderIn = (title, prevTitle) => {
  const titleLength = title[title.length - 1].length;
  const prevTitleLength = prevTitle
    ? prevTitle[prevTitle.length - 1].length
    : 0;

  return isEmpty(prevTitle) || titleLength >= prevTitleLength;
};

const renderIcon = ({ iconType, focus, iconDelay, duration = 600 }) => (
  <Fade
    in={!focus}
    timeout={iconDelay ? iconDelay + duration : 200}
    delay={iconDelay}
    appear
    unmountOnExit
  >
    <FontAwesome
      name={iconType}
      style={{ cursor: "pointer" }}
      className="icon"
    />
  </Fade>
);

const renderCursor = focus => focus && <S.Cursor key={uniqid()}>|</S.Cursor>;

const renderEmpty = focus => (
  <S.Title>
    <S.Word>{renderCursor(focus)}</S.Word>
  </S.Title>
);

const getLetterDelay = (focus, animationIn, delay) =>
  focus ? null : animationIn ? delay : 50;

const renderLetters = ({
  delay = 200,
  word,
  animationType = "lettero1",
  animationIn,
  focus,
  lastPrevLetter,
  title,
  prevTitle
}) =>
  map(word, ({ letter, index: letterIndex }) => (
    <Letter
      id={letterIndex}
      key={uniqid()}
      type={getType({
        type: animationType,
        letter: { index: letterIndex, letter },
        lastPrevLetter,
        title,
        prevTitle
      })}
      text={letter}
      letterDelay={getLetterDelay(focus, animationIn, delay)}
      animationIn={animationIn}
    />
  ));

const renderWords = ({
  title,
  animationType,
  animationIn,
  delay,
  focus,
  prevTitle
}) => {
  const text = animationIn ? title : prevTitle;
  const lastPrevLetter = getLastLetterObj(text);

  return map(text, word =>
    renderLetters({
      word,
      animationType,
      animationIn,
      delay,
      focus,
      lastPrevLetter,
      title,
      prevTitle
    })
  );
};

const renderText = ({
  animationType,
  delay,
  duration,
  focus,
  iconType,
  prevTitle,
  title
}) => {
  const renderedFirstTime = !!prevTitle;
  const animationIn = shouldRenderIn(title, prevTitle);
  const iconDelay = renderedFirstTime ? 0 : sumBy(title, "length") * 250;

  return (
    <S.Word>
      {renderWords({
        animationType,
        animationIn,
        delay,
        focus,
        title,
        prevTitle
      })}
      {renderCursor(focus)}
      {renderIcon({ iconType, focus, iconDelay, duration })}
    </S.Word>
  );
};

const AnimatedTitle = ({
  delay = 200,
  duration = 500,
  focus,
  children,
  animationType = "lettero1",
  iconType = "edit"
}) => {
  const title = convertStringToList(children);
  const prevTitle = useRef(null);

  useEffect(() => {
    prevTitle.current = title;
  }, [children, focus, title]);

  return children ? (
    <S.Title>
      {renderText({
        animationType,
        delay,
        duration,
        focus,
        iconType,
        title,
        prevTitle: prevTitle.current
      })}
    </S.Title>
  ) : (
    renderEmpty(focus)
  );
};

export default AnimatedTitle;

AnimatedTitle.propTypes = {
  children: string,
  animationType: string,
  focus: string,
  inputStyle: bool,
  iconType: string,
  delay: number
};