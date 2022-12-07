import React from 'react'
import kiko from '../photo/bb/f1.png'
import kiko1 from '../photo/bb/f2.png'
import kiko2 from '../photo/bb/f3.png'
import kiko3 from '../photo/bb/f4.png'
import kiko4 from '../photo/bb/f5.png'
import kiko5 from '../photo/bb/f7.png'
import kiko6 from '../photo/bb/f8.png'
import kiko7 from '../photo/bb/f9.png'
import kiko8 from '../photo/bb/f6.png'
import kiko9 from '../photo/bb/f11.png'
import kiko10 from '../photo/bb/f12.png'
export default function Portflii() {
    const porflios=[{
        
       
            id:1,
            src:kiko1,
            link:"https://github.com/Hounaida-elghannamii/WorldTime",
            },
            {
                id:2,
                src:kiko2,
                link:"https://github.com/Hounaida-elghannamii/Mobile-app-for-restaurant-management",
                },
                {
                    id:3,
                    src:kiko3,
                    link:"https://github.com/Hounaida-elghannamii/CRM_APP",
                    },
                    
                        {
                            id:4,
                            
                            src:kiko8,
                                    link:"https://github.com/Hounaida-elghannamii/FMA",
                            },
                            {
                            id:5,
                            src:kiko6,
                            link:"https://github.com/Hounaida-elghannamii/Labyrinthe",
                            },
                            {
                                id:6,
                                src:kiko7,
                                link:"https://github.com/Hounaida-elghannamii/Robot",
                                },
                                {
                                    id:7,
                                    src:kiko5,
                            link:"https://github.com/Hounaida-elghannamii/Drog_and_Drap",
                                    },
                                    
                                        
                                           
                                        
                        
    ]
  return (
    <div name="projects" className='bg-gradient-to-b from-gray-800 to-black w-full  text-white md:h-screen '>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full  '>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500 ' >Projects</p>
                <p className='py-2'>Check out some of my work right here :</p>
            </div>
           
            
        <div className='grid sm:grid-cols-3 md:grid-cols-4 gap-3 px-4 sm:px-0'>
            {porflios.map(({id,src,link})=>(
            <div  key={id} className='shadow-md shadow-gray-500 rounded-lg w-50 mx-auto'>
                <img src={src} alt='' className='rounded-md duration-200 hover:scale-105 w-50 mx-auto'/>
                <div className='flex items-center justify-center'>
                    <button className=' px-4 py-2 m-2 duration-200 hover:scale-105'><a href={link}>See more</a></button>
                    
                </div>
            </div>
                ))
               }
                
            </div>
        </div>
    </div>
  )
}
