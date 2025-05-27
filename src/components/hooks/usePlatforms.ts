import { useQuery } from "@tanstack/react-query";
import type { Platform } from "../../models/fetch-platform-types";
import apiClient from "../../services/api-client";
import type DataResponse from "../../models/data-response";

export default function usePlatforms() {
  return useQuery<Platform[], Error>({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<DataResponse<Platform>>("/platforms/lists/parents")
        .then((res) => res.data.results),
    staleTime: 3600000 * 24,
  });
}
