import { AppBar, Drawer, List, ListItem, Toolbar, Typography } from "@mui/material";
import { Theme, ThemeProvider, useTheme } from "@mui/material/styles";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { BeautifulTheme } from "../../Theme/BeautifulTheme";
import ContactDataGrid from "../DataGrid/ContactDataGrid";
import ContactForm from "../Form/ContactForm";
import ContactCardGrid from "../Grid/ContactCardGrid";
import ContactTable from "../Table/ContactTable";

const drawWidth = 240;

const themedStyles = (theme: Theme) => {
  return {
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
  };
};

const simpleStyles = {
  drawer: {
    width: drawWidth,
    "& .MuiBackdrop-root": {
      display: "none",
    },
  },
  drawPaper: {
    width: drawWidth,
    backGroundColor: "rgba(120, 120,120, 0.2)",
  },
  content: {
    marginLeft: drawWidth,
    padding: 3,
    maxWidth: 720,
  },
};

function NavDrawer() {
  const theme = useTheme();
  return (
    <BrowserRouter>
      <div>
        <AppBar position="fixed" sx={themedStyles(theme).appBar}>
          <Toolbar>
            <Typography variant="h6" noWrap>
              Advanced Material UI Styling
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          disableEnforceFocus
          variant="temporary"
          open={true}
          sx={simpleStyles.drawer}
          PaperProps={{ sx: simpleStyles.drawPaper, elevation: 9 }}
        >
          <Toolbar />
          <List>
            {[
              { text: "Input Form", route: "/form" },
              { text: "Contact Card Grid", route: "/grid" },
              { text: "Contact Table", route: "/table" },
              { text: "Contact Data Grid", route: "/datagrid" },
            ].map((nav, index) => (
              <ListItem key={nav.text}>
                <Link to={nav.route}>{nav.text}</Link>
              </ListItem>
            ))}
          </List>
        </Drawer>
        <main style={simpleStyles.content}>
          <Toolbar />
          <ThemeProvider theme={BeautifulTheme}>
            <Routes>
              <Route path={"/"} element={<ContactForm />} />
              <Route path={"/form"} element={<ContactForm />} />
              <Route path={"/grid"} element={<ContactCardGrid />} />
              <Route path={"/table"} element={<ContactTable />} />
              <Route path={"/datagrid"} element={<ContactDataGrid />} />
            </Routes>
          </ThemeProvider>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default NavDrawer;
