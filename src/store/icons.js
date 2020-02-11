import {
	// mdiWhiteBalanceSunny,
	mdiWeatherSunny,
	mdiWeatherNight,
	mdiWeatherRainy,
	mdiWeatherSnowy,
	mdiWeatherSnowyRainy,
	mdiWeatherWindyVariant,
	mdiWeatherFog,
	mdiWeatherCloudy,
	mdiWeatherHail,
	mdiWeatherPartlyCloudy,
	mdiWeatherNightPartlyCloudy,
	mdiWeatherLightning,
	mdiWeatherTornado
} from "@mdi/js";
import {
	mdiWaterPercent,
	mdiWaterOutline,
	mdiArrowCollapseDown,
	mdiThermometer,
	mdiCloudQuestion,
	mdiCloudAlert,
	mdiTshirtCrew,
	mdiWeatherWindy,
	mdiEye,
	mdiCloud,
	mdiHomeThermometer,
	mdiMolecule
} from "@mdi/js";

export default {
	state: {
		weatherIcons: {
			"clear-day": mdiWeatherSunny,
			"clear-night": mdiWeatherNight,
			rain: mdiWeatherRainy,
			snow: mdiWeatherSnowy,
			sleet: mdiWeatherSnowyRainy,
			wind: mdiWeatherWindyVariant,
			fog: mdiWeatherFog,
			cloudy: mdiWeatherCloudy,
			"partly-cloudy-day": mdiWeatherPartlyCloudy,
			"partly-cloudy-night": mdiWeatherNightPartlyCloudy,
			hail: mdiWeatherHail,
			thunderstorm: mdiWeatherLightning,
			tornado: mdiWeatherTornado
		},
		icons: {
			summary: mdiHomeThermometer,
			precipIntensity: mdiCloudAlert,
			precipProbability: mdiCloudQuestion,
			temperature: mdiThermometer,
			apparentTemperature: mdiTshirtCrew,
			dewPoint: mdiWaterOutline,
			humidity: mdiWaterPercent,
			pressure: mdiArrowCollapseDown,
			windSpeed: mdiWeatherWindy,
			windGust: mdiWeatherWindyVariant,
			cloudCover: mdiCloud,
			visibility: mdiEye,
			ozone: mdiMolecule
		}
	},
	getters: {
		get_weather_icons(state) {
			return state.weatherIcons;
		},
		get_icons(state) {
			return state.icons;
		}
	}
};
