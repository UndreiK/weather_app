import Weather from '../Weather/Weather.tsx'
import { useGetWeatherByCityQuery } from '../../api/weatherApi.ts'
import { useAppSelector } from '../../../../app/api/hooks.ts'
import LoadingMessage from '../../../../shared/ui/Loading/LoadingMessage.tsx'
import ErrorMessage from '../../../../shared/ui/Error/ErrorMessage.tsx'

const WeatherCard = () => {
  const city = useAppSelector((state) => state.weather.city)
  const { data, isLoading, isError } = useGetWeatherByCityQuery(
    city as string,
    {
      skip: !city,
    }
  )

  if (isLoading) {
    return <LoadingMessage />
  }

  if (isError) {
    return <ErrorMessage error={isError} />
  }

  return data && <Weather data={data} />
}

export default WeatherCard
