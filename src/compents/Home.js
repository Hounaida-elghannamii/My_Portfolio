import React from 'react'
import myhon from '../photo/my.png'
import Typical from 'react-typical'

export default function Home() {
  return (
  <div name="home" className='h-screen w-full bg-gradient-to-b from-black to-gray-800 via-black'>
    <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
      <div className='flex flex-col justify-center h-full'>
      {" "}
                        <h6 className='text-2xl sm:text-3xl font-bold text-white'>
                       
      <Typical
        steps={['Hello there 👋 ,', 2000, 'I am Hounaida el ghannami 😃,', 3000,'Full-Stack & Mobile developer 💻,',5000]}
        loop={Infinity}
        wrapper="p"
      />
    
                        </h6>
                        <br/>
          <h2 className='text-4xl sm:text-6xl font-bold text-white'>
            I'm a Software Engineer
          </h2>
          
          <br/>
      <div>
        <button className='text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
        <a
     className="button"
     href="/HounaidaCV.pdf"
     download
     >
    Download CV
  </a>
        
        </button>
        
      </div>
      
      </div>
      <div>
          <img src={myhon} alt="my profile" className='rounded-2xl mx-auto  w-2/3  md:w-full   '/>
      </div>
    </div>
  </div>
  )
}
