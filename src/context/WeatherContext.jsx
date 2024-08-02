import React, { createContext, useState } from 'react'

const WeatherContext = createContext()

export const WeatherProvider = ({ children }) => {
    const [city, setCity] = useState('Helsinki')
    const [unit, setUnit] = useState('metric')
    const [coords, setCoords] = useState({lat:null, lon:null})

    const updateCity = (newCity) => {
        setCity(newCity);
        setCoords({ lat: null, lon: null });
      }
    
      const updateCoords = (lat, lon) => {
        setCoords({ lat, lon });
        setCity(null);
      }


    return (
        <WeatherContext.Provider value={{ city, unit, coords, setUnit, updateCity, updateCoords }}>
            {children}
        </WeatherContext.Provider>
    )
}

export default WeatherContext