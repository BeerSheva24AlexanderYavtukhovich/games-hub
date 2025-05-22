import useFetch from "./useFetch";
import type { Platform } from "../../models/fetch-platform-types";

export default function useGenres():{data: Platform[], error: string, isLoading: boolean} {
    return useFetch<Platform>("/platforms/lists/parents")
}