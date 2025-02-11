import { IWeatherData } from '../../../../shared/types.ts'
import styles from './styles.module.css'

interface Props {
  data: IWeatherData | undefined
}

const Weather = ({ data }: Props) => {
  console.log(data)

  const getWindDirection = (degrees: number): string => {
    const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW']
    const index = Math.round(degrees / 45) % 8
    return directions[index]
  }

  return (
    <div className={styles.container}>
      {data && (
        <div className={styles.weather}>
          <h2>
            {data.name} {data.sys.country}
          </h2>
          <p>temp: {data.main.temp}</p>
          <p>humidity: {data.main.humidity}</p>
          <p>pressure: {data.main.pressure}</p>
          <p>feels_like: {data.main.feels_like}</p>
          <p>weather: {data.weather[0].main}</p>
          <p>description: {data.weather[0].description}</p>
          <p>wind: {getWindDirection(data.wind.deg)}</p>
          <p>wind.speed: {data.wind.speed}</p>
        </div>
      )}
    </div>
  )
}

export default Weather
