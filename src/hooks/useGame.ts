import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { Game } from "./useGames";

const apiClient = new APIClient<Game>("/games");

const useGame = (slug: string) => {
	const fetchGame = async () => {
		return apiClient.get(slug);
	};

	return useQuery({
		queryKey: ["games", slug],
		queryFn: fetchGame,
	})
};

export default useGame;
