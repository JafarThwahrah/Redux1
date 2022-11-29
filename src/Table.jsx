import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { connect } from "react-redux";
import { INCREMENT, DECREMENT } from "./store";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export function CustomizedTables(props) {
  console.log(props);
  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>ID</StyledTableCell>
              <StyledTableCell align="right">Account Type</StyledTableCell>
              <StyledTableCell align="right">Customer Name</StyledTableCell>
              <StyledTableCell align="right">Account Number</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.accounts?.map((row) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell component="th" scope="row">
                  {row.id}
                </StyledTableCell>
                <StyledTableCell align="right">{row.id}</StyledTableCell>

                <StyledTableCell align="right">
                  {row.customerName}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.accountNumber}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <p>{props.counter}</p>
      <button
        onClick={() => {
          props.dispatch(INCREMENT());
        }}>
        +
      </button>
      <button
        onClick={() => {
          props.dispatch(DECREMENT());
        }}>
        -
      </button>
    </div>
  );
}

const readStateFromStoreAndPassItToProps = (state) => {
  return { counter: state };
};

export default connect(readStateFromStoreAndPassItToProps)(CustomizedTables);
