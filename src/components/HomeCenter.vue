<template>
	<!-- <v-container justify="center"> -->
	<div class="px-8">
		<v-row class="align-center">
			<span class="font-weight-thin display-4">{{
				Math.round(weather.currently.temperature) + "°"
			}}</span>
			<v-icon class=" ml-2" color="white" size="63px">
				{{ weatherIcons[weather.currently.icon] }}
			</v-icon>
		</v-row>
		<v-row class="pb-3">
			{{ weather.currently.summary }}
		</v-row>
		<v-row class="align-center my-5">
			<v-icon color="white" size="18px">{{ icons.temperature }}</v-icon>
			<div>
				{{
					weather.daily.data[0].temperatureLow.toFixed(0) +
						"° / " +
						weather.daily.data[0].temperatureHigh.toFixed(0) +
						"°"
				}}
			</div>
			<div class="pl-3 mb-0">
				<v-icon class="pb-1 mr-1" color="white" size="18px">
					{{ iconBody }} </v-icon
				>{{ weather.currently.apparentTemperature.toFixed(0) }}°
			</div>
		</v-row>

		<v-row class="align-center my-4">
			<div>
				<v-icon class="pb-1 mr-1 " color="white" size="18px">{{
					iconWater
				}}</v-icon
				>{{ (weather.currently.humidity * 10).toFixed(0) }} %
			</div>
			<div class="ml-4">
				<v-icon class="pb-1 mr-1" color="white" size="18px">{{
					iconWind
				}}</v-icon
				>{{ weather.currently.windSpeed.toFixed(1) }} m/s
			</div>
			<div class="ml-4">
				<v-icon class="pb-1 mr-1" color="white" size="18px">{{
					iconPrecipitation
				}}</v-icon
				>{{ weather.currently.precipProbability.toFixed(1) }}%
			</div>
		</v-row>
		<!-- <v-row class="align-center my-4">
			<div>
				Show more
				<v-icon class="pb-1 mr-1" color="white">{{ iconArrowDown }}</v-icon>
			</div>
		</v-row> -->
	</div>
	<!-- </v-container> -->
</template>
<script>
import {
	mdiWhiteBalanceSunny,
	mdiTshirtCrew,
	mdiWater,
	mdiArrowDownDropCircleOutline,
	// mdiChevronLeft,
	// mdiChevronRight,
	// weather icons
	mdiWeatherWindy,
	mdiCloudQuestion
} from "@mdi/js";
export default {
	props: { weather: Object, icons: Object, weatherIcons: Object },
	data: () => ({
		iconSun: mdiWhiteBalanceSunny,
		iconBody: mdiTshirtCrew,
		iconWater: mdiWater,
		iconWind: mdiWeatherWindy,
		iconPrecipitation: mdiCloudQuestion,
		iconArrowDown: mdiArrowDownDropCircleOutline
		// iconPrev: mdiChevronLeft,
		// iconNext: mdiChevronRight
	})
};
</script>
