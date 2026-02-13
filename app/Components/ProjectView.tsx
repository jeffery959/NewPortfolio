'use client'

import { useParams } from "next/navigation";
import {projects} from './Navigation/Navigation_Data';
const ProjectView = () => {
   const params = useParams();
  

const idRaw = Array.isArray(params.Id) ? params.Id[0] : params.Id;
const Item = projects.find(proj => proj.id === parseInt(idRaw || '', 10));


  return (
    <div className='border'>
       
        
        
      
        
<PorfolioCard src={Item?.src || ''} visit={Item?.link || ''} github={Item?.github || ''}/>

    </div>
  )
}


import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const PorfolioCard = ({src,visit,github}:{src:string,visit:string,github:string}) => {
  return (
    
    <div className=" h-72 relative rounded-xl  hover:shadow-2xl shadow-lg duration-500">
    <Image width={400} height={400} quality={100} src={src} className='object-cover w-full h-full ' alt=""/>
    <div className="w-full bg-slate-100 opacity-0 flex justify-center items-center duration-500 hover:opacity-90 z-30 absolute h-full  top-0 flex-col gap-2">
        <Link href={visit} target='_blank'>
      <button  className="border border-gray-600 text-gray-600 py-2 px-4 rounded-3xl hover:border-gray-900  hover:text-black">Visit</button>
        </Link>
        <Link href={github} target='_blank'>
      <button  className="border border-gray-600 text-gray-600 py-2 px-4 rounded-3xl hover:border-gray-900  hover:text-black">Github</button>
        </Link>
    </div>

  </div>
  )
}

export default ProjectView;