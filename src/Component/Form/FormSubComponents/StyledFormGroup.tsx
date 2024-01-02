import { styled } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";

type StyledFormGroupProps = {
  paddingtop?: number;
};

export const StyledFormGroup = styled(FormGroup, {
  name: "StyledFormGroup",
  slot: "Wrapper",
  skipSx: true,
})<StyledFormGroupProps>((props) => ({
  justifyContent: "space-between",
  paddingTop: props.paddingtop,
  padding: props.theme.spacing(2),
}));
