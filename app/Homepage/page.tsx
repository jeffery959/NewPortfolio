import React from 'react'
import Navigator from '../Components/Navigation/Navigator'
export default function HomePage () {
  return (
    <main className='w-full  md:px-96   py-4  px-4  flex items-center justify-center  flex-col gap-7 '>
      <img src="Images/Port.png" className='rounded-full' width={360} alt="" />

      <div className='border p-4'>

   
   <p className='text-center '>Hi, I am Jeffrey, a Student software engineer at Brooklyn college pursing a Computer science degree. I have five years of personal experince building projects with Html,Css and <b>Javascript</b>, and one year of experince in building personal projects in <b>React.js</b> and <b>Next.js</b> combined. While I enjoyed the phase of learning about web development, my interest has recently grown more on <b>
    C++</b>.I currently have 4 months of experince in C++ and am eager to grow . I also Know some Java. My plan is to keep building website with the existing knowledge i have in webdev while focusing on learning C++ more.
 </p>

      </div>
    </main>
  )
}
