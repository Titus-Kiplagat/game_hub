import axios from "axios";

export default axios.create({
	baseURL: "https://api.rawg.io/api",
	params: {
		key: "a9aed065ea5647938e8816eb83574102",
	},
})
