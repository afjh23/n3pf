import React, { useContext } from 'react'
import useWeatherData from '../hooks/useWeatherData';
import WeatherContext from '../context/WeatherContext';

export const TodayDetails = () => {
    const {city, unit, setCity} = useContext(WeatherContext)
     const {formattedData}= useWeatherData(city,unit)
  const firstData = formattedData && formattedData.length > 0 ? formattedData[0] : {};

  const {w_direction,w_speed,humidity,visibility,pressure} = firstData

    return (
        <div className='px-[23px] mt-0 flex flex-col gap-8
        '>
            <span className=' font-bold text-[24px]'>Today’s Hightlights</span>
            <div className='xsm:grid xsm:grid-cols-2 xsm:gap-8'> 
            <div className='w-[328px] h-[204px] bg-[#1e213a] p-8 flex flex-col items-center place-content-between'>
                <span>Wind status </span>
                <div><span className='text-[64px] font-bold'>{w_speed}</span><span className='text-[36px]'>mph</span></div>

                <div className='flex flex-row justify-center items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className='size-6 svg' style={{ transform: `rotate(${w_direction}deg)` }}>
                        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm.53 5.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.72-1.72v5.69a.75.75 0 0 0 1.5 0v-5.69l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3Z" clipRule="evenodd" />
                    </svg>
                    <span className='text-[14px]'>WSW</span>
                </div>

            </div>
            <div className='w-[328px] h-[204px] bg-[#1e213a] p-8 flex flex-col items-center place-content-between'>
                <span>Humidity</span>
                <div><span className='text-[64px] font-bold'>{humidity}</span><span className='text-[36px]'>%</span></div>

                <div className='flex flex-col  w-[230px] text-[12px] text-[#A09FB1]'>
                    <div className='flex flex-row place-content-between'>
                        <span>0</span>
                        <span>50</span>
                        <span>100</span>
                    </div>
                    <div className='relative bg-[#E7E7EB]  rounded-[80px] h-[8px] overflow-hidden'>
                        <div
                            className='absolute bg-[#FFEC65]   h-6 '
                            style={{ width: `${humidity}%` }}
                        ></div>
                    </div>
                    <span className='text-[12px] text-end'>%</span>
                </div>
            </div>

            <div className='w-[328px] h-[159px] bg-[#1e213a] p-8 flex flex-col items-center place-content-between'>
                <span>Visibility</span>
                <div><span className='text-[64px] font-bold'>{visibility}</span><span className='text-[36px]'> miles</span></div>

            </div>
            <div className='w-[328px] h-[159px] bg-[#1e213a] p-8 flex flex-col items-center place-content-between'>
                <span>Air Pressure </span>
                <div><span className='text-[64px] font-bold'>{pressure}</span><span className='text-[36px]'>mb</span></div>

            </div>
            </div>
           
        </div>
    )
}
