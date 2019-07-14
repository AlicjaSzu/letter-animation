import React, { useCallback, useState } from "react";
import { string } from "prop-types";

import AnimatedTitle from "../Title";
import * as S from "./style";
import { reset } from "./utils";

export const TitleInput = ({
  animationType,
  name,
  onChangeHandler,
  title = null
}) => {
  const [focusClass, setFocusClass] = useState("");

  const addFocusClass = useCallback(() => setFocusClass("focus"), []);
  const removeFocusClass = useCallback(() => setFocusClass(""), []);

  const updateTitle = e => {
    onChangeHandler && onChangeHandler(e.target.value);
    reset(e);
  };

  const renderInput = () => (
    <S.Input
      type="text"
      name={name}
      value={title || ""}
      onChange={updateTitle}
      onFocus={addFocusClass}
      onBlur={removeFocusClass}
      onMouseUp={reset}
      onKeyDown={reset}
      onKeyUp={reset}
    />
  );

  return (
    <S.TitleInput>
      <AnimatedTitle
        focus={focusClass}
        animationType={animationType}
        dynamicType={true}
        inputStyle
      >
        {title}
      </AnimatedTitle>
      {renderInput()}
    </S.TitleInput>
  );
};

TitleInput.propTypes = {
  animationType: string,
  name: string,
  title: string
};
