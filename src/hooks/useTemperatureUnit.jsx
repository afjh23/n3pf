import React, { useContext } from 'react'
import WeatherContext from '../context/WeatherContext'

export const useTemperatureUnit = () => {
  const {unit, setUnit} =useContext(WeatherContext)
  const toggleUnit = () =>{
    setUnit(unit==='metric'?'imperial':'metric')
  }
    return {unit, toggleUnit}
}
