[![npm version](https://badge.fury.io/js/tsc-openweather.svg)](https://badge.fury.io/js/tsc-openweather) [![Build Status](https://dev.azure.com/dli-grandfleet/FriendlyUser%20Open%20Source/_apis/build/status/FriendlyUser.tsc-openweather?branchName=master)](https://dev.azure.com/dli-grandfleet/FriendlyUser%20Open%20Source/_build/latest?definitionId=9&branchName=master)

### OpenWeather Typescript

Free Feel to contact me if there any bugs or issues that occur.


Wrapper around openweather map made using typescript

## Usage

#### Instantiate the OpenWeatherMapHelper class

``` javascript 
const {OpenWeather} = require('tsc-openweather')
```
#### Set your API Key (Required) 

``` javascript
const weather = new OpenWeather("1243ceb413c799ddad21527b0e41a23e")
```


##### Unit Options(Optional, Kelvin by default) : 

1. ```imperial```

2. ```metric```


## Features


### (1) Current Weather
#### Get current weather by City Name:

```javascript
weather.getCurrentWeatherByCityName("Accra", (err, currentWeather) => {
	if(err){
		console.log(err);
	}
	else{
		console.log(currentWeather);
	}
});
```

#### Get current weather by City ID:

```javascript
weather.getCurrentWeatherByCityID("524901", (err, currentWeather) => {
	if(err){
		console.log(err);
	}
	else{
		console.log(currentWeather);
	}
});
```

#### Get current weather by Geographic Coordinates:

```javascript
weather.getCurrentWeatherByGeoCoordinates(5.6037, 0.1870, (err, currentWeather) => {
	if(err){
		console.log(err);
	}
	else{
		console.log(currentWeather);
	}
});
```

#### Get current weather by Zip Code:
```javascript
weather.getCurrentWeatherByZipCode("90003", (err, currentWeather) => {
	if(err){
		console.log(err);
	}
	else{
		console.log(currentWeather);
	}
});
```

### (2) 5 day / 3 hour forecast
#### Get three hour forecast by City Name:
```javascript
weather.getThreeHourForecastByCityName("Pretoria", (err, threeHourForecast) => {
	if(err){
		console.log(err);
	}
	else{
		console.log(threeHourForecast);
	}
});

```

#### Get three hour forecast by City ID:
```javascript
weather.getThreeHourForecastByCityID("524901", (err, threeHourForecast) => {
	if(err){
		console.log(err);
	}
	else{
		console.log(threeHourForecast);
	}
});

```

#### Get three hour forecast by Geographic Coordinates:
```javascript
weather.getThreeHourForecastByGeoCoordinates(6.5244,3.3792, (err, threeHourForecast) => {
	if(err){
		console.log(err);
	}
	else{
		console.log(threeHourForecast);
	}
});

```
#### Get three hour forecast by Zip Code:
```javascript
weather.getThreeHourForecastByZipCode("94040", (err, threeHourForecast) => {
	if(err){
		console.log(err);
	}
	else{
		console.log(threeHourForecast);
	}
});

```
