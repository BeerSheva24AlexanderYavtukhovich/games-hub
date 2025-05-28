import type { Game } from "../../models/fetch-game-types";
import apiClient from "../../services/api-client";
import { useGamesQueryStore } from "../state-manager/store";

export default function useGames() {
  const gameQuery = useGamesQueryStore((s) => s.gameQuery);
  return apiClient.createQueryHook<Game>("games", "/games", {
    params: {
      genres: gameQuery.genreName,
      parent_platforms: gameQuery.platform?.id,
      search: gameQuery.search,
      ordering: gameQuery.ordering,
    },
  });
}
