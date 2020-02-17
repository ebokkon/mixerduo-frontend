import React, {useContext} from "react";
import {ShoppingCartContext} from "../../../context/ShoppingCartContext";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";


const useStyles = makeStyles(theme => ({
    listItem: {
        padding: theme.spacing(1, 0),
    },
    total: {
        fontWeight: '700',
    },
    title: {
        marginTop: theme.spacing(2),
    },
}));

export default function OrderList () {

    const { cart, setCart } = useContext(ShoppingCartContext);

    const classes = useStyles();

    return (
        <div>
            <Typography variant="h6" gutterBottom>
                Order summary
            </Typography>
            <div>{cart}</div>
            <List disablePadding>
                {cart.map(course => (
                <ListItem className={classes.listItem}>
                    <ListItemText primary={course} secondary="that"/>
                    <Typography variant="body2">{}</Typography>
                </ListItem>
                ))}
                <ListItem className={classes.listItem}>
                    <ListItemText primary="Total"/>
                    <Typography variant="subtitle1" className={classes.total}>
                        $34.06
                    </Typography>
                </ListItem>
            </List>
        </div>
    );
}