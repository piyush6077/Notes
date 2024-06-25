import React, { useState } from 'react';
import { IoMdHome } from "react-icons/io";
import { FaSave } from "react-icons/fa";
import { IoIosSave } from "react-icons/io";
import { CiSquarePlus } from "react-icons/ci";

const Navbar = () => {
  const [Width, setWidth] = useState("6%");
  const [ftext , setfText] = useState("");

  const handleClick = () => {
    setWidth(prevWidth => (prevWidth === "23%" ? "6%" : "23%"));
    setfText(prevText => (prevText === "New Note" ? "" : "New Note"))
  };

  return (
    <div onClick={handleClick} className='flex flex-col items-center bg-gray-950 opacity-95' style={{width: Width , height:'100%'}}>
        <div className='w-full h-[90px] shadow-slate-300 shadow-sm rounded border-slate-50 flex justify-center items-center'>
            <div className='rounded-full w-[40px] justify-center items-center flex h-[40px] bg-yellow-400'>
                <h1 className='text-2xl'>N</h1>
            </div>
        </div>
        <div className='flex flex-col w-full h-[80%] items-center'>
            <div className='flex gap-2 '>
                <CiSquarePlus className='text-white mb-3 mt-8 text-[35px]' />
                {ftext && <div className='flex items-center text-white mb-3 mt-8 text-[18px]'>{ftext}</div>}
            </div>
            <IoMdHome className='text-white my-5 text-4xl' />
            <FaSave className='text-white my-5 text-[28px]' />
            <IoIosSave className='text-white my-5 text-3xl' />
        </div>
    </div>
  );
};

export default Navbar;
