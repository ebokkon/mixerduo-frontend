import React, {useContext, useEffect, useState} from "react";
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
import {ShoppingCartContext} from "../../../context/ShoppingCartContext";

export default function SimpleTable(props) {
    const { cart, setCart } = useContext(ShoppingCartContext);


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
    switch (courseTitle.key) {
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
      axios.get(`http://localhost:8080/increase-in-cart/${title}`)
          .then(response => setCart(response.data));
  };

  const decreaseCart = (title) => {
      axios.get(`http://localhost:8080/decrease-in-cart/${title}`)
          .then(response => setCart(response.data))
  };

  const removeFromCart = (title) => {
      axios.get(`http://localhost:8080/remove-from-cart/${title}`)
          .then(response => setCart(response.data))
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
          {Object.keys(cart).map(function(key) {
            return (
              <TableRow>
                <TableCell component="th" scope="row">
                  {key}
                </TableCell>
                <TableCell align="center">
                  {cart[key]}
                </TableCell>
                <TableCell align="center">
                  {cart[key] *
                  quantityCalculation({key})}
                </TableCell>
                <TableCell>
                    <button onClick={() => decreaseCart(key)}> - </button>
                    <button onClick={() => increaseCart(key)}> + </button>
                    <button onClick={() => removeFromCart(key)}>Remove</button>
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
