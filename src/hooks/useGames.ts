import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

export interface Platform {
	id: number;
	slug: string;
	name: string;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

export interface Game {
  id: number;
  name: string;
	background_image: string;
	parent_platforms: { platform: Platform }[]; 
	metacritic: number;
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

	useEffect(() => {
		const controller = new AbortController();

    apiClient
			.get<FetchGamesResponse>("/games", {signal: controller.signal})
      .then(({ data }) => setGames(data.results))
			.catch((error) => {
				if (error.name === "CanceledError") return;
        setError(error);
			});
		
		return () => controller.abort();
	}, []);
	
	return { games, error };
}

export default useGames