import type { Platform } from "../../models/fetch-platform-types";
import apiClient from "../../services/api-client";

export default function usePlatforms() {
    return apiClient.createQueryHook<Platform>(
    "platforms",
    "/platforms/lists/parents",
    {},
    { staleTime: 3600000 * 24 }
  );
}