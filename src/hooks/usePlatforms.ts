import { useQuery } from "@tanstack/react-query";
import ms from "ms";
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
	queryFn: apiClient.getAll,
	staleTime: ms("1d"),
	initialData: platforms,
})

export default usePlatforms;