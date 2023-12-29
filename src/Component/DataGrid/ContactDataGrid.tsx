import { Theme, useTheme } from "@mui/material";
import { DataGrid, GridRenderCellParams } from "@mui/x-data-grid";

import React, { useCallback } from "react";
import { contactData } from "../../Data/ContactData";

const columns = (theme: Theme) => [
  {
    field: "name",
    headerName: "Name",
    minWidth: 150,
    renderCell: (params: GridRenderCellParams) => {
      return params.value as string;
    },
  },
  {
    field: "role",
    headerName: "Role",
    minWidth: 100,
    renderCell: (params: GridRenderCellParams) => {
      return params.value as string;
    },
  },
  {
    field: "skills",
    headerName: "Skills",
    minWidth: 150,

    renderCell: (params: GridRenderCellParams) => {
      console.log(params);
      return (
        <div style={{ color: theme.palette.primary.main }}>
          {params.value ? params.value[0] : ""}
        </div>
      );
    },
  },
  {
    field: "startDate",
    headerName: "Start Date",
    minWidth: 120,
    renderCell: (params: GridRenderCellParams) => {
      return params.value as string;
    },
  },
  {
    field: "preference",
    headerName: "workPreference",
    minWidth: 150,
    renderCell: (params: GridRenderCellParams) => {
      return params.value as string;
    },
  },
];

function ContactDataGrid() {
  const theme = useTheme();
  const rows = () => [...contactData];
  return <DataGrid rows={rows()} columns={columns(theme)} rowHeight={120} />;
}

export default ContactDataGrid;
