import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
	count: number;
	results: T[];
}

const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: unknown[]) => {
	const [data, setData] = useState<T[]>([]);
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const controller = new AbortController();

		setLoading(true);
		apiClient
			.get<FetchResponse<T>>(endpoint, { signal: controller.signal, ...requestConfig })
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
	}, deps ? [...deps] : []);

	return { data, error, loading };
}

export default useData;