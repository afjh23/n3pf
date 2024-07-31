import React from 'react'
import { UpcomingWeather } from './UpcomingWeather'
import { TodayDetails } from './TodayDetails'

export const WeatherDashboard = () => {
  
  return (
    <main className='w-[375px] h-[1718px] bg-[#100E1D] font-PrincipalFont text-[#E7E7EB]
    xsm:w-full xsm:h-full xsm:flex xsm:flex-col xsm:justify-center xsm:items-center xsm:gap-16'>
        <UpcomingWeather></UpcomingWeather>
        <TodayDetails></TodayDetails>
    </main>
    
  )
}
