import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface Genre {
	id: number;
	name: string;
}

interface FetchGenresResponse {
	count: number;
	results: Genre[];
}

const useGenres = () => {
	const [genres, setGenres] = useState<Genre[]>([]);
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		apiClient.get<FetchGenresResponse>("/genres")
			.then(({ data }) => {
				setGenres(data.results);
				setLoading(false);
			})
			.catch((error) => {
				setError(error);
				setLoading(false);
			});
	}, []);

	return { genres, error, loading };
};

export default useGenres;