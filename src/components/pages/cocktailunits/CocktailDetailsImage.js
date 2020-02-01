import React from "react";
import { makeStyles } from "@material-ui/core/styles";

export default function CocktailDetailsImage(props) {
  const useStyles = makeStyles({
    image: {
      width: 535,
      height: 535,
      textAlign: "center",
      margin: "35px"
    }
  });
  const classes = useStyles();

  return <img className={classes.image} alt="" src={props.image}></img>;
}
