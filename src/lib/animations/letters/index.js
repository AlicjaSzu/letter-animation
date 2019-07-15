import { css } from "styled-components";
import animationTypes from "./types";

const letterAnimation = ({ type, index, letterDelay = 0, inOut = "in" }) => {
  const anim = animationTypes[type]
    ? animationTypes[type](index, letterDelay)[inOut]
    : null;

  return (
    anim &&
    css`
      animation-timing-function: ${anim.easing};
      animation-delay: ${anim.delay}ms;
      animation-name: ${anim.func(index)};
      animation-duration: ${anim.time}ms;
      animation-fill-mode: both;
    `
  );
};

export default letterAnimation;
