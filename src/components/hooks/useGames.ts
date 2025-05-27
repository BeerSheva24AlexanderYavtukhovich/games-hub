import useFetch from "./useFetch";
import type { Game } from "../../models/fetch-game-types";
import { useGamesQueryStore } from "../state-manager/store";

export default function useGame(): {
  data: Game[];
  error: string;
  isLoading: boolean;
} {
   const gameQuery = useGamesQueryStore(s => s.gameQuery)
  return useFetch<Game>(
    "/games",
    {
     
      params: {
        genres: gameQuery.genreName,
        parent_platforms: gameQuery.platform?.id,
        search: gameQuery.search,
        ordering: gameQuery.ordering,
      },
    },
    [gameQuery]
  );
}
