import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";

function createData(name, values) {
  return { name, values };
}

export function SellerDetails(props) {
  const rows = [
    createData("Name", `Sundance Mazda`),
    createData("Address", `17990 102 Ave NW, Edmonton, AB`),
    createData("Phone", "1-844-472-8052"),
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
                {row.values}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export function BuyersDetails(props) {
  const rows = [
    createData("Name", `Happy Customer`),
    createData("Address", `123 Fake Ave NW, Edmonton, AB`),
    createData("Phone", "1-555-555-5555"),
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
                {row.values}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export function VehicleDetails(props) {
  const { car } = props;
  const rows = [
    createData("Year", car.year),
    createData("Make", car.make),
    createData("Model", car.model),
    createData("Trim", car.trim),
    createData("Mileage", `${car.mileage}km`),
    createData("Stock #", car.stock_number),
    createData("Exterior Color", car.ext_color),
    createData("Interior Color", car.int_color),
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
                {row.values}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export function PriceDetails(props) {
  const { car } = props;
  const rows = [
    createData(
      "Selling Price",
      `$${new Intl.NumberFormat().format(car.price / 100)}`
    ),
    createData(
      "Taxes",
      `$${new Intl.NumberFormat().format((car.price / 100) * 0.05)}`
    ),
    createData("Shipping", "$299"),
    createData(
      "Total",
      `$${new Intl.NumberFormat().format((car.price / 100) * 1.05 + 299)}`
    ),
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
                {row.values}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export function PaymentDetails(props) {
  const { term, amount, downPayment, monthly } = props;
  const rows = [
    createData(
      "Total",
      `$${new Intl.NumberFormat().format(amount + downPayment)}`
    ),
    createData(
      "Down Payment",
      `$${new Intl.NumberFormat().format(downPayment)}`
    ),
    createData("Amount Finance", `$${new Intl.NumberFormat().format(amount)}`),
    createData("Rate", `2.99%`),
    createData("Term", `${term} years`),
    createData("Monthly Payment", `${monthly}/month`),
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
                {row.values}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
