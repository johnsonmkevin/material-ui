import { DesktopDatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { minWidth } from "../ContactForm";

function BeautifulDesktopDatePicker(props: {
  value: string | undefined;
  onChange: (value: string | null | undefined) => void;
}) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DesktopDatePicker
        {...props}
        label="Date"
        format="MM/DD/YYYY"
        slotProps={{
          textField: { sx: { minWidth: minWidth } },
        }}
      />
    </LocalizationProvider>
  );
}

export default BeautifulDesktopDatePicker;
