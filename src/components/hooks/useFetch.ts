import { useEffect, useState } from "react";
import apiClient from "../../services/api-client";
import type { AxiosError } from "axios";
import type DataResponse from "../../models/data-response";

export default function useFetch<T>(endpoint: string): { data: T[], error: string, isLoading: boolean } {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    apiClient.get<DataResponse<T>>(endpoint)
      .then((res) => setData(res.data.results))
      .catch((err: AxiosError) => setError(err.message))
      .finally(() => setIsLoading(false));
    setIsLoading(true)

  }, []);

  return { data, error, isLoading }
}
