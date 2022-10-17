/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { InputHTMLAttributes } from "react";
import { UseFormRegister } from "react-hook-form";
import { RiErrorWarningFill } from "react-icons/ri";

import { InputAdornment, TextField } from "@mui/material";

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  error: boolean;
  label: string;
  errorMessage?: string;
  registerName: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
}

export const InputGlobal = ({
  error,
  label,
  register,
  errorMessage,
  registerName,
  type,
  maxLength,
}: IInput) => {
  return (
    <TextField
      error={error}
      label={label}
      type={type}
      maxLength={maxLength}
      variant="outlined"
      id={registerName}
      InputLabelProps={{ style: { fontSize: 17 } }}
      helperText={error ? errorMessage : " "}
      {...register(registerName)}
      InputProps={{
        endAdornment: error && (
          <InputAdornment position="start">
            <RiErrorWarningFill fill="#d32f2f" />
          </InputAdornment>
        ),
      }}
    />
  );
};
