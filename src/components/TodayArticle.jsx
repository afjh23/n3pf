import React, { useContext } from 'react'
import cloud from '../assets/Cloud-background.png'
import clear from '../assets/Clear.png'
import WeatherContext from '../context/WeatherContext'
import useWeatherData from '../hooks/useWeatherData'
export default function TodayArticle() {
  const {city, unit, setCity} = useContext(WeatherContext)

  const {formattedData}= useWeatherData(city,unit)
  const firstData = formattedData && formattedData.length > 0 ? formattedData[0] : {};

  const {date, temp, description, icon} = firstData


  return (
    
      <div className='w-[375px] h-[810px] py-5 bg-[#1E213A] font-PrincipalFont
    xsm:w-[459px] xsm:h-full xsm:shrink-1'>

{formattedData &&
      <div className='w-[375px] h-[810px] py-5 bg-[#1E213A] font-PrincipalFont xsm:w-[459px] xsm:h-full xsm:shrink-1'>
      {formattedData && formattedData.length > 0 && (
        <>
          <div className='h-[40px] w-full flex justify-between px-[11px] text-white font-PrincipalFont'>
            <button className='w-[161px] h-[40px] bg-[#6e707a]'>Search for places</button>
            <button className='w-[40px] h-[40px] flex justify-center items-center bg-[#6e707a] rounded-full'>x</button>
          </div>
          <div className="h-[326px] relative">
            <img src={cloud} className='h-full object-cover opacity-10 animate-infinite' alt="Cloud background" />
            <img src={`/${icon}.png`} className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[150px] h-[150px] object-fill' alt="Weather icon" />
          </div>
          <div className='flex flex-col items-center font-PrincipalFont text-[#a09fb1] max-h-[359px] h-full place-content-between xsm:max-h-[425px]'>
            <div>
              <span className='font-PrincipalFont text-white text-[144px] font-medium'>{temp}</span>
              <span className='text-[48px] font-medium'>°C</span>
            </div>
            <span className='text-[36px] font-semibold'>{description}</span>
            <div className='flex flex-row justify-center items-center gap-2 font-medium'>
              <span>Today</span>•<span>{date}</span>
            </div>
            <div className='flex flex-row font-semibold'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>
              <span>{city}</span>
            </div>
          </div>
        </>
      )}
    </div>
          }
    </div>

    
  )
}
