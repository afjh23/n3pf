import React, { useContext } from 'react'
import { UpcomingWeather } from './UpcomingWeather'
import { TodayDetails } from './TodayDetails'
import WeatherContext from '../context/WeatherContext'
import { useTemperatureUnit } from '../hooks/useTemperatureUnit'

export const WeatherDashboard = () => {
  const {unit,toggleUnit} = useTemperatureUnit()
  console.log(unit)
  return (
    <main className='w-screen h-[1718px] bg-[#100E1D] font-PrincipalFont text-[#E7E7EB] flex flex-col items-center
    sm:w-full sm:h-screen sm:flex sm:flex-col sm:justify-center sm:items-center sm:gap-4 2xl:gap-16'>
      <div className=' gap-2 font-bold text-lg w-full max-w-[722px] sm:mb-0 2xl:mb-4 justify-end hidden sm:flex sm:flex-row'>
        <button className={`w-10 h-10 rounded-full ${ unit === 'metric'? 'bg-[#E7E7EB] text-[#110E3C] pointer-events-none' : 'bg-[#585676]'} `} onClick={toggleUnit}>°C</button>
        <button className={`w-10 h-10] rounded-full ${ unit === 'imperial'? 'bg-[#E7E7EB] text-[#110E3C] pointer-events-none' : 'bg-[#585676]'} `} onClick={toggleUnit}>°F</button>
      </div>
        <UpcomingWeather></UpcomingWeather>
        <TodayDetails></TodayDetails>
    </main>
    
  )
}
