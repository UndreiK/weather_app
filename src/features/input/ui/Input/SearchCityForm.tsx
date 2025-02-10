import React, {useState} from "react";
import {useAppDispatch} from "../../../../app/api/hooks.ts";
import {getCity} from "../../../../entities/weather/model/weatherSlice.ts";


const Input = () => {

    const [city, setCity] = useState<string>('')
    const dispatch = useAppDispatch()

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(getCity(city))
        setCity('')
    }


    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                onChange={(e) => setCity(e.target.value)}
                value={city}
                placeholder="Enter city name"
            />
            <button type="submit">
                Search
            </button>
        </form>
    )
}


export default Input