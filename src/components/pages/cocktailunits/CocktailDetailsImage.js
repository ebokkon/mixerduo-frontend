import React from "react";
import { makeStyles } from "@material-ui/core/styles";

export default function CocktailDetailsImage(props) {
  const useStyles = makeStyles({
    image: {
      padding:"1%",
      width: "100%"
    }
  });
  const classes = useStyles();

  return <img className={classes.image} alt="" src={props.image}></img>;
}
