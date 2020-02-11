<template>
	<v-card height="100%">
		<Toolbar showArrow :timezone="dailyWeather.timezone" :time="time" />
		<v-list-item two-line class="blue pl-3 py-1" dark flat>
			<v-list-item-icon class="my-0 mx-2">
				<v-icon size="55px">{{
					weatherIcons[dailyWeather.daily.data[0].icon]
				}}</v-icon>
			</v-list-item-icon>
			<div class="text-left">
				<v-list-item-title>{{
					dailyWeather.daily.data[0].summary
				}}</v-list-item-title>
				<v-list-item-subtitle>{{
					dailyWeather.daily.data[0].temperatureLow.toFixed(0) +
						"° / " +
						dailyWeather.daily.data[0].temperatureHigh.toFixed(0) +
						"°"
				}}</v-list-item-subtitle>
			</div>
		</v-list-item>

		<div>
			<v-tabs
				v-model="tabs"
				class="pb-1 blue"
				dark
				align-with-title
				background-color="transparent"
			>
				<v-tabs-slider></v-tabs-slider>

				<v-tab v-for="item in items" :key="item">
					{{ get_lang_data[item] }}
				</v-tab>
			</v-tabs>
		</div>
		<v-tabs-items v-model="tabs">
			<v-tab-item>
				<DailySummary
					v-if="!loading"
					:weather="dailyWeather.currently"
					:langData="this.get_lang_data"
					:icons="get_icons"
				/>
			</v-tab-item>
			<v-tab-item>
				<DailyDetails
					:hourly="dailyWeather.hourly"
					v-if="!loading"
					:langData="this.get_lang_data"
					:icons="get_icons"
				/>
			</v-tab-item>
		</v-tabs-items>
	</v-card>
</template>
<script>
import DailySummary from "@/components/DailySummary";
import DailyDetails from "@/components/DailyDetails";
import Toolbar from "@/components/Toolbar";

// import { mdiArrowLeft, mdiWeb } from "@mdi/js";
export default {
	components: { Toolbar, DailySummary, DailyDetails },
	props: { time: Object },
	mounted() {
		this.$store.dispatch("getDailyWeather", this.time);
	},
	computed: {
		get_lang_data() {
			return this.$store.getters.get_lang_data;
		},
		dailyWeather() {
			return this.$store.getters.get_daily;
		},
		loading() {
			return this.$store.getters.get_daily_loading;
		},
		get_icons() {
			return this.$store.getters.get_icons;
		},
		weatherIcons() {
			return this.$store.getters.get_weather_icons;
		}
	},
	data: () => ({
		tabs: null,
		name: "daily",
		items: ["summary", "details"]
	})
};
</script>
