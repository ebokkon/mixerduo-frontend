import React, { useState, useEffect } from "react";
import axios from "axios";

export function useHttp(url, dependencies) {
  const [fetchedData, setFetchedData] = useState(null);
  const [error, setError] = useState(true);

  useEffect(() => {
    console.log(url);
    try {
      async function fetchData() {
        const response = await axios(url);
        setFetchedData(response);
      }
      fetchData();
    } catch (e) {
      console.log("error");
      return error;
    }
    //axios.get(url).then(response => setFetchedData(response.data));
  }, dependencies);

  console.log(fetchedData);
  return [fetchedData];
}
