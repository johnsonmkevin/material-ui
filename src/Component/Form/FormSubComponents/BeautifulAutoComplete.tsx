import { Autocomplete, AutocompleteProps, TextField } from "@mui/material";
import React from "react";
import { minWidth } from "../ContactForm";

const roles = ["React", "Angular", "Python", "NodeJS", "Machine Learning"];

function BeautifulAutoComplete(props: {
  value: string;
  onInputChange: (event: React.SyntheticEvent<Element, Event>, value: string) => void;
}) {
  return (
    <Autocomplete
      {...props}
      options={roles}
      sx={{ minWidth: minWidth }}
      renderInput={(params) => {
        return <TextField name="role" {...params} />;
      }}
      getOptionLabel={(roleOption) => `${roleOption}`}
      renderOption={(props, option) => {
        return <li {...props}>{`${option}`}</li>;
      }}
      isOptionEqualToValue={(option, value) => option === value || value === ""}
    />
  );
}

export default BeautifulAutoComplete;
