import React from 'react'
import react from "../../public/reactjs.png"
import css from "../../public/css.jpg"
import html from "../../public/html.png"
import javascript from "../../public/javascript.png"




function Experience() {
    const cardItem=[
        {
            id:1,
            logo:react,
            name:"React"
        },
        {
            id:2,
            logo:css,
            name:"CSS"
        },
        {
            id:3,
            logo:javascript,
            name:"Javascript"
        },
        {
            id:4,
            logo:html,
            name:"Html"
        }

    ]
  return (
    <div name="Experience" className='max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10 my-16'>
        <div>
            <h1 className='text-3xl font-bold mb-5'>
                Experience
            </h1>
            <p className=' '>Expertise in below Technologies</p>

            <div className='grid grid-cols-2 md:grid-cols-5 gap-7 my-3'>
              {
                cardItem.map(({id,logo,name})=>(
                    <div className='flex-col flex items-center justify-centerc border-[2px] rounded-full md:w-[200px] md:h-[200px] 
                      p-1 cursor-pointer hover:scale-110 duration-300' key={id}>
                       <img src={logo} className='w-[150px]   rounded-full ' />
                       <div>
                        <div >{name}</div>
                       </div>
                      
                    </div>
                ))
              }
            </div>
        </div>
    </div>
  )
}

export default Experience