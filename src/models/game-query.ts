import type ParentPlatform from "./parent-platform";
export default interface GameQuery {
    genreName: string | null;
    platform: ParentPlatform | null;
    search: string | null;
}