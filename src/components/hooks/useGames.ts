import useFetch from "./useFetch";
import type { Game } from "../../models/fetch-game-types";
import type GameQuery from "../../models/game-query";

export default function useGame(gameQuery: GameQuery): { data: Game[], error: string, isLoading: boolean } {
    return useFetch<Game>("/games", { params: { genres: gameQuery.genreName, parent_platforms: gameQuery.platform?.id, search: gameQuery.search } }, [gameQuery]);
}