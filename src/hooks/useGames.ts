import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import APIClient from "../services/api-client";
import { Platform } from "./usePlatforms";
import { GameQuery } from "../store";

export interface Game {
	id: number;
	slug: string;
	name: string;
	description_raw: string;
	background_image: string;
	parent_platforms: { platform: Platform }[];
	metacritic: number;
	rating_top: number;
}

const apiClient = new APIClient<Game>("/games");

const useGames = (gameQuery: GameQuery) => {
	const fetchGames = async ({ pageParam }: { pageParam: number }) => {
		return apiClient.getAll({
			params: {
				genres: gameQuery.genreId,
				parent_platforms: gameQuery.platformId,
				ordering: gameQuery.sortOrder,
				search: gameQuery.searchText,
				page: pageParam,
			}
		});
	};

	return useInfiniteQuery({
		queryKey: ["games", gameQuery],
		queryFn: fetchGames,
		initialPageParam: 1,
		getNextPageParam: (lastPage, allPages) => {
			return lastPage.next ? allPages.length + 1 : undefined
		},
		staleTime: ms("1d"),
	})
}

export default useGames;