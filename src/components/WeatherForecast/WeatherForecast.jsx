import './WeatherForecast.css'
import WeatherData from './WeatherData'
import WeatherIcon from './WeatherIcon'

const WeatherForecast = ({day, img, imgAlt, conditions, time}) => {
    return (
        <div className="weather">
            <h2>{day}</h2>
            <WeatherIcon img={img} imgAlt={imgAlt} />
            <WeatherData conditions={conditions} time={time} />
        </div>

    )
}

export default WeatherForecast