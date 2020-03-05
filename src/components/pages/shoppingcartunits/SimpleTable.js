import React, {useContext, useEffect, useState} from "react";
import axios from "axios";
import {ShoppingCartContext} from "../../../context/ShoppingCartContext";
import ResponsiveFontSizes from "../../ResponsiveFontSizes";
import {Paper} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import DeleteIcon from '@material-ui/icons/Delete';
import Button from "@material-ui/core/Button";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveIcon from '@material-ui/icons/Remove';
import Grid from "@material-ui/core/Grid";
import {Link as RouterLink} from "react-router-dom";
import {UserContext} from "../../../context/UserContext";

export default function SimpleTable(props) {
    const {cart, setCart} = useContext(ShoppingCartContext);
    const { user, setUser } = useContext(UserContext);

    const useStyles = makeStyles({
        tableHeader: {fontWeight: "bold", fontSize: 20},
        tableTitle: {
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
      let token = user.token;
      let header = {"Authorization": `Bearer ${token}`};
      axios.put(`http://localhost:8080/increase`, "title="+title+"&username="+user.username, {headers: header})
          .then(response => setCart(response.data));
  };

  const decreaseCart = (title) => {
      let token = user.token;
      let header = {"Authorization": `Bearer ${token}`};
      axios.put(`http://localhost:8080/decrease`, "title="+title+"&username="+user.username, {headers: header})
          .then(response => setCart(response.data))
  };

  const removeFromCart = (title) => {
      let token = user.token;
      let header = {"Authorization": `Bearer ${token}`};
      axios.post(`http://localhost:8080/remove`,  {headers: {"Authorization": `Bearer ${token}`}, data:"title="+title+"&username="+user.username})
          .then(response => setCart(response.data))
  };

    return (
        <Grid item>
            <div>{console.log(cart)}</div>
            <div className={classes.tableTitle}>
                <ResponsiveFontSizes variant={"h3"} text={"Ordered Items: "}/>
            </div>
            <TableContainer
                component={Paper}
            >
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell className={classes.tableHeader}>Course Type</TableCell>
                            <TableCell className={classes.tableHeader}>Quantity</TableCell>
                            <TableCell className={classes.tableHeader}>Total Price</TableCell>
                            <TableCell className={classes.tableHeader}>Edit</TableCell>
                            <TableCell className={classes.tableHeader}> </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Object.keys(cart).map(function (key) {
                            return (
                                <TableRow key={key}>
                                    <TableCell component="th" scope="row">
                                        {key}
                                    </TableCell>
                                    <TableCell align="center">
                                        {cart[key]}
                                    </TableCell>
                                    <TableCell align="center">
                                        {cart[key] *
                                        quantityCalculation(key)} $
                                    </TableCell>
                                    <TableCell>
                                        <Button onClick={() => decreaseCart(key)} startIcon={<RemoveIcon/>}> </Button>
                                        <Button onClick={() => increaseCart(key)}
                                                startIcon={<AddCircleOutlineIcon/>}> </Button>
                                    </TableCell>
                                    <TableCell>
                                        <Button onClick={() => removeFromCart(key)}
                                                variant="contained"
                                                className={classes.button}
                                                startIcon={<DeleteIcon/>}>Delete</Button>
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                        <TableRow className={`buttoncontainer`}>
                            <TableCell>
                                <Button className={`buttont`} variant="contained" color="primary"
                                        component={RouterLink} to="/courses">Back</Button>
                            </TableCell>
                            <TableCell> </TableCell>
                            <TableCell> </TableCell>
                            <TableCell> </TableCell>
                            <TableCell>
                                <Button className={`buttont`} variant="contained" color="primary"
                                        component={RouterLink} to="/shoppingcart/checkout">Buy</Button>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Grid>
    );
}
