import Weather from "../Weather/Weather.tsx";
import {useGetWeatherByCityQuery} from "../../api/weatherApi.ts";
import {useAppSelector} from "../../../../app/api/hooks.ts";
import LoadingMessage from "../../../../shared/ui/Loading/LoadingMessage.tsx";
import ErrorMessage from "../../../../shared/ui/Error/ErrorMessage.tsx";

const WeatherCard = () => {
    const city = useAppSelector(state => state.weather.city)
    const {data, isLoading, isError} = useGetWeatherByCityQuery(city ?? '', {skip: !city})


    if (isLoading) {
        return <LoadingMessage/>
    }

    if (isError) {
        return <ErrorMessage error={isError}/>
    }

    return (
        <div>
            <Weather data={data}/>
        </div>
    )
}

export default WeatherCard