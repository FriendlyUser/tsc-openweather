
const request = require('request')

enum measurementUnits {
  metrics = 'metrics',
  imperial = 'imperial'
}

interface ErrorObject extends Object {
  status?: String
}

class OpenWeather {
  metrics: measurementUnits
  APP_KEY: string
  BASE_URL: string
  constructor(APP_KEY: string, metrics: measurementUnits = measurementUnits.metrics, BASE_URL = 'https://api.openweathermap.org/data/2.5') {
      this.APP_KEY = APP_KEY
      this.metrics = metrics
      this.BASE_URL = BASE_URL
  }
  public getWeatherByCityId(city: number, callback: (arg0: any, arg1: any) => void) {
    const { APP_KEY, BASE_URL, metrics } = this
    request.get(`${BASE_URL}/weather?id=${city}&units=${metrics}&APPID=${APP_KEY}`,
      (err: any, data: any) =>{
        OpenWeather.sendResponse(err, data, callback)
      })
  }
  public getWeatherByCityName (cityName: String, callback: (arg0: any, arg1: any) => void) {
    const { APP_KEY, BASE_URL, metrics } = this
    request.get(`${BASE_URL}/weather?q=${cityName}&units=${metrics}&APPID=${APP_KEY}`,
      (err: any, data: any) =>{
        OpenWeather.sendResponse(err, data, callback);
      })
  }

  public getWeatherByGeoCoordinates (latitude: Number, longitude: Number, callback: (arg0: any, arg1: any) => void) {
    const { APP_KEY, BASE_URL, metrics } = this
    request.get(`${BASE_URL}/weather??lat=${latitude.toString()}&lon=${longitude.toString()}&units=${metrics}&APPID=${APP_KEY}`,
      (err: any, data: any) =>{
        OpenWeather.sendResponse(err, data, callback);
      })
  }
  public getCurrentWeatherByZipCode  (zipCode: Number, callback: (arg0: any, arg1: any) => void) {
    const { APP_KEY, BASE_URL, metrics } = this
    request.get(`${BASE_URL}/weather?zip=${zipCode.toString()}&units=${metrics}&APPID=${APP_KEY}`,
      (err: any, data: any) =>{
        OpenWeather.sendResponse(err, data, callback);
      })
  }
  public getThreeHourForecastByCityName (cityName: String, callback: (arg0: any, arg1: any) => void) {
    const { APP_KEY, BASE_URL, metrics } = this
    request.get(`${BASE_URL}/weather?forecast?q=${cityName}&units=${metrics}&APPID=${APP_KEY}`,
      (err: any, data: any) =>{
        OpenWeather.sendResponse(err, data, callback);
      })
  }
  public getThreeHourForecastByCityID  (cityId: Number, callback: (arg0: any, arg1: any) => void) {
    const { APP_KEY, BASE_URL, metrics } = this
    request.get(`${BASE_URL}/weather?forecast?q=${cityId.toString()}&units=${metrics}&APPID=${APP_KEY}`,
      (err: any, data: any) =>{
        OpenWeather.sendResponse(err, data, callback);
      })
  }

  public getThreeHourForecastByGeoCoordinates   (latitude: Number, longitude: Number, callback: (arg0: any, arg1: any) => void) {
    const { APP_KEY, BASE_URL, metrics } = this
    request.get(`${BASE_URL}/weather?forecast?lat=${latitude.toString()}&lon=${longitude.toString()}&units=${metrics}&APPID=${APP_KEY}`,
      (err: any, data: any) =>{
        OpenWeather.sendResponse(err, data, callback);
      })
  }

  static sendResponse(err: any, data: { statusCode: number; body: string; }, callback: (arg0: any, arg1: any) => void){
    let error: ErrorObject = null;
    let response = null;
  
    error = err
    if (data) {
      if (data.statusCode != 200){
        let e = JSON.parse(data.body)
        error = new Error(e.message)
        error.status = e.cod
      }
      if (data.body) {
        response = JSON.parse(data.body)
        console.log(response)
      }
    }
  
    callback(error, response)
  }
}

// test code here
const weather = new OpenWeather("1243ceb413c799ddad21527b0e41a23e")

weather.getWeatherByCityId(6174032, (err: any, currentWeather: any) => {
	if(err){
		console.log(err)
	}
	else{
		console.log(currentWeather)
	}
})