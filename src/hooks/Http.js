import React, { useState, useEffect } from "react";
import axios from "axios";

export function useHttp(url) {
  const [fetchedData, setFetchedData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await axios(url);
      setFetchedData(response);
    }
    fetchData();
    //axios.get(url).then(response => setFetchedData(response.data));
  }, []);

  console.log(fetchedData);
  return [fetchedData];
}
