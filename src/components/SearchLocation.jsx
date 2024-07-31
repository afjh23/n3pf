import React from 'react'
const arr = ["London","Barcelona","Long Beach"]
export const SearchLocation = () => {
  return (
    <div className='w-[375px] py-[60px] px-[13px] bg-[#1E213A]  text-[#ededed]'>
        <div className='flex flex-row h-[48px] place-content-between'>
            <div className='relative group'>
            <input type="search" className='w-[252px] h-[48px] px-[12px] bg-transparent border border-[#E7E7EB]' placeholder='search location'></input>
            </div>
            <button className='w-[86px] bg-[#3C47E9]'>Search</button>
        </div>
        <ul className='py-[38px] flex flex-col gap-4'>
            {
                arr.map(x =>
                    <li className='w-[351px] h-[64px] px-[12px] flex items-center hover:border hover:border-[#616475]'><span>{x}</span></li>
                )
            }
        </ul>
    </div>
  )
}
