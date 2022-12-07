import React from 'react'

import kiko1 from '../photo/cf.png'
import kiko2 from '../photo/e3.png'
import kiko3 from '../photo/e1.png'

import kiko9 from '../photo/e1.png'

export default function Portfliipp() {
    const porflios=[{
                id:1,
                src:kiko2,
                link:"https://github.com/Hounaida-elghannamii?tab=repositories",
                nom:"Game Developer (Project Graduation)",
                },
                {
                    id:2,
                    src:kiko3,
            link:"https://github.com/Hounaida-elghannamii/CRM_APP",
            nom:"Mobile Developer",
                    },
                    {
                        id:3,
                       
                        src:kiko9,
                        link:"https://github.com/Hounaida-elghannamii/Robotics_WorkShop",
                        
                        nom:"Project Manager",
                        },
                        
                           
                                    
                                        
                                           
                                        
                        
    ]
  return (
    <div name="experience" className='bg-gradient-to-b from-black to-gray-800 w-full  text-white md:h-screen '>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full  '>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Experience</p>
                <p className='py-6'>Check out of my internship experience  :</p>
               
            </div>
           
            
        <div className='grid sm:grid-cols-3 md:grid-cols-2 gap-3 px-4 sm:px-0'>
            {porflios.map(({id,src,link,nom})=>(
            <div  key={id} className='shadow-md shadow-gray-800 rounded-lg w-200 mx-2'>
                <img src={src} alt='' className='rounded-md duration-200 hover:scale-105 w-50 mx-auto'/>
                <div className='flex items-center justify-center'>
                    <button className=' px-4 py-2 m-2 duration-200 hover:scale-105'><a href={link}>{nom}</a></button>
                    
                </div>
            </div>
                ))
               }
                
            </div>
        </div>
    </div>
  )
}
