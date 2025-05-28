import axios from "axios";
import type { AxiosInstance, AxiosRequestConfig } from "axios";
import type DataResponse from "../models/data-response";
import { useQuery, type UseQueryOptions } from "@tanstack/react-query";

const DEFAULT_STALE_TIME = 36000000;
const HOST = "https://api.rawg.io/api";
const KEY = "80db301dad3342b989b07037ffd3e0af";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: HOST,
  params: {
    key: KEY,
  },
});

async function getResults<T>(
  url: string,
  config?: AxiosRequestConfig
): Promise<T[]> {
  try {
    const response = await axiosInstance.get<DataResponse<T>>(url, config);
    return response.data.results;
  } catch (error) {
    throw new Error(`Failed to fetch data from ${url}: ${error}`);
  }
}

function createQueryHook<T>(
  key: string,
  url: string,
  config?: AxiosRequestConfig,
  options?: Omit<UseQueryOptions<T[], Error>, "queryKey" | "queryFn">
) {
  return useQuery<T[], Error>({
    queryKey: [key, config?.params ?? {}],
    queryFn: () => getResults<T>(url, config),
    staleTime: options?.staleTime ?? DEFAULT_STALE_TIME,
    ...options,
  });
}

const apiClient = {
  createQueryHook,
};

export default apiClient;
