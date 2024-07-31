import React, { useContext } from 'react'
import { UpcomingCard } from './UpcomingCard'
import WeatherContext from '../context/WeatherContext'
import useWeatherData from '../hooks/useWeatherData'

export const UpcomingWeather = () => {
    const {city, unit, setCity} = useContext(WeatherContext)

    const {formattedData}= useWeatherData(city,unit)
    const updatedData = formattedData ? formattedData.slice(1) : [];

  return (
    <ul className='w-full p-[54px] grid grid-cols-2 gap-8
    xsm:flex xsm:flex-row xsm:p-0 xsm:w-fit  '>
        {
            formattedData.map(x => 
                <UpcomingCard data={x}></UpcomingCard>
            )
        }
    </ul>
  )
}
