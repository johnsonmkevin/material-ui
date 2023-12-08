import {
  Alert,
  AlertTitle,
  Button,
  Dialog,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
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
import BeautifulSelect from "./FormSubComponents/BeautifulSelect";
import BeautifulTextField from "./FormSubComponents/BeautifulTextField";

export const minWidth = 300;
export const defaultPreference = "Work From Home";

function ContactForm() {
  const getDefaultFormValues = () => {
    return {
      id: contactData.length + 1,
      name: "",
      role: "",
      skills: ["Designer"],
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
      <Paper>
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
              <BeautifulSelect
                value={formValues.skills || ""}
                onChange={handleSelectChange}
              ></BeautifulSelect>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DesktopDatePicker
                  value={dayjs(formValues.startDate)}
                  onChange={handleDatePickerChange}
                />
              </LocalizationProvider>
            </FormGroup>
            <FormGroup row sx={{ padding: 2, justifyContent: "space-between" }}>
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
                  value={formValues.preference}
                  onChange={handleRadioChange}
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
