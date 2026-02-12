'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { linkBase,pages } from './Navigation_Data';
import { usePathname,useParams} from 'next/navigation';
import { useState } from 'react';
import { projects } from './Navigation_Data';
import next from 'next';


const Navigator = () => {
    
    const router = useRouter();
   
    let pathname = usePathname().replace("/","");
    let isFirstElement =pathname===pages[0]+"page";
    let isOutOfBounds =pathname===pages[pages.length-1]+"page";
    const params = useParams<{ Id: string;}>()

   

    







//not fully implemented yet.
const handleNavigation = (direction:"next" | "prev") => {
  
    const id = params.Id ? parseInt(params.Id, 10) : 1;
  const nextIdValue = direction === 'next' ? id + 1 : id - 1;
  
  const isProjectPage = pathname.includes("Projectspage");
  const isHomePage = pathname.includes("Homepage");
  const isAboutPage = pathname.includes("Aboutpage");
 
  if(isHomePage && direction==="next"){
     router.push(`${linkBase}Projectspage/1`);
     return;
  }

  if(isAboutPage && direction==="prev"){
    router.push(`${linkBase}Projectspage/`+projects.length);
    return;
  }



  if (isProjectPage) {


    router.push(`${linkBase}Projectspage/${nextIdValue}`);
    if (nextIdValue < 1) {
      router.push(`${linkBase}Homepage`);
      return;
    }
    else if (nextIdValue > projects.length) {
      router.push(`${linkBase}Aboutpage`);
      return;
    }
    return
   
  }

 let nextId = 0;
  if(direction==="next"){
     if( isOutOfBounds ) return;
    nextId = pages.indexOf(pathname.split("page")[0])+1;
    console.log(pathname,nextId);
    
    router.push(`${linkBase}/`+pages[nextId]+"page");;
    return;
  }
  
  if(direction==="prev"){
     if( isFirstElement ) return;
    nextId = pages.indexOf(pathname.split("page")[0])-1;
    console.log(pathname,nextId);
    router.push(`${linkBase}/`+pages[nextId]+"page");;
    return;
  }

}

  return (
    <div className='border flex  justify-between md:justify-center gap-9 *:rounded-md mt-6 *:hover:bg-gray-700 duration-500  *:px-6 *:py-2 text-white'>
     
        <button  className={isFirstElement?'bg-gray-700':'bg-gray-800'}  onClick={()=>handleNavigation("prev")}>Back</button>
        <button className={isOutOfBounds?'bg-gray-700':'bg-gray-800'} onClick={()=>handleNavigation("next")}>Next</button>
       
    </div>
  )
}

export default Navigator;