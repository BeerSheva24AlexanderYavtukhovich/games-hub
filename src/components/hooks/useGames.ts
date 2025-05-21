import useFetch from "./useFetch";
import type { Game } from "../../models/fetch-game-types";

export default function useGames(genreName: string | null): { data: Game[], error: string, isLoading: boolean } {
    return useFetch<Game>("/games", { params: { genres: genreName } },[genreName])
}