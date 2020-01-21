import React, { useState, useEffect } from "react";
import axios from "axios";

export const useHttp = (url, dependencies) => {
  const [fetchedData, setFetchedData] = useState([]);
  useEffect(() => {
    axios.get(url).then(response => setFetchedData(response.data));
  }, [dependencies, url]);
  return [fetchedData, setFetchedData];
};
