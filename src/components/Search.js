import React, { useState } from "react";
import { useHttp } from "../hooks/Http";
import CircularProgress from "./CircularProgress";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CocktailImage from "./CocktailImage";
import CocktailItem from "./CocktailItem";

export default function Search() {
  const [cocktails, setCocktails] = useHttp(
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic",
    []
  );

  const handleOnchange = (e, v) => {
    console.log(v);
  };

  return cocktails === null ? (
    <div>
      <CircularProgress />
    </div>
  ) : (
    <div style={{ margin: "15px", padding: "auto" }}>
      <Autocomplete
        id="cocktail-select"
        options={cocktails.data.drinks}
        getOptionLabel={option => option.strDrink}
        style={{ width: 300 }}
        onChange={(event, value) => handleOnchange(event, value)}
        renderInput={params => (
          <TextField
            {...params}
            label="Search cocktails"
            variant="outlined"
            fullWidth
          />
        )}
      />
    </div>
  );
}
