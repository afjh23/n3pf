import React, { useContext } from 'react'
import { UpcomingWeather } from './UpcomingWeather'
import { TodayDetails } from './TodayDetails'
import WeatherContext from '../context/WeatherContext'
import { useTemperatureUnit } from '../hooks/useTemperatureUnit'

export const WeatherDashboard = () => {
  const {unit,toggleUnit} = useTemperatureUnit()
  console.log(unit)
  return (
    <main className='w-[375px] h-[1718px] bg-[#100E1D] font-PrincipalFont text-[#E7E7EB]
    xsm:w-full xsm:h-full xsm:flex xsm:flex-col xsm:justify-center xsm:items-center xsm:gap-16'>
      <div className='flex flex-row gap-2 font-bold text-[18px] w-full max-w-[722px] mb-4 justify-end'>
        <button className={`w-[40px] h-[40px] rounded-full ${ unit === 'metric'? 'bg-[#E7E7EB] text-[#110E3C] pointer-events-none' : 'bg-[#585676]'} `} onClick={toggleUnit}>°C</button>
        <button className={`w-[40px] h-[40px] rounded-full ${ unit === 'imperial'? 'bg-[#E7E7EB] text-[#110E3C] pointer-events-none' : 'bg-[#585676]'} `} onClick={toggleUnit}>°F</button>
      </div>
        <UpcomingWeather></UpcomingWeather>
        <TodayDetails></TodayDetails>
    </main>
    
  )
}
