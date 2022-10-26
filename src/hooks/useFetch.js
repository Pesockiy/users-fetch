import { useState, useEffect } from "react";
import axios from "axios";

export const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(null);
    const source = axios.CancelToken.source();
    axios
      .get(url, { cancelToken: source.token })
      .then((res) => {
        setData(res.data);
      })
    return () => {
      source.cancel();
    }
  }, [url]);

  return { data };
};
