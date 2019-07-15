import styled from "styled-components";

import letterAnimation from "../../animations/letters";

export const Letter = styled.span`
  display: inline-block;
  min-width: 7px;
  ${({ type, index, letterDelay, inOut }) =>
    letterAnimation({ type, index, letterDelay, inOut })}
`;
Letter.displayName = "S.Letter";
