import { OpenWeather } from './openweather'

describe('OpenWeather', () => {
  const Weather = new OpenWeather("1243ceb413c799ddad21527b0e41a23e")
  test('Getting City Id for Weather', async () => {
    let weatherObj = null
    Weather.getWeatherByCityId(6174032, (err: any, currentWeather: any) => {
      if(err){
        console.log(err);
      }
      else{
        weatherObj = currentWeather
        expect(weatherObj).toBeDefined()
      }
    })
  }, 10000)
})