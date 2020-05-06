import { useState, useEffect } from "react";
import axios from "axios";

export function useHttp(url, dependencies) {
  const [fetchedData, setFetchedData] = useState(null);

  useEffect(() => {
    axios.post(url).then(response => setFetchedData(response.data))
  }, dependencies);

  return [fetchedData];
}
