import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { useHttp } from "../hooks/Http";

export default function DropdownItem() {
  const [cocktails, setCocktails] = useHttp(
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic",
    []
  );

  return (
    <Autocomplete
      id="cocktail-select"
      options={cocktails}
      getOptionLabel={option => option.strDrink}
      style={{ width: 300 }}
      renderInput={params => (
        <TextField
          {...params}
          label="Search cocktails"
          variant="outlined"
          fullWidth
        />
      )}
    />
  );
}
