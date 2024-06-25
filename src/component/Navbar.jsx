import React, { useState } from 'react';
import { FaSave } from "react-icons/fa";
import { IoIosSave } from "react-icons/io";
import { CiSquarePlus } from "react-icons/ci";
import { IoSearch } from "react-icons/io5";

const Navbar = () => {
  const [Width, setWidth] = useState("6%");
  const [ftext , setfText] = useState("");
  const [stext , setsText] = useState("");
  const [ttext , settText] = useState("");
  const [fotext , setfoText] = useState("");

  const handleClick = () => {
    setWidth(prevWidth => (prevWidth === "18%" ? "6%" : "18%"));
    setfText(prevText => (prevText === "New Note" ? "" : "New Note"))
    setsText(prevText => (prevText === "Search" ? "" : "Search"))
    settText(prevText => (prevText === "Save" ? "" : "Save"))
    setfoText(prevText => (prevText === "Saved Files" ? "" : "Saved Files"))
  };

  return (
    <div onClick={handleClick} className='flex flex-col items-center bg-gray-950 opacity-95' style={{width: Width , height:'100%'}}>
        <div className='w-full h-[90px] shadow-slate-300 shadow-sm rounded border-slate-50 flex justify-center items-center'>
            <div className='rounded-full w-[40px] justify-center items-center flex h-[40px] bg-yellow-400'>
                <h1 className='text-2xl'>N</h1>
            </div>
        </div>
        <div className='flex justify-content'>
            <div className='flex flex-col w-full h-[80%]'>
                <div className='flex gap-3 w-full '>
                    <CiSquarePlus className='text-white mb-3 mt-8 text-[35px]' />
                    {ftext && <div className='flex text-white mb-3 mt-8 text-[18px]'>{ftext}</div>}
                </div>
                <div className='flex gap-3 items-center  '>
                    <IoSearch className='text-white  my-5 text-3xl' />
                    {stext && <div className='flex item-center text-white text-[18px]'>{stext}</div>}
                </div>
                <div className='flex gap-3 '>
                    <FaSave className='text-white my-5 text-[28px]' />
                    {ttext && <div className='flex items-center text-white text-[18px]'>{ttext}</div>}
                </div>
                <div className='flex gap-3 '>
                    <IoIosSave className='text-white my-5 text-3xl' />
                    {fotext && <div className='flex items-center text-white text-[18px]'>{fotext}</div>}
                </div>
            </div>
        </div>
    </div>
  );
};

export default Navbar;
