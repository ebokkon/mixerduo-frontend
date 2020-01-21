import React, { useContext } from "react";
import { Link } from "react-router-dom";
// import { ClickedCocktail } from "../../src/context/ClickedCocktail";

export default function(props) {
  // const [value, setValue] = useContext(ClickedCocktail);

  const handleClick = e => {
    //   setValue(e.target.getAttribute("value"));
    //   console.log(e.target.getAttribute("value"));
    props.history.push(`cocktails/${props.item.idDrink}`);
  };

  return (
    <div>
      <Link
        // value={props.item.idDrink}
        onClick={handleClick}
        to={`/cocktails/${props.item.idDrink}`}
        id={props.item.idDrink}
      >
        {props.item.strDrink}
      </Link>
    </div>
  );
}
