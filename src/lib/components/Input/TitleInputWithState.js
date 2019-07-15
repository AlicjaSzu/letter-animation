import React, { useCallback, useEffect, useState } from "react";
import { TitleInput } from "./TitleInput";

export const TitleInputWithState = ({ children = null, ...rest }) => {
  const [value, setValue] = useState(children);

  useEffect(() => {
    setValue(children);
  }, [children]);

  const onChange = useCallback(value => setValue(value), []);

  return <TitleInput title={value} onChangeHandler={onChange} {...rest} />;
};
