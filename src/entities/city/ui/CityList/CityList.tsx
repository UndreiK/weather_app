import {useAppDispatch, useAppSelector} from "../../../../app/api/hooks.ts";
import {clearHistory, getCity} from "../../../weather/model/weatherSlice.ts";

const CityList = () => {
    const history = useAppSelector((state) => state.weather.history)
    const dispatch = useAppDispatch()

    const handleReset = (): void => {
        dispatch(clearHistory())
    }


    return (
        <div>
            {history.length > 0 ? (
                <div>
                    <button onClick={handleReset}>clear</button>
                    {history.map((city: string, index: number) => (
                        <p
                            key={index}
                            onClick={() => dispatch(getCity(city))}
                        >
                            {city}
                        </p>
                    ))}
                </div>
            ) : (
                <p>no history</p>
            )}
        </div>
    )
}

export default CityList