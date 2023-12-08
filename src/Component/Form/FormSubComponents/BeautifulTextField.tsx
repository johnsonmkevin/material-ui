import { TextField, TextFieldProps } from "@mui/material";
import React from "react";
import { minWidth } from "../ContactForm";

function BeautifulTextField(props: TextFieldProps) {
  return (
    <TextField
      {...props}
      id="name"
      name="name"
      label="Name"
      variant="outlined"
      sx={{ minWidth: minWidth, marginRight: 2 }}
    />
  );
}

export default BeautifulTextField;
