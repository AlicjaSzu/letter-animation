import styled from "styled-components";

export const TitleInput = styled.div`
  display: flex;
  position: relative;
  padding: 0;
  min-width: 200px;
  min-height: 65px;
`;
TitleInput.displayName = "S.TitleInput";

export const Input = styled.input`
  font-family: "Encode Sans Condensed", sans-serif;
  font-size: 1.7em;
  position: absolute;
  top: 0;
  letter-spacing: 0.6px;
  opacity: 0;
  padding: 10px 15px;
  width: 100%;
  height: 100%;
`;
Input.displayName = "S.Input";
