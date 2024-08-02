import React, { useContext } from 'react'
import { UpcomingCard } from './UpcomingCard'
import WeatherContext from '../context/WeatherContext'
import useWeatherData from '../hooks/useWeatherData'

export const UpcomingWeather = () => {
    const {city, unit} = useContext(WeatherContext)

    const {formattedData}= useWeatherData(city,unit)
    const updatedData = formattedData ? formattedData.slice(1) : [];

  return (
    <ul className='py-14 mx-auto  grid grid-cols-2 gap-8
    sm:flex sm:flex-row sm:p-0  sm:gap-4 lg:gap-6 xl:gap:8 '>
        {
            updatedData.map(x => 
                <UpcomingCard data={x}></UpcomingCard>
            )
        }
    </ul>
  )
}
