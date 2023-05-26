import { AxiosRequestConfig, CanceledError } from "axios";
import { useState, useEffect } from "react";
import apiClient from "../services/ApiClient";

export interface FetchDataResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(
  url: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsloading] = useState(false);

  useEffect(
    () => {
      const controller = new AbortController();
      setIsloading(true);
      apiClient
        .get<FetchDataResponse<T>>(url, {
          signal: controller.signal,
          ...requestConfig,
        })
        .then((res) => {
          setData(res.data.results);
          setIsloading(false);
        })

        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
          setIsloading(false);
        });

      return () => controller.abort();
    },
    deps ? [...deps] : []
  );

  return { data, error, isLoading };
};

export default useData;
