import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import React from "react";
import { contactData } from "../../Data/ContactData";

function ContactTable() {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Role</TableCell>
            <TableCell>Skills</TableCell>
            <TableCell>StartDate</TableCell>
            <TableCell>Preference</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {contactData.map((contact) => {
            return (
              <TableRow key={contact.name}>
                {Object.entries(contact).map(([key, value]) => {
                  if (key !== "id") {
                    return <TableCell>{value}</TableCell>;
                  }
                  return "";
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ContactTable;
