import React, { useState } from 'react'
const arr = ["London", "Barcelona", "Long Beach"]
export const SearchLocation = ({ updateCity,toggleModal }) => {
    const [arrayCities, setArrayCities] = useState(arr)
    const [valueInput, setValueInput] = useState("")

    const handleValues = (e) =>{
        setValueInput(e.target.value)
        

    }

    const handleSearch = () => {
        if (valueInput && !arrayCities.includes(valueInput)) {
            setArrayCities([...arrayCities, valueInput])
        }
        updateCity(valueInput)
    }

    return (
        <div className='w-[375px] h-[672px] py-[12px] px-[13px] bg-[#1E213A]  text-[#ededed] absolute z-10 top-0 left-0 sm:h-screen'>
            <span className='flex w-[24px] h-[24px] mb-[24px] ml-auto cursor-pointer' onClick={toggleModal}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                    <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                </svg>
            </span>
            <div className='flex flex-row h-[48px] place-content-between'>
                <div className='relative group'>
                    <input type="search" className='w-[252px] h-[48px] px-[12px] bg-transparent border border-[#E7E7EB]' placeholder='search location' value={valueInput} onChange={handleValues}></input>
                </div>
                <button className='w-[86px] bg-[#3C47E9]' onClick={handleSearch}>Search</button>
            </div>
            <ul className='py-[38px] flex flex-col gap-4'>
                {
                    arrayCities.map(x =>
                        <li className='w-[351px] h-[64px] px-[12px] flex items-center hover:border hover:border-[#616475]' onClick={() => updateCity(x) & toggleModal()}><span>{x}</span></li>
                    )
                }
            </ul>
        </div>
    )
}
