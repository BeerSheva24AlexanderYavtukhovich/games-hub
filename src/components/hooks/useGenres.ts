import useFetch from "./useFetch";
import type { Genre } from "../../models/fetch-genre-types";

export default function useGenres():{data: Genre[], error: string, isLoading: boolean} {
    return useFetch<Genre>("/genres")
}