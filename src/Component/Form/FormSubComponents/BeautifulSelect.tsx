import { ListItemText, MenuItem, Select, SelectChangeEvent, SelectProps } from "@mui/material";
import React, { useState } from "react";
import { minWidth } from "../ContactForm";

const skills = ["React", "Angular", "Python", "NodeJS", "Machine Learning"];

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
      multiple
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
