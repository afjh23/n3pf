import React, { useContext } from 'react'
import WeatherContext from '../context/WeatherContext'

export const UpcomingCard = ({data:{date,temp_min,temp_max,icon}}) => {
  const {unit} = useContext(WeatherContext)
  return (
    <li className=' w-[7.5rem] h-44 flex flex-col place-content-between bg-[#1e213a] p-5 items-center'>
        <span className='text-center text-base'>{date}</span>
        <img  className="w-14 h-16" src={`/${icon}.png`}></img>
        <div className='flex flex-row gap-2'>
            <span>{temp_max}{unit==='metric'?'°C':'°F' }</span> <span className='text-[#a09fb1]'>{temp_min}{unit==='metric'?'°C':'°F' }</span>
        </div>
    </li>
  )
}
