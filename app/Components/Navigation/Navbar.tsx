"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { linkBase,pages} from './Navigation_Data';
export default function Navbar() {

  const [toggleMenu,setToggleMenu] = useState(false);
  const changeMenu =()=>{
    setToggleMenu(!toggleMenu);
    console.log(toggleMenu);
  }

  const pages=["Home","Projects","About","Contact"];
  //Contact Credits
  return (
      !toggleMenu?<div className=' py-10 px-10 w-full fixed'>

        <img src="/Icons/menu.png" alt="" width={25} onClick={()=>changeMenu()} />
      </div>:

     <div className={(toggleMenu?"":"hidden")+"z-50 md:w-96 w-full border-r-2 border-gray-300 h-screen pt-10 px-10 fixed bg-white "}
     
     >
        <div className='cursor-pointer' onClick={()=>changeMenu()}>
        <img src="/Icons/close.png" alt="" width={15}  />

        </div>
        <div className='mt-20 flex w-full flex-col justify-between h-10/12'>

        <div className=" *:text-2xl py-4 px-4 border border-gray-500   *:hover:text-white w-full *:duration-300 *:hover:bg-green-200 *:w-full *:text-center *:py-2  items-center text-gray-700   gap-4 flex flex-col justify-between ">
       
       {
       pages.map((item)=>{
        return (
          item==="Projects"?<Link href={linkBase+item+"page/1"} key={item}>{item}</Link>:<Link href={linkBase+item+"page"} key={item}>{item}</Link>
      

        )
       })
      }
        {/* 
        <Link href={""}>Blogs</Link>
         */}
      </div>
      {/*
      <div className='flex w-20 p-2  overflow-hidden rounded-2xl gap-4 border border-gray-500'>
        
         <img src="Icons/moon.png" alt="" className='' width={21} />
         
         <img src={"/Icons/sun.png"} className='cursor-pointer duration-500   ' alt="" width={25}/>
        </div>
      */}
        
        
        
      </div>
        </div>
  )
}
