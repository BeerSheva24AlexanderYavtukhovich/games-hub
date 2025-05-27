import { useQuery } from "@tanstack/react-query";
import type { Genre } from "../../models/fetch-genre-types";
import apiClient from "../../services/api-client";
import type DataResponse from "../../models/data-response";

export default function useGenres() {
  return useQuery<Genre[], Error>({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient
        .get<DataResponse<Genre>>("/genres")
        .then((res) => res.data.results),
    staleTime: 3600000 * 24,
  });
}
