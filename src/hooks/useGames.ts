import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import APIClient from "../services/api-client";
import { GameQuery } from "../store";
import { Game } from "../entities/Game";

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