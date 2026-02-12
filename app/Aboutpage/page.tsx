import React from 'react'
import Navigator from '../Components/Navigation/Navigator'
const page = () => {
  return (
    <div className='pt-20'>

      <div className='w-full md:w-3/4 lg:w-2/3 xl:w-1/2  flex flex-col  items-start justify-center  mx-auto   '>
      <h1 className='text-4xl font-bold mb-4'>About Me</h1>
      <p className='text-lg mb-6'>
        Hello! I'm Jeffrey Aaron, a passionate software developer with  a foundation in both front-end and back-end technologies, I enjoy problem solving.
      </p>
      <p className='text-lg mb-6'>
        My journey into web development started a few years ago. I have used React.js,Next.js for front-end development, and I have experience working with Node.js and Express for back-end services. But recently, I've been focusing more on C++ to expand my programming Knowledge.
      </p>
      <p className='text-lg mb-6'>
        When I'm not coding, I love exploring new technologies, I'm always eager to take on new challenges and expand my knowledge in the ever-evolving world of web development.  
        </p>
        <p className='text-lg'>
        Feel free to reach out if you'd like to connect or learn more about my work!
      </p>
      </div>
    
    
    </div>
   
    
  )
}

export default page