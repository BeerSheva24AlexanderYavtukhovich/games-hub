import useFetch from "./useFetch";
import type { Game } from "../../models/fetch-game-types";

export default function useGames():{data: Game[], error: string, isLoading: boolean} {
    return useFetch<Game>("/games")
}