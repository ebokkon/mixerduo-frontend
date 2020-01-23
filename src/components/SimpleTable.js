import React from "react";
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

export default function SimpleTable(props) {
  const useStyles = makeStyles({
    table: {
      width: 500
    }
  });
  const classes = useStyles();

  const quantityCalculation = courseTitle => {
    switch (courseTitle) {
      case "Advanced":
        return 50;
      case "Beginners":
        return 30;
      case "Pro":
        return 80;
      default:
        return 1;
    }
  };

  return (
    <div>
      <h1>Ordered Items:</h1>

      <TableContainer
        component={Paper}
        style={{ width: 500, margin: "0 auto" }}
      >
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Course Type</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Total Price</TableCell>
            </TableRow>
          </TableHead>

          {props.cart.map(item => {
            return (
              <TableRow>
                <TableCell component="th" scope="row">
                  {Object.keys(item)[0]}
                </TableCell>
                <TableCell align="center">
                  {item[Object.keys(item)[0]] /
                    quantityCalculation(Object.keys(item)[0])}
                </TableCell>
                <TableCell align="center">
                  {item[Object.keys(item)[0]]}
                </TableCell>
              </TableRow>
            );
          })}
        </Table>
      </TableContainer>
    </div>
  );
}
