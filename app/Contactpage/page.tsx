import React from 'react'

const page = () => {
  return (
    <div className=' border-2 border-gray-400 p-8'>
         <h1 className='text-4xl font-bold mb-4'>Contact Me</h1>
        <ul>
            <li> <b>Email:</b> <a href="mailto:aaronjeffery529@gmail.com" className='text-green-400 underline'>aaronjeffery529@gmail.com</a></li>
            <li> <b>Phone:</b> <a href="tel:+16466270936" className='text-green-400 underline'>+1(646)-627-0936</a></li>
            <li> <b>LinkedIn:</b> <a href="https://www.linkedin.com/in/jeffery-aaron-a0b077244" target="_blank" rel="noopener noreferrer" className='text-green-400 underline'>www.linkedin.com/in/jeffery-aaron-a0b077244</a></li>
        </ul>
    </div>
  )
}

export default page