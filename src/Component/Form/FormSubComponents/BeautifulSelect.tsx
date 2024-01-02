import {
  Checkbox,
  ListItemText,
  MenuItem,
  Select,
  SelectChangeEvent,
  SelectProps,
} from "@mui/material";
import React, { ReactNode, useEffect, useRef, useState } from "react";
import { minWidth } from "../ContactForm";

function BeautifulSelect(props: {
  value: string[] | "";
  onChange: (event: SelectChangeEvent<string[]>) => void;
  children: ReactNode[];
}) {
  const selectInputComponent = useRef<HTMLInputElement>(null);
  const [position, setPosition] = useState(0);

  useEffect(() => {
    setPosition(
      selectInputComponent.current
        ? selectInputComponent.current.getBoundingClientRect().left + 20
        : 0
    );
  }, [selectInputComponent]);
  return (
    <Select
      ref={selectInputComponent}
      {...props}
      id="skill-select"
      renderValue={(select: string[]) => select.join(", ")}
      sx={{ minWidth: minWidth, marginRight: 2 }}
      multiple
      MenuProps={{ PaperProps: { sx: { left: `${position}px !important`, maxHeight: 180 } } }}
    >
      {props.children}
    </Select>
  );
}

export default BeautifulSelect;
