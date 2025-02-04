import {IWeatherData} from "../../../../shared/types.ts";

interface Props {
    data: IWeatherData | undefined
}

const Weather = ({data}: Props) => {
    console.log(data)

    return (
        <div>
            {data && (
                <>
                    <h2>{data.name} {data.sys.country}</h2>
                    <p>temp: {data.main.temp}</p>
                    <p>humidity: {data.main.humidity}</p>
                    <p>pressure: {data.main.pressure}</p>
                    <p>feels_like: {data.main.feels_like}</p>
                    <p>weather: {data.weather[0].main}</p>
                    <p>description: {data.weather[0].description}</p>
                    <p>wind: {data.wind.deg}</p>
                    <p>wind.speed: {data.wind.speed}</p>
                </>
            )}
        </div>
    )
}

export default Weather