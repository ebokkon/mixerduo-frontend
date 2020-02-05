import React from "react";
import { makeStyles } from "@material-ui/core/styles";

export default function(props) {
  const useStyles = makeStyles({
    title: {
      fontSize: "medium"
    }
  });
  const classes = useStyles();

  return <div className={classes.title}>{props.item.strDrink}</div>;
}
