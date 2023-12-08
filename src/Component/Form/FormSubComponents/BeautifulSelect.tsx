import { ListItemText, MenuItem, Select, SelectChangeEvent, SelectProps } from "@mui/material";
import React from "react";
import { minWidth } from "../ContactForm";

const skills = ["Software Dev", "Architect", "Designer", "Business Analyst"];

function BeautifulSelect(props: {
  value: string[] | "";
  onChange: (event: SelectChangeEvent<string[]>) => void;
}) {
  return (
    <Select
      {...props}
      id="skill-select"
      renderValue={(select: string[]) => select.join(", ")}
      sx={{ minWidth: minWidth, marginRight: 2 }}
    >
      {skills.map((skillName) => {
        return (
          <MenuItem value={skillName} key={skillName}>
            <ListItemText primary={skillName} />
          </MenuItem>
        );
      })}
    </Select>
  );
}

export default BeautifulSelect;
