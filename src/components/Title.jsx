import WeatherCardForcast from "./WeatherCardForecast"


function Title() {

      const currentWeather = [
        {
          id: 1,
          day: 'Tuesday',
          status: 'Rain',
          temp: '28°C',
          windspeed: '2kph'
        }
      ]
    
      const weatherStatusCurrent = currentWeather.map(
        (curWeather) => <WeatherCardForcast key={curWeather.id} day={curWeather.day} status={curWeather.status} temp={curWeather.temp} windspeed={curWeather.windspeed}/>
      )

    return (
        <>
            <div className="row d-flex justify-content-center">
            {weatherStatusCurrent}
            </div>
        </>
    )
}

export default Title