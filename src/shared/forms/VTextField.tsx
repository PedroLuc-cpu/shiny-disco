import { TextField, TextFieldProps } from "@mui/material";
import { useField } from "@unform/core";
import { useEffect, useState } from "react";

type TVTextFieldProps = TextFieldProps & {
  name: string;
  // label: string;
  // value: string;
  // onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const VTextField = ({ name, ...rest }: TVTextFieldProps) => {
  const { fieldName, registerField, defaultValue, error, clearError } =
    useField(name);

  const [value, setValue] = useState(defaultValue || "");

  useEffect(() => {
    registerField({
      name: fieldName,
      getValue: () => value,
      setValue: (_, newValue) => setValue(newValue),
    });
  }, [fieldName, registerField, value]);

  return (
    <TextField
      {...rest}
      error={!!error}
      helperText={error}
      defaultValue={defaultValue}
      value={value}
      onChange={(e) => {setValue(e.target.value); rest.onChange?.(e);}}
      onKeyDown ={(e) => {error && clearError(); rest.onKeyDown?.(e)}}
    />
  );
};
