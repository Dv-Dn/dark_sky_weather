import en from "@/assets/lang/en.json";
import ru from "@/assets/lang/ru.json";

export default {
	state: {
		lang: "en",
		langData: { en, ru }
	},
	getters: {
		get_lang_data: state => {
			return state.langData[state.lang];
		},
		get_lang: state => {
			return state.lang;
		},
		get_dat_names: state => {
			return state.langData[state.lang].datNames;
		}
	},
	mutations: {
		SET_LANG(state, payload) {
			state.lang = payload;
		}
	},

	actions: {
		changeLangDaily({ commit, dispatch }, { lang, time }) {
			commit("SET_LANG", lang);
			dispatch("getDailyWeather", time);
		},
		changeLangHome({ commit, dispatch }, lang) {
			commit("SET_LANG", lang);
			dispatch("getWeather");
		}
	}
};
