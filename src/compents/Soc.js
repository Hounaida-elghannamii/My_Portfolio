import React from 'react'
import {FaGithub,FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
export default function Soc() {
  const links=[{
id:1,
child:(
  <>
            LinkdIn <FaLinkedin size={30}/>
            </>
),
href:"https://www.linkedin.com/in/el-ghannami-hounaida-a35202216/",
style:'rounded-tr-md'
  },
  {id:2,
    child:(
      <>
                Github <FaGithub size={30}/>
                </>
    ),
    href:"https://github.com/Hounaida-elghannamii/",
    
      },
      {id:3,
        child:(
          <>
                    Gmail <HiOutlineMail size={30}/>
                    </>
        ),
        href:"mailto:hounaida.elghannamii@gmail.com",
    
          },
{id:4,
  child:(
    <>
             Resume <BsFillPersonLinesFill size={30}/>
              </>
  ),
  href:"/HounaidaCV.pdf",

  download:true,
    


  },
]
  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
      <ul>
        {links.map(({id,child,href,style,download})=>(
          <li  key={id} className={'flex justify-between items-center w-40 h-14 px-4 hover:rounded-md duration-300 hover:ml-[-3px] bg-gray-500 ml-[-100px]'
          +' '+style}>
          <a href={href} className='flex justify-between items-center w-full text-white' download={download} target='_blank'  rel="noreferrer">
            {child}
          </a>
        </li>
          
        ))}
        
      </ul>

    </div>
  )
}
