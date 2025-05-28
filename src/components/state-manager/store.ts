import { create } from "zustand";
import type ParentPlatform from "../../models/parent-platform";

interface GameQuery {
  genreName: string | null;
  platform: ParentPlatform | null;
  search: string | null;
  ordering: string | null;
}

interface GamesQueryStore {
  gameQuery: GameQuery;
  setGenre: (genreName: string | null) => void;
  setPlatform: (platform: ParentPlatform | null) => void;
  setSearch: (search: string | null) => void;
  setOrdering: (ordering: string | null) => void;
}

export const useGamesQueryStore = create<GamesQueryStore>((set) => ({
  gameQuery: {
    genreName: null,
    platform: null,
    search: null,
    ordering: null,
  },
  setGenre: (genreName) =>
    set((state) => ({
      gameQuery: state.gameQuery.genreName === genreName? state.gameQuery :{ ...state.gameQuery, genreName },
    })),
  setPlatform: (platform) =>
    set((state) => ({
      gameQuery: state.gameQuery.platform === platform? state.gameQuery : {...state.gameQuery, platform },
    })),
  setSearch: (search) =>
    set((state) => ({
      gameQuery: { ...state.gameQuery, search },
    })),
  setOrdering: (ordering) =>
    set((state) => ({
      gameQuery: { ...state.gameQuery, ordering },
    }))
}));
