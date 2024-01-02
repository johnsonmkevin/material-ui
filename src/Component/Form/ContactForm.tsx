import {
  Alert,
  AlertTitle,
  Button,
  Checkbox,
  Dialog,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  ListItemText,
  MenuItem,
  Paper,
  Radio,
  RadioGroup,
  SelectChangeEvent,
  Stack,
} from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import React, { useState } from "react";
import { FormValues, contactData, today } from "../../Data/ContactData";
import BeautifulAutoComplete from "./FormSubComponents/BeautifulAutoComplete";
import BeautifulRadio from "./FormSubComponents/BeautifulRadio";
import BeautifulSelect from "./FormSubComponents/BeautifulSelect";
import BeautifulTextField from "./FormSubComponents/BeautifulTextField";

export const minWidth = 300;
export const defaultPreference = "Work From Home";
const skills = ["React", "Angular", "Python", "NodeJS", "Machine Learning"];
const paperInputStyle = {
  "& .MuiOutlinedInput-root": {
    "& > fieldset": { border: "1px solid", borderColor: "primary.main" },
    "&:hover": { "& > fieldset": { borderColor: "primary.light" } },
  },
  "& .MuiFormLabel-root": { color: "primary.dark" },
};

function ContactForm() {
  const getDefaultFormValues = () => {
    return {
      id: contactData.length + 1,
      name: "",
      role: "",
      skills: ["React"],
      startDate: `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`,
      preference: defaultPreference,
    };
  };

  const [formValues, setFormValues] = useState<FormValues>(getDefaultFormValues());
  const [alertOpen, setAlertOpen] = useState(false);

  const handleTextFieldChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleAutoCompleteOnChange = (
    event: React.SyntheticEvent<Element, Event>,
    value: string
  ) => {
    setFormValues({ ...formValues, role: value || "" });
  };

  const handleSelectChange = (event: SelectChangeEvent<string[]>) => {
    const {
      target: { value },
    } = event;
    setFormValues({ ...formValues, skills: typeof value == "string" ? value.split(",") : value });
  };

  const handleDatePickerChange = (date: dayjs.Dayjs | null) => {
    if (date) {
      console.log(date);
      const formattedDate = date.format("MM/DD/YYYY");
      setFormValues({ ...formValues, startDate: formattedDate });
    } else {
      setFormValues({ ...formValues, startDate: "" });
    }
  };

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>, value: string) => {
    const { name } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = () => {
    contactData.push(formValues);
    setAlertOpen(true);
    console.log(contactData);
    clearValues();
  };

  const handleClearClick = () => {
    clearValues();
  };

  const clearValues = () => {
    setFormValues(getDefaultFormValues());
  };

  const handleAlertClick = () => {
    setAlertOpen(false);
  };

  return (
    <>
      <Paper sx={paperInputStyle}>
        <form>
          <FormControl>
            <FormGroup row sx={{ padding: 2, justifyContent: "space-between" }}>
              <BeautifulTextField value={formValues.name} onChange={handleTextFieldChange} />
              <BeautifulAutoComplete
                value={formValues.role || ""}
                onInputChange={handleAutoCompleteOnChange}
              />
            </FormGroup>
            <FormGroup row sx={{ padding: 2, justifyContent: "space-between" }}>
              <BeautifulSelect value={formValues.skills || ""} onChange={handleSelectChange}>
                {skills.map((skillName) => {
                  return (
                    <MenuItem value={skillName} key={skillName}>
                      <Checkbox checked={formValues.skills?.includes(skillName)} />
                      <ListItemText primary={skillName} />
                    </MenuItem>
                  );
                })}
              </BeautifulSelect>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <div style={{ minWidth: "300px" }}>
                  <DesktopDatePicker
                    className="custom-desktop-date-picker"
                    value={dayjs(formValues.startDate)}
                    onChange={handleDatePickerChange}
                  />
                </div>
              </LocalizationProvider>
            </FormGroup>
            <FormGroup row sx={{ padding: 2, justifyContent: "space-between" }}>
              <BeautifulRadio
                preference={formValues.preference}
                handleRadioChange={handleRadioChange}
              />

              <Stack>
                <Button onClick={handleSubmit}>Submit</Button>
                <Button onClick={handleClearClick}>Clear</Button>
              </Stack>
            </FormGroup>
          </FormControl>
        </form>
      </Paper>
      <Dialog open={alertOpen} onClose={handleAlertClick}>
        <Alert onClose={handleAlertClick}>
          <AlertTitle>Success!</AlertTitle>
          Form Submitted
        </Alert>
      </Dialog>
    </>
  );
}

export default ContactForm;
