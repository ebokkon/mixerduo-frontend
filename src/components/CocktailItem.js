import React from "react";
import { Link } from "react-router-dom";

export default function(props) {
  return (
    <div>
      <Link
        onClick={() => props.handleClick(props.item.idDrink)}
        to={`/cocktails/${props.item.idDrink}`}
        id={props.item.idDrink}
      >
        {props.item.strDrink}
      </Link>
    </div>
  );
}
