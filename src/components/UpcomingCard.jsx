import React from 'react'

export const UpcomingCard = ({data:{date,temp_min,temp_max,icon}}) => {

  return (
    <li className=' w-[120px] h-[177px] flex flex-col place-content-between bg-[#1e213a] p-[20px] items-center'>
        <span className='text-center text-[15px]'>{date}</span>
        <img  className="w-[56px] h-[62px]" src={`/${icon}.png`}></img>
        <div className='flex flex-row gap-2'>
            <span>{temp_max} °C</span> <span className='text-[#a09fb1]'>{temp_min} °C</span>
        </div>
    </li>
  )
}