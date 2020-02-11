<template>
	<v-list class="transparent" width="100%">
		<v-list-item v-for="i in itemList" :key="i.key" two-line class="mb-5">
			<v-list-item-content>
				<!-- <v-list-subtitle> -->
				<v-row align="start" class="pa-4">
					<v-icon
						:color="checking ? 'red lighten-2' : 'blue'"
						class="mr-2"
						size="40"
					>
						{{ i.icon }}
					</v-icon>
					<div class="caption grey--text text-uppercase">
						{{ langData[i.key] }}
					</div>
					<div>
						<span
							class="display-1 font-weight-black"
							v-text="avg(i.key)"
						></span>
						<!-- <v-icon color="black" class="mr-12 mt-n3" size="40">
              {{ i.notation }}
            </v-icon> -->
						<strong>{{ i.notation }}</strong>
					</div>
				</v-row>
				<!-- </v-list-title> -->
				<v-sparkline
					:key="String(avg(i.key))"
					:smooth="16"
					color="grey"
					:line-width="2"
					:value="valueList(i.key)"
					auto-draw
					stroke-linecap="round"
					show-labels
					label-size="5"
				></v-sparkline>
			</v-list-item-content>
		</v-list-item>
	</v-list>
</template>
<script>
import { mdiThermometer, mdiTshirtCrew, mdiWeatherWindy } from "@mdi/js";

export default {
	props: { hourly: Object, langData: Object },
	data: () => ({
		checking: false,
		itemsLists: ["temperature", "apparentTemperature", "windSpeed"],
		itemList: [
			{
				key: "temperature",
				icon: mdiThermometer,
				notation: " °C"
			},
			{
				key: "apparentTemperature",
				icon: mdiTshirtCrew,
				notation: " °C"
			},
			{
				key: "windSpeed",
				icon: mdiWeatherWindy,
				notation: "m/s"
			}
		]
	}),
	computed: {},

	methods: {
		valueList(v) {
			let arr = [];
			for (let i of this.hourly.data) {
				arr.push(+i[v].toFixed(1));
			}
			return arr;
		},
		avg(v) {
			let sum = 0;
			for (let i of this.valueList(v)) {
				sum += i;
			}
			return (sum / this.valueList(v).length).toFixed(1);
		},
		qwe(v) {
			return this.langData[v];
		}
		// detailsItems(){
		//   return []
		// },
	}
};
</script>
