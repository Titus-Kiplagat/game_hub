import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import APIClient from "../services/api-client";

export interface Platform {
	id: number;
	slug: string;
	name: string;
}

const apiClient = new APIClient<Platform>("/platforms");

const usePlatforms = () => useQuery({
	queryKey: ["platforms"],
	queryFn: apiClient.get,
	staleTime: 1000 * 60 * 60 * 24,	// 24 hours
	initialData: platforms,
})

export default usePlatforms;