import type { Game } from "../../models/fetch-game-types";
import { useGamesQueryStore } from "../state-manager/store";
import { useQuery } from "@tanstack/react-query";
import type DataResponse from "../../models/data-response";
import apiClient from "../../services/api-client";

export default function useGames() {
  const gameQuery = useGamesQueryStore((s) => s.gameQuery);

  return useQuery<Game[], Error>({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClient
        .get<DataResponse<Game>>("/games", {
          params: {
            genres: gameQuery.genreName,
            parent_platforms: gameQuery.platform?.id,
            search: gameQuery.search,
            ordering: gameQuery.ordering,
          },
        })
        .then((res) => res.data.results),
    staleTime: 3600000,
  });
}
