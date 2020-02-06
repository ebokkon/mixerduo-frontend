import React, {useState} from "react";
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import ResponsiveFontSizes from "../../ResponsiveFontSizes";
import axios from "axios";

export default function SimpleTable(props) {
  const useStyles = makeStyles({
    table: {
      maxWidth: 550
    },
    tableHeader: { fontWeight: "bold", fontSize: 20 },
    tableTitle : {
          textAlign: "center",
          color: "white",
          margin: "50px 0"
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

  const increaseCart = (title) => {
      axios.put(`htttp://localhost:8080/add-to-cart/${title}`)
          .then(response => response)
  };

  return (
    <div>
        <div className={classes.tableTitle}>
            <ResponsiveFontSizes variant={"h3"} text={"Ordered Items: "}/>
        </div>
      <TableContainer
        component={Paper}
        style={{ maxWidth: 550, margin: "0 auto" }}
      >
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableHeader}>Course Type</TableCell>
              <TableCell className={classes.tableHeader}>Quantity</TableCell>
              <TableCell className={classes.tableHeader}>Total Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
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
                <TableCell>
                    <button onClick={() => increaseCart(Object.keys(item)[0])}>Add</button>
                </TableCell>
              </TableRow>
            );
          })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
