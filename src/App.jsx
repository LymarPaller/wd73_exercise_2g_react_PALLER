import Navbar from "./components/Navbar.jsx"
import Footer from "./components/Footer.jsx"
import WeatherCard from "./components/WeatherCard.jsx"
import WeatherCardForecast from "./components/WeatherCardForecast.jsx"

function App() {

  const weatherDetails = [
    {
      id: 2,
      day: 'Wednesday',
      status: 'Rain',
      temp: '26°C',
      windspeed: '2kph'
    },
    {
      id: 3,
      day: 'Thursday',
      status: 'Light Rain',
      temp: '30°C',
      windspeed: '2kph'
    },
    {
      id: 4,
      day: 'Friday',
      status: 'Clear',
      temp: '30°C',
      windspeed: '2kph'
    },
    {
      id: 5,
      day: 'Saturday',
      status: 'Cloudy',
      temp: '31°C',
      windspeed: '2kph'
    },
    {
      id: 6,
      day: 'Sunday',
      status: 'Heavy Rain',
      temp: '32°C',
      windspeed: '2kph'
    },
    {
      id: 7,
      day: 'Monday',
      status: 'Clear',
      temp: '27°C',
      windspeed: '2kph'
    },
  ]

  const currentWeather = [
    {
      id: 1,
      day: 'Tuesday',
      status: 'Rain',
      temp: '28°C',
      windspeed: '2kph'
    }
  ]

  const weatherStatus = weatherDetails.map(
    (weather) => <WeatherCard key={weather.id} day={weather.day} status={weather.status} temp={weather.temp} windspeed={weather.windspeed}/>

  );

  const weatherStatusCurrent = currentWeather.map(
    (curWeather) => <WeatherCardForecast key={curWeather.id} day={curWeather.day} status={curWeather.status} temp={curWeather.temp} windspeed={curWeather.windspeed}/>
  )

  return (
    <>
      <main className="container-fluid">
        <Navbar/>

        <div className="row d-flex justify-content-center">
          {weatherStatusCurrent}
        </div>

        <div className="row d-flex justify-content-center">
          {weatherStatus}
        </div>

        <Footer/>

      </main>
    </>
  )
}

export default App
