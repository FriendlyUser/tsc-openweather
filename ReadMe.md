[![npm version](https://badge.fury.io/js/tsc-openweather.svg)](https://badge.fury.io/js/tsc-openweather) [![Build Status](https://dev.azure.com/dli-grandfleet/FriendlyUser%20Open%20Source/_apis/build/status/FriendlyUser.tsc-openweather?branchName=master)](https://dev.azure.com/dli-grandfleet/FriendlyUser%20Open%20Source/_build/latest?definitionId=9&branchName=master)

### OpenWeather Typescript

Wrapper around openweather map made using typescript

Usage example

```
const weather = new OpenWeather("1243ceb413c799ddad21527b0e41a23e")

weather.getWeatherByCityId(6174032, (err: any, currentWeather: any) => {
	if(err){
		console.log(err)
	}
	else{
		console.log(currentWeather)
	}
})
```