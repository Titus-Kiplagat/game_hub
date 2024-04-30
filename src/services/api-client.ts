import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
	count: number;
	next: string | null;
	previous: string | null;
	results: T[];
}

const axiosInstance = axios.create({
	baseURL: "https://api.rawg.io/api",
	params: {
		key: "a9aed065ea5647938e8816eb83574102",
	},
})

class APIClient<T> {
	endpoint: string;

	constructor(endpoint: string) {
		this.endpoint = endpoint;
	}

	get = async (config?: AxiosRequestConfig) => {
		return axiosInstance.get<FetchResponse<T>>(this.endpoint, config).then(response => response.data);
	}
}

export default APIClient;
