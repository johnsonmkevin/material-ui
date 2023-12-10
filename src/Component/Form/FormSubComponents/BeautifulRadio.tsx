import { FormControlLabel, FormGroup, FormLabel, Radio, RadioGroup } from "@mui/material";
import React from "react";
import { defaultPreference, minWidth } from "../ContactForm";

function BeautifulRadio(props: {
  preference: string | undefined;
  handleRadioChange: (event: React.ChangeEvent<HTMLInputElement>, value: string) => void;
}) {
  console.log(props);
  return (
    <FormGroup
      sx={{
        minWidth: minWidth,
        marginRight: 2,
        marginBottom: { xs: 2, md: 0 },
      }}
    >
      <FormLabel component="legend" htmlFor="preference-type-radio">
        Work Preference
      </FormLabel>
      <RadioGroup
        aria-label="preference"
        id="preference-type-radio"
        name="preference"
        value={props.preference}
        onChange={props.handleRadioChange}
      >
        <FormControlLabel control={<Radio />} label={defaultPreference} value={defaultPreference} />
        <FormControlLabel control={<Radio />} label="Hybrid" value="Hybrid" />
        <FormControlLabel control={<Radio />} label="In Office" value="In Office" />
      </RadioGroup>
    </FormGroup>
  );
}

export default BeautifulRadio;
