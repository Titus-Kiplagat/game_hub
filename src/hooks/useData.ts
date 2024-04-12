import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface FetchResponse<T> {
	count: number;
	results: T[];
}

const useData = <T>(endpoint: string) => {
	const [data, setData] = useState<T[]>([]);
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const controller = new AbortController();

		setLoading(true);
		apiClient
			.get<FetchResponse<T>>(endpoint, { signal: controller.signal })
			.then(({ data }) => {
				setData(data.results)
				setLoading(false);
			})
			.catch((error) => {
				if (error.name === "CanceledError") return;
				setError(error);
				setLoading(false);
			});

		return () => controller.abort();
	}, []);

	return { data, error, loading };
}

export default useData;