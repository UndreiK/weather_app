import './App.css'

import Input from "../../features/input/ui/Input/Input.tsx";
import WeatherCard from "../../entities/weather/ui/WeatherCard/WeatherCard.tsx";
import CityList from "../../entities/city/ui/CityList/CityList.tsx";


function App() {

    return (
        <>
            <Input/>
            <WeatherCard/>
            <CityList/>
        </>
    )
}

export default App
