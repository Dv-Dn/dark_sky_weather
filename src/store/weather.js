import axios from "axios";

export default {
	state: {
		loading: false,
		weather: {}
	},
	getters: {
		get_weather: state => state.weather,
		get_loading_status: state => state.loading
	},
	mutations: {
		SET_WEATHER(state, payload) {
			state.weather = payload;
		},
		SET_LOADING_STATUS(state, payload) {
			state.loading = payload;
		}
	},
	actions: {
		async getWeather({ commit, getters }) {
			commit("SET_LOADING_STATUS", true);
			try {
				let url =
					"https://api.darksky.net/forecast/770bf1dd799873b06dc56454496e4c45/46.444003,30.748728?lang=" +
					getters.get_lang +
					"&units=si&exclude=flags,hourly";
				// Прокси добавил в связи с тем, что по какой-то причине при запросе на сервер получаю CORS ошибку.
				let proxy = "https://cors-anywhere.herokuapp.com/";
				const response = await axios.get(proxy + url);
				console.log(response);
				commit("SET_WEATHER", response.data);
				commit("SET_LOADING_STATUS", false);
			} catch (e) {
				console.log(e);
			}
		}
	}
};
