import Vue from "vue";
import Vuex from "vuex";
// Modules
import langs from "./langs";
import weather from "./weather";
import icons from "./icons";
import daily from "./daily";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {},
	mutations: {},
	actions: {},
	modules: { weather, icons, daily, langs }
});
