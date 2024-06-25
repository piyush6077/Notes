import React from 'react'

export default function Display() {
  return (
    <div className="bg-gray-950 flex justify-center overflow-y-scroll " style={{ width: "95%", height: '100%'}}>
        <div className='w-[94%] pt-14 h-full flex gap-5 flex-wrap'>
            <div className='w-[280px] h-[200px] flex text-5xl  border-[1px] text-white border-slate-100 justify-center items-center rounded-md'>+</div>
        </div>
    </div>
  )
}

