import { useEffect, useState } from "react";
import apiClient from "../../services/api-client";
import type { AxiosError, AxiosRequestConfig } from "axios";
import type DataResponse from "../../models/data-response";

export default function useFetch<T>(
  endpoint: string,
  config?: AxiosRequestConfig,
  deps: any[] = []
): { data: T[], error: string, isLoading: boolean } {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    apiClient.get<DataResponse<T>>(endpoint, config)
      .then((res) => setData(res.data.results))
      .catch((err: AxiosError) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, deps);

  return { data, error, isLoading }
}
