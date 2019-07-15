import React from "react";
import { string, number, bool } from "prop-types";

import * as S from "./style";

const ANIMATION_NONE = "none";

export const Letter = ({
  id,
  text,
  type,
  animationIn = true,
  letterDelay = 50
}) => (
  <S.Letter
    index={id}
    type={type === ANIMATION_NONE ? null : type}
    letterDelay={letterDelay}
    inOut={animationIn ? "in" : "out"}
  >
    {text}
  </S.Letter>
);

Letter.propTypes = {
  id: number,
  text: string,
  letterDelay: number,
  animationIn: bool,
  type: string
};
