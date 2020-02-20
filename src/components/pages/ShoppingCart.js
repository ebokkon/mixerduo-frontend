import React, {useContext, useEffect} from "react";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";
import SimpleTable from "./shoppingcartunits/SimpleTable";
import ShoppingCartMessage from "./shoppingcartunits/ShoppingCartMessage";
import Button from "@material-ui/core/Button";
import {Link as RouterLink} from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import axios from "axios";


const useStyles = makeStyles(theme => ({
    paper: {
        maxWidth: 550,
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
            padding: theme.spacing(3),
        },
    root:{
        background: 'red'
    }
    },
}));


export default function ShoppingCart() {
  const { cart, setCart } = useContext(ShoppingCartContext);

  useEffect(() => {
      axios.get("http://localhost:8080/get-cart").then(response => setCart(response.data))
  }, []);

  const classes = useStyles();

  return Object.entries(cart).length === 0 ? (
      <React.Fragment>
        <ShoppingCartMessage/>
        <Button variant="outlined" classes={{
            root: classes.root}} component={RouterLink} to="/courses">Checkout our Courses!</Button>
      </React.Fragment>
  ) : (
     <Grid container
           direction="column"
           justify="center"
           alignItems="center">
       <SimpleTable cart={cart} />
       <Grid item>
       <Paper  className={classes.paper}>
           <Button variant="outlined" color="primary" component={RouterLink} to="/courses">Continue Shopping</Button>
           <Button variant="outlined" color="primary" component={RouterLink} to="/shoppingcart/checkout">Checkout</Button>
       </Paper>
       </Grid>
     </Grid>
  );
}


