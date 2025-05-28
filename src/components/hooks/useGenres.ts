import type { Genre } from "../../models/fetch-genre-types";
import apiClient from "../../services/api-client";

export default function useGenres() {
  return apiClient.createQueryHook<Genre>(
    "genres",
    "/genres",
    {},
    { staleTime: 3600000 * 24 }
  );
}
