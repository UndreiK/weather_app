// import CityList from '@/entities/city/ui/CityList/CityList'
// import WeatherCard from '@/entities/weather/ui/WeatherCard/WeatherCard'
// import SearchCityForm from '@/features/ui/SearchCityForm/SearchCityForm'

import CityList from '../../../entities/city/ui/CityList/CityList'
import WeatherCard from '../../../entities/weather/ui/WeatherCard/WeatherCard'
import SearchCityForm from '../../../features/ui/SearchCityForm/SearchCityForm'

const Main = () => {
  return (
    <>
      <SearchCityForm />
      <WeatherCard />
      <CityList />
    </>
  )
}

export default Main
