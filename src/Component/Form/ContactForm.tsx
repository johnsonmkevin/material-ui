import {
  Autocomplete,
  Button,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  ListItemText,
  MenuItem,
  Paper,
  Radio,
  RadioGroup,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import React, { useState } from "react";
import { FormValues, contactData, today } from "../../Data/ContactData";

const roles = ["React", "Angular", "Python", "NodeJS", "Machine Learning"];
const skills = ["Software Dev", "Architect", "Designer", "Business Analyst"];

function ContactForm() {
  const minWidth = 300;
  const defaultPreference = "Work From Home";

  const getDefaultFormValues = () => {
    return {
      id: contactData.length + 1,
      name: "",
      skills: [],
      startDate: `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`,
      preference: defaultPreference,
    };
  };

  const [formValues, setFormValues] = useState<FormValues>(getDefaultFormValues());

  return (
    <Paper>
      <form>
        <FormControl>
          <FormGroup row sx={{ padding: 2, justifyContent: "space-between" }}>
            <TextField
              id="name"
              name="name"
              label="Name"
              variant="outlined"
              sx={{ minWidth: minWidth, marginRight: 2 }}
              value={formValues.name}
            />
            <Autocomplete
              options={roles}
              sx={{ minWidth: minWidth }}
              renderInput={(params) => {
                return <TextField name="role" {...params} />;
              }}
              getOptionLabel={(roleOption) => `${roleOption}`}
              renderOption={(props, option) => {
                return <li {...props}>{`${option}`}</li>;
              }}
              value={formValues.role || ""}
              isOptionEqualToValue={(option, value) => option === value || value === ""}
            />
          </FormGroup>
          <FormGroup row sx={{ padding: 2, justifyContent: "space-between" }}>
            <Select
              id="skill-select"
              renderValue={(select: string[]) => select.join(", ")}
              sx={{ minWidth: minWidth, marginRight: 2 }}
              value={formValues.skills || ""}
            >
              {skills.map((skillName) => {
                return (
                  <MenuItem value={skillName} key={skillName}>
                    <ListItemText primary={skillName} />
                  </MenuItem>
                );
              })}
            </Select>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DesktopDatePicker
                label="Date"
                format="MM/DD/YYYY"
                slotProps={{
                  textField: { sx: { minWidth: minWidth } },
                }}
                value={dayjs(formValues.startDate)} /*  */
                onChange={() => {}}
              />
            </LocalizationProvider>
          </FormGroup>
          <FormGroup row sx={{ padding: 2, justifyContent: "space-between" }}>
            <FormGroup sx={{ minWidth, marginRight: 2 }}>
              <FormLabel component="legend">Work Preference</FormLabel>
              <RadioGroup
                id="preference-type-radio"
                name="preference"
                value={formValues.preference}
              >
                <FormControlLabel
                  control={<Radio />}
                  label={defaultPreference}
                  value={defaultPreference}
                />
                <FormControlLabel control={<Radio />} label="Hybrid" value="Hybrid" />
                <FormControlLabel control={<Radio />} label="In Office" value="In Office" />
              </RadioGroup>
            </FormGroup>
            <Stack>
              <Button>Submit</Button>
              <Button>Clear</Button>
            </Stack>
          </FormGroup>
        </FormControl>
      </form>
    </Paper>
  );
}

export default ContactForm;
