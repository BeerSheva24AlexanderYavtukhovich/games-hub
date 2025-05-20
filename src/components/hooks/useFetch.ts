// hooks/useFetch.ts
import { useEffect, useState } from 'react';
import { AxiosError } from 'axios';
import apiClient from '../../services/api-client';

function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    apiClient.get<T>(url)
      .then((res) => setData(res.data))
      .catch((err: AxiosError) => setError(err.message));
  }, [url]);

  return { data, error };
}

export default useFetch;