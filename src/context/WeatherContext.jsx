import React, { createContext, useState } from 'react'

const WeatherContext = createContext()

export const WeatherProvider = ({children}) => {
    const [city,setCity] = useState('Helsinki')
    const [unit,setUnit] = useState('metric')
    return (
        <WeatherContext.Provider value={{city, setCity, unit, setUnit}}>
            {children}
        </WeatherContext.Provider>
    )
}

export default WeatherContext