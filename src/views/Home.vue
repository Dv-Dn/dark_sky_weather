<template>
	<v-card height="100%" class="d-flex flex-column">
		<div class=" white--text blue home-top d-flex flex-column">
			<Toolbar class="home-nav" :timezone="weather.timezone" />
			<!-- lang/menu bar -->
			<!-- <HomeTop /> -->
			<!-- main info -->
			<HomeCenter
				:weather="weather"
				:weatherIcons="weatherIcons"
				:icons="icons"
				class="home-center"
			/>
			<!-- <v-spacer></v-spacer> -->
		</div>
		<!-- bottom nav-->
		<HomeBottom :weather="weather" :icons="weatherIcons" :datNames="datNames" />
	</v-card>
</template>

<script>
// @ is an alias to /src
import Toolbar from "@/components/Toolbar";
import HomeCenter from "@/components/HomeCenter";
import HomeBottom from "@/components/HomeBottom";
// import HomeTop from "@/components/HomeTop";
export default {
	name: "home",
	mounted() {
		this.$store.dispatch("getWeather");
	},
	components: {
		Toolbar,
		HomeCenter,
		HomeBottom
		// HomeTop
	},
	computed: {
		weather() {
			return this.$store.getters.get_weather;
		},
		get_loading_status() {
			return this.$store.getters.get_loading_status;
		},
		weatherIcons() {
			return this.$store.getters.get_weather_icons;
		},
		icons() {
			return this.$store.getters.get_icons;
		},
		datNames() {
			return this.$store.getters.get_dat_names;
		}
	},
	data: () => ({})
};
</script>
<style lang="scss" scoped>
.home-top {
	// display: flex;
	max-height: 80vh;
	flex: 1;
	// height: 70vh;
	-webkit-box-shadow: 0 3px 4px 0 #a69d8f;
	box-shadow: 0 2px 5px 0 #a69d8f;
}
.home-nav {
	flex: 1;
}
.home-center {
	flex: 3;
}
</style>
