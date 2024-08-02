import React, { useContext, useState } from 'react'
import cloud from '../assets/Cloud-background.png'
import clear from '../assets/Clear.png'
import WeatherContext from '../context/WeatherContext'
import useWeatherData from '../hooks/useWeatherData'
import { SearchLocation } from './SearchLocation'
export default function TodayArticle() {
  const { city, unit, coords, updateCity, updateCoords} = useContext(WeatherContext)
  const [openModal, setOpenModal] = useState(false)
  const { formattedData } = useWeatherData(city, unit)

  const firstData = formattedData && formattedData.length > 0 ? formattedData[0] : {};
  const { date, temp, description, icon, name_city } = firstData

  const toggleModal = () => {
    setOpenModal(!openModal)
  }

  function success(position) {
    console.log("que paso")
    updateCoords(position.coords.latitude, position.coords.longitude)
  


  }

  function error() {
    alert("Sorry, no position available.");
  }

  const options = {
    enableHighAccuracy: true,
    maximumAge: 30000,
    timeout: 27000,
  };



  return (

    <div className='w-screen h-[810px] py-5 bg-[#1E213A] font-PrincipalFont
    sm:w-[459px] sm:h-full sm:shrink-1 relative' >

      {openModal && (
        <SearchLocation updateCity={updateCity} toggleModal={toggleModal}></SearchLocation>
      )}
      {formattedData && formattedData.length > 0 && (
        <>
          <div className='h-[40px] w-full flex justify-between px-[11px] text-white font-PrincipalFont'>
            <button className='w-40 h-10 bg-[#6e707a]' onClick={toggleModal}>Search for places</button>
            <button className='w-10 h-10 flex justify-center items-center bg-[#6e707a] rounded-full' onClick={() => navigator.geolocation.watchPosition(success, error, options)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3.75H6A2.25 2.25 0 0 0 3.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0 1 20.25 6v1.5m0 9V18A2.25 2.25 0 0 1 18 20.25h-1.5m-9 0H6A2.25 2.25 0 0 1 3.75 18v-1.5M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>
            </button>
          </div>
          <div className=" h-80 sm:h-60 2xl:h-80 relative">
            <img src={cloud} className='h-full object-cover opacity-10 animate-infinite' alt="Cloud background" />
            <img src={`/${icon}.png`} className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-36 h-36 object-fill' alt="Weather icon" />
          </div>
          <div className='flex flex-col items-center font-PrincipalFont text-[#a09fb1] max-h-80 h-full place-content-between sm:h-[26.5rem]'>
            <div className='flex items-baseline'>
              <span className='font-PrincipalFont leading-none align-baseline inline-block p-0 text-white text-[9rem] font-medium'>{temp}</span>
              <span className='text-5xl font-medium'>{unit==='metric'? '°C' : '°F'}</span>
            </div>
            <span className='text-4xl font-semibold text-center'>{description}</span>
            <div className='flex flex-row justify-center items-center gap-2 font-medium'>
              <span>Today</span>•<span>{date}</span>
            </div>
            <div className='flex flex-row font-semibold'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>
              <span>{name_city}</span>
            </div>
          </div>
        </>
      )}
    </div>


  )
}
