import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0
    },
    li: {
      listStyle: "none"
    }
  },
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
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6)
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === "dark"
        ? theme.palette.grey[700]
        : theme.palette.grey[200]
  },
  cardPricing: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    marginBottom: theme.spacing(2)
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6)
    }
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
          MixerDuo Co
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
            Browse Cocktails
          </Link>
        </nav>
        <Link
          href="/shoppingcart"
          color="primary"
          variant="outlined"
          className={classes.link}
        >
          ShoppingCart
        </Link>
      </Toolbar>
    </AppBar>
  );
}
