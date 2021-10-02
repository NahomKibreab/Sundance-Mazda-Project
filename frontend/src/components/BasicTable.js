import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";

function createData(name, calories) {
  return { name, calories };
}

export default function BasicTable(props) {
  const rows = [
    createData(
      "Vehicle Price",
      `$${new Intl.NumberFormat().format(props.price / 100)}`
    ),
    createData("Tax, Title, Registration", 0),
    createData("Shipping", 0),
    createData("Bogus Fees", 0),
  ];

  return (
    <TableContainer>
      <Table aria-label="simple table" size="small">
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row" sx={{ border: 0 }}>
                {row.name}
              </TableCell>
              <TableCell align="right" sx={{ border: 0 }}>
                {row.calories}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
