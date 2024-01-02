import { Autocomplete, AutocompleteProps, TextField } from "@mui/material";
import React from "react";
import { minWidth } from "../ContactForm";

const roles = ["Software Dev", "Architect", "Designer", "Business Analyst"];

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
        return (
          <TextField
            name="role"
            sx={{ "& .MuiOutlinedInput-root.Mui-focused": { color: "primary.dark" } }}
            {...params}
          />
        );
      }}
      getOptionLabel={(roleOption) => `${roleOption}`}
      renderOption={(props, option) => {
        return <li {...props}>{`${option}`}</li>;
      }}
      isOptionEqualToValue={(option, value) => option === value || value === ""}
      ListboxProps={{
        sx: {
          height: 100,
          color: "primary.dark",
          "& li.MuiAutocomplete-option:nth-of-type(even)": { backgroundColor: "green" },
          "& li.MuiAutocomplete-option:hover": { backgroundColor: "gold" },
          "& .MuiAutocomplete-option[aria-selected='true'].Mui-focused": {
            backgroundColor: "gold",
          },
        },
      }}
      onChange={() => {
        debugger;
      }}
    />
  );
}

export default BeautifulAutoComplete;
