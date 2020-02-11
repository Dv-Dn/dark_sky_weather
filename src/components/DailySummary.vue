<template>
	<v-list class="transparent">

		<v-list-item v-for="i in itemList" :key="i.key">
			<v-list-item-icon>
				<v-icon>{{ icons[i.key] }}</v-icon>
			</v-list-item-icon>
			<v-list-item-title class="text-left">{{
				langData[i.key]
			}}</v-list-item-title>
			<v-list-item-text class="text-no-wrap">
				{{ roundIfNum(weather[i.key]) + " " }}
				<span class="font-weight-light caption">{{ i.notation }}</span>
			</v-list-item-text>
		</v-list-item>
	</v-list>
</template>
<script>
export default {
	props: { weather: Object, langData: Object, icons: Object },

	data: () => ({
		itemList: [
			{
				key: "summary",
				notation: ""
			},
			{
				key: "temperature",
				notation: "\xB0C"
			},
			{
				key: "precipProbability",
				notation: "\xB0C"
			},
			{
				key: "precipIntensity",
				notation: ""
			},
			{
				key: "pressure",
				notation: "mb"
			},

			{
				key: "windGust",
				notation: "\xB0C"
			},
			{
				key: "windSpeed",
				notation: "m/s"
			},
			{
				key: "visibility",
				notation: "%"
			},
			{ key: "humidity", notation: "%" }
			// {
			// 	summary: "Summary",
			// 	precipIntensity: "Precipitation intensity",
			// 	precipProbability: "Precipitation probability",
			// 	temperature: "Temperature",
			// 	apparentTemperature: "Apparent temperature",
			// 	dewPoint: "Dew point",
			// 	humidity: "Humidity",
			// 	pressure: "Pressure",
			// 	windSpeed: "Wind speed",
			// 	windGust: "Wind gust",
			// 	windBearing: "Wind bearing",
			// 	cloudCover: "Cloud cover",
			// 	uvIndex: "",
			// 	visibility: "Visibility",
			// 	ozone: "Ozone"
			// }
		]
	}),
	methods: {
		roundIfNum(n) {
			if (typeof n === "number") {
				return Math.round(n);
			}
			return n;
		}
	}
};
</script>
