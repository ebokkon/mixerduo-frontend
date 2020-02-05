import { useState, useEffect } from "react";
import axios from "axios";

export function useHttp(url, dependencies) {
  const [fetchedData, setFetchedData] = useState(null);
  const [error, setError] = useState(true);

  useEffect(() => {
    try {
      async function fetchData() {
        const response = await axios(url);
        setFetchedData(response);
      }
      fetchData();
    } catch (e) {
      return error;
    }
  }, dependencies);

  return [fetchedData];
}
