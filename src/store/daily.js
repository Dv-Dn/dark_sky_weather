import axios from "axios";
export default {
  state: {
    daily: {},
    isLoad: false
  },
  getters: {
    get_daily(state) {
      return state.daily;
    },
    get_daily_loading(state) {
      return state.isLoad;
    }
  },
  mutations: {
    SET_DAILY(state, payload) {
      state.daily = payload;
    },
    SET_DAILY_LOADING(state, payload) {
      state.isLoad = payload;
    }
  },
  actions: {
    async getDailyWeather({ commit, getters }, time) {
      commit("SET_DAILY_LOADING", true);
      try {
        let url =
          "https://api.darksky.net/forecast/770bf1dd799873b06dc56454496e4c45/46.444003,30.748728," +
          time +
          "?lang=" +
          getters.get_lang +
          "&units=si&exclude=flags";
        let proxy = "https://cors-anywhere.herokuapp.com/";

        const response = await axios.get(proxy + url);
        commit("SET_DAILY", response.data);
        commit("SET_DAILY_LOADING", false);
        console.log(response);
      } catch (e) {
        console.log(e);
      }
    }
  }
};
