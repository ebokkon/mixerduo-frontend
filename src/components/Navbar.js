import React, {useContext} from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import {Link as RouterLink} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import cocktailLogo from "../images/cocktailLogo.png";
import {UserContext} from "../context/UserContext";

const useStyles = makeStyles(theme => ({
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`
    },
    toolbar: {
        flexWrap: "wrap"
    },
    toolbarTitle: {
        flexGrow: 1
    },
    link: {
        margin: theme.spacing(1, 1.5)
    }
}));

export default function Navbar() {

    const {user, setUser} = useContext(UserContext);
    const classes = useStyles();

    console.log("LocalStorageIsEmpty: " + localStorage);

    return (
        <AppBar
            position="static"
            color="default"
            elevation={0}
            className={classes.appBar}
        >
            <Toolbar className={classes.toolbar}>
                <Typography
                    variant="h6"
                    color="inherit"
                    noWrap
                    className={classes.toolbarTitle}
                >
                    <img src={cocktailLogo} alt="" style={{maxWidth: "30px"}}/>
                    MixerDuo Co{" "}
                </Typography>
                <nav>
                    <Link
                        to="/"
                        component={RouterLink}
                        variant="button"
                        color="textPrimary"
                        className={classes.link}
                    >
                        Home
                    </Link>
                    <Link
                        to="/courses"
                        component={RouterLink}
                        variant="button"
                        color="textPrimary"
                        className={classes.link}
                    >
                        Courses
                    </Link>
                    <Link
                        to="/cocktails"
                        component={RouterLink}
                        variant="button"
                        color="textPrimary"
                        className={classes.link}
                    >
                        Browse Cocktails
                    </Link>
                    <Link
                        to="/search"
                        component={RouterLink}
                        variant="button"
                        color="textPrimary"
                        className={classes.link}
                    >
                        Search
                    </Link>
                    {(user.length === 0) ?
                        <Link
                            to="/sign-in"
                            component={RouterLink}
                            variant="button"
                            color="textPrimary"
                            className={classes.link}
                        >
                            Sign in
                        </Link> :
                        <Link
                            to="/log-out"
                            component={RouterLink}
                            variant="button"
                            color="textPrimary"
                            className={classes.link}
                        >
                            Log out
                        </Link>}
                </nav>
                <Link component={RouterLink} to="/shoppingcart">
                    <ShoppingCartIcon style={{cursor: "pointer"}}>
                        ShoppingCart
                    </ShoppingCartIcon>
                </Link>
            </Toolbar>
        </AppBar>
    );
}
