<template>
	<v-slide-group
		class="home-bottom py-2"
		v-model="model"
		show-arrows
		center-active
	>
		<v-slide-item
			v-for="(n, i) in weather.daily.data"
			:key="n.time"
			v-slot:default="{ active, toggle }"
		>
			<v-card
				class="d-flex flex-column justify-space-between mx-3 my-3"
				width="200"
				@click="toggle"
				height="200"
				justify="space-between"
				:to="{ name: 'daily', params: { time: n.time } }"
			>
				<v-card-title class="mx-auto">
					{{ convertTime(n.time, i) }}
				</v-card-title>
				<v-card-subtitle :style="{ height: '70px' }"
					>{{ n.summary }}
				</v-card-subtitle>
				<div>
					<v-icon size="33px">{{ icons[n.icon] }}</v-icon>
				</div>
				<v-card-text>{{
					Math.round(n.temperatureLow) +
						"°/ " +
						Math.round(n.temperatureHigh) +
						"°"
				}}</v-card-text>
			</v-card>
		</v-slide-item>
	</v-slide-group>
</template>
<script>
import { mdiWhiteBalanceSunny } from "@mdi/js";
export default {
	props: { weather: Object, icons: Object, datNames: Array },

	data: () => ({
		model: 0,
		iconSunny: mdiWhiteBalanceSunny
	}),
	methods: {
		convertTime(d, i) {
			let date = new Date(d * 1000);
			let day = date.getDay();
			if (i === 0) return this.datNames[7];
			return this.datNames[day];
		}
	}
};
</script>
<style lang="scss" scoped>
.home-bottom {
	min-height: 240px;
}
</style>
