import React from 'react'
import htmlk from '../photo/bb/htt.png'
import htmlk1 from '../photo/bb/cscs.png'
import htmlk2 from '../photo/bb/ans.png'
import htmlk3 from '../photo/bb/uu.png'
import htmlk4 from '../photo/bb/cv.png'
import htmlk5 from '../photo/bb/dart.png'
import htmlk6 from '../photo/bb/fire.png'
import htmlk7 from '../photo/bb/fl.png'
import htmlk8 from '../photo/bb/java.png'
import htmlk9 from '../photo/bb/js.png'
import htmlk10 from '../photo/bb/laravel.png'
import htmlk11 from '../photo/bb/monogodb.png'
import htmlk12 from '../photo/bb/aaa.png'
import htmlk13 from '../photo/bb/nodej.png'
import htmlk14 from '../photo/bb/php.png'
import htmlk15 from '../photo/bb/phython.png'
import htmlk16 from '../photo/bb/rect.png'
import htmlk17 from '../photo/bb/sd.png'
import htmlk18 from '../photo/bb/sk.png'
import htmlk19 from '../photo/bb/sp.png'
import htmlk20 from '../photo/bb/un.jpg'
import htmlk21 from '../photo/bb/vv.png'
import htmlk22 from '../photo/bb/pg.png'


export default function () {
    const techs=[{
        
        id:1,
        src:htmlk,
        title:'HTML',
        style:'shadow-orange-500',
        },
        {
            id:2,
            src:htmlk1,
            title:'CSS',
            style:'shadow-blue-500',
            },
            {
                id:3,
                src:htmlk2,
                title:'Android Studio',
                style:'shadow-green-500',
                },
                {
                    id:4,
                    src:htmlk3,
                    title:'C#',
                    style:'shadow-purple-500',
                    },
                    {
                        id:5,
                        src:htmlk4,
                        title:'C++',
                        style:'shadow-blue-500',
                        },
                        {
                            id:6,
                            src:htmlk5,
                            title:'Dart',
                            style:'shadow-blue-500',
                            },
                            {
                            id:7,
                            src:htmlk6,
                            title:'Firebase',
                            style:'shadow-orange-500',
                            },
                            {
                                id:8,
                                src:htmlk7,
                                title:'Flutter',
                                style:'shadow-blue-500',
                                },
                                {
                                    id:9,
                                    src:htmlk8,
                                    title:'Java',
                                    style:'shadow-red-500',
                                    },
                                    {
                                        id:10,
                                        src:htmlk9,
                                        title:'JavaScript',
                                        style:'shadow-orange-500',
                                        },
                                        {
                                            id:11,
                                            src:htmlk10,
                                            title:'Laravel',
                                            style:'shadow-red-500',
                                            },
                                            {
                                                id:12,
                                                src:htmlk11,
                                                title:'MonogoDB',
                                                style:'shadow-green-500',
                                                },
                                                {
                                                    id:13,
                                                    src:htmlk12,
                                                    title:'MySql',
                                                    style:'shadow-blue-500',
                                                    },
                                                    {
                                                        id:14,
                                                        src:htmlk13,
                                                        title:'Node.JS',
                                                        style:'shadow-green-500',
                                                        },
                                                        {
                                                            id:15,
                                                            src:htmlk14,
                                                            title:'PHP',
                                                            style:'shadow-purple-500',
                                                            },
                                                            {
                                                                id:16,
                                                                src:htmlk15,
                                                                title:'Python',
                                                                style:'shadow-yellow-500',
                                                                },
                                                                {
                                                                    id:17,
                                                                    src:htmlk16,
                                                                    title:'React',
                                                                    style:'shadow-blue-500',
                                                                    },
                                                                    {
                                                                        id:18,
                                                                        src:htmlk17,
                                                                        title:'Visual Studio',
                                                                        style:'shadow-blue-500',
                                                                        },
                                                                        {
                                                                            id:19,
                                                                            src:htmlk18,
                                                                            title:'Socket.IO',
                                                                            style:'shadow-white',
                                                                            },
                                                                            {
                                                                                id:20,
                                                                                src:htmlk19,
                                                                                title:'Spring Boot',
                                                                                style:'shadow-green-500',
                                                                                },
                                                                                {
                                                                                    id:21,
                                                                                    src:htmlk20,
                                                                                    title:'Unity',
                                                                                    style:'shadow-white',
                                                                                    },
                                                                                    {
                                                                                        id:22,
                                                                                        src:htmlk21,
                                                                                        title:'Vue.JS',
                                                                                        style:'shadow-green-500',
                                                                                        },
                                                                                        {
                                                                                            id:23,
                                                                                            src:htmlk22,
                                                                                            title:'PostgreSQL',
                                                                                            style:'shadow-blue-500',
                                                                                            },
    
                            
                        
    ]
  return (
    <div name='skills' className='bg-gradient-to-b  from-black to-gray-800 w-full md:h-screen '>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full  text-white'>
            <div>
                <p className='text-4xl font-bold border-b-4 border-gray-500 p-1  inline'>Skills</p>
                <p className='py-3'>They are the Technologies I've worked with :</p>
            </div>
           
            <div className='w-full grid grid-cols-1 sm:grid-cols-8 gap-6 text-center py-8 px-12 sm:px-0'>
            {techs.map(({id,src,title,style})=>(


<div key={id} className={'shadow-md hover:scale-105 duration-500 py-2 rounded-lg'+' '+style}>
                    <img src={src} alt='' className='w-20 mx-auto'/>
                    <p className='mt-4'>{title}</p>
                </div>

)


)}
                
            </div>
        </div>
        </div>
    
  )
}
