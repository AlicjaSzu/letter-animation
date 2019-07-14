import React, { useCallback, useEffect, useState } from "react";
import { TitleInput } from "./TitleInput";

export const TitleInputWithState = ({ title = null, ...rest }) => {
  const [value, setValue] = useState(title);

  useEffect(() => {
    setValue(title);
  }, [title]);

  const onChange = useCallback(value => setValue(value), []);

  return <TitleInput title={value} {...rest} onChangeHandler={onChange} />;
};
