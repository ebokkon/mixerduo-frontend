import React, { useState } from "react";
import { useHttp } from "../hooks/Http";
import CircularProgress from "./CircularProgress";

export default function Search() {
  const [cocktails, setCocktails] = useHttp(
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic",
    []
  );
  const [optionsState, setOptionsState] = useState("");

  return cocktails === null ? (
    <div>
      <CircularProgress />
    </div>
  ) : (
    <div>
      <select value={optionsState}>
        {cocktails.data.drinks.map(cocktail => (
          <option>{cocktail.strDrink}</option>
        ))}
      </select>
      <div>{optionsState}</div>
    </div>
  );
}
