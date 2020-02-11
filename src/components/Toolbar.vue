<template>
	<v-toolbar color="blue" dark flat>
		<v-btn icon to="/" v-if="showArrow">
			<v-icon>{{ arrowIcon }}</v-icon>
		</v-btn>
		<v-toolbar-title>{{ timezone }} </v-toolbar-title>

		<v-spacer></v-spacer>

		<div class="d-flex">
			<div class="caption text-uppercase mr-n3 mt-1">
				{{ get_lang }}
			</div>
			<v-menu offset-y>
				<template v-slot:activator="{ on }">
					<v-btn icon v-on="on">
						<v-icon>{{ langIcon }}</v-icon>
					</v-btn>
				</template>
				<v-list>
					<v-list-item
						v-for="(item, index) in langs"
						:key="index"
						@click="changeLang(item, time)"
					>
						<v-list-item-title>{{ item }}</v-list-item-title>
					</v-list-item>
				</v-list>
			</v-menu>
		</div>
	</v-toolbar>
</template>
<script>
import { mdiArrowLeft, mdiWeb } from "@mdi/js";
export default {
	props: {
		showArrow: { type: Boolean, default: false },
		timezone: String,
		time: String
	},
	computed: {
		get_lang() {
			return this.$store.getters.get_lang;
		}
	},
	data: () => ({
		arrowIcon: mdiArrowLeft,
		langIcon: mdiWeb,
		langs: ["ru", "en"]
	}),
	methods: {
		changeLang(lang, time) {
			if (this.$route.name === "daily")
				this.$store.dispatch("changeLangDaily", { lang, time });
			else this.$store.dispatch("changeLangHome", lang);
		}
	}
};
</script>
