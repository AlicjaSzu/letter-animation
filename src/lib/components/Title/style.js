import styled, { keyframes } from "styled-components";

export const Blink = keyframes`
	0% {
		opacity: 0;
	}
	50% {
		opacity: 1;
	}
	100% {
		opacity: 0
	}
`;

export const Title = styled.h2`
  font-size: 1.7em;
  display: flex;
  flex-wrap: nowrap;
  align-self: stretch;
  position: relative;
  text-shadow: 0 1px 1px rgba(96, 32, 214, 0.5);
  letter-spacing: 0.6px;
  width: 100%;
  margin-bottom: 0;
`;
Title.displayName = "S.Title";

export const Word = styled.div`
  position: relative;
  min-width: 110px;
  ${({ hide }) =>
    hide &&
    `position: absolute;
		left: 0;`}
  & > div {
    display: inline-block;
  }
  .icon {
    position: relative;
    top: 2px;
    margin-left: 19px;
  }
`;
Word.displayName = "S.Word";

export const Cursor = styled.span`
  position: relative;
  left: 7px;
  font-size: 1em;
  width: 0;
  display: inline-block;
  animation: ${Blink} 1s ease infinite;
`;
Cursor.displayName = "S.Cursor";
