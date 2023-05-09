import { CanceledError } from "axios";
import { useState, useEffect } from "react";
import apiClient from "../services/ApiClient";

export interface FetchDataResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(url: string) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<FetchDataResponse<T>>(url, { signal: controller.signal })
      .then((res) => {
        setData(res.data.results);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort();
  }, []);

  return { data, error };
};

export default useData;
