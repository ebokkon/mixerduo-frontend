import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import cocktailLogo from "../images/cocktailLogo.png";

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
  const classes = useStyles();
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
          <img src={cocktailLogo} alt="" style={{ maxWidth: "30px" }} />
          MixerDuo Co{" "}
        </Typography>
        <nav>
          <Link
            href="/"
            variant="button"
            color="textPrimary"
            className={classes.link}
          >
            Home
          </Link>
          <Link
            href="/courses"
            variant="button"
            color="textPrimary"
            className={classes.link}
          >
            Courses
          </Link>
          <Link
            href="/cocktails"
            variant="button"
            color="textPrimary"
            className={classes.link}
          >
            Browse Cocktails
          </Link>
          <Link
            href="/search"
            variant="button"
            color="textPrimary"
            className={classes.link}
          >
            Search
          </Link>
        </nav>
        <ShoppingCartIcon
          style={{ cursor: "pointer" }}
          onClick={event => (window.location.href = "/shoppingcart")}
        >
          ShoppingCart
        </ShoppingCartIcon>
      </Toolbar>
    </AppBar>
  );
}
