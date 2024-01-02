import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles/createPalette" {
  interface Palette {
    grid: { main: string; dark: string };
  }
  interface PaletteOptions {
    grid?: { main: string; dark: string };
  }
}

const BeautifulTheme = createTheme({
  palette: {
    primary: {
      main: "#18843c",
      light: "#3aab58",
      dark: "darkgreen",
    },
    grid: {
      main: "rgba(0,0,0,0.1)",
      dark: "rgba(0,0,0,0.2)",
    },
  },
});

export { BeautifulTheme };
