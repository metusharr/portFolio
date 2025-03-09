import React from 'react'
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoHtml5 } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io";
import { FaGithub } from "react-icons/fa";


import { ReactTyped } from "react-typed";

import pic from "../../public/tuhsar3.jpg"








function home() {
  return ( 
    <>
    <div name="Home" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
        <div className='flex flex-col md:flex-row '>
        <div className='md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1'>
        <span className='text-xl'>Welcome In My Feed </span>
        <div className='flex space-x-1 text-2xl md:text-4xl '>
        <h1>Hello, I'am a</h1>
        {/* <span className='text-red-700 font-bold'>Developer</span> */}
        <ReactTyped
        className='text-red-700 font-bold'
          strings={["Developer","Programmer","Coder"]}
          typeSpeed={40}
          backSpeed={50}
          loop={true}
        />
        </div>
        <br />

        <p className='text-sm md:text-md text-justify'>I am a passionate web developer with expertise in HTML, CSS, JavaScript,
           and React as my primary framework. I specialize in building responsive and modern web applications, leveraging Tailwind CSS 
           for sleek and efficient styling. With a strong foundation in front-end technologies and a keen eye for design, I strive to
           
            create seamless user experiences. Always eager to learn and explore new technologies,
           I continuously improve my skills to stay ahead in the ever-evolving web development landscape.</p>

           <br />
            {/* social media icons */}
            
           <div className='flex items-center justify-between flex-col md:flex-row space-y-6 md:space-y-0'>
           <div className='space-y-2 '>
              <h1 className='font-bold '>
                Available On
                <ul className='flex space-x-5'>
                  <li> <a href="https://www.facebook.com/" target='_blank'><FaSquareFacebook className='text-2xl cursor-pointer'/></a></li>
                  <li> <a href="https://www.linkedin.com/feed/" target='_blank'><FaLinkedin   className='text-2xl cursor-pointer'/></a></li>
                  <li> <a href="https://www.instagram.com/accounts/login/?hl=en" target='_blank'><FaSquareInstagram   className='text-2xl cursor-pointer'/></a></li>
                  <li> <a href="https://github.com/metusharr" target='_blank'><FaGithub    className='text-2xl cursor-pointer'/></a></li>

                </ul>

              </h1>
            </div>
            <div className='space-y-2'>
            <h1 className='font-bold '>
                Currently Working On </h1>
               <div className='flex space-x-5 '> 
               <FaReact className='text-xl md:text-3xl hover:scale-110  duration-200 rounded-full border-[2px]' />
               <IoLogoJavascript className='text-xl md:text-3xl hover:scale-110  duration-200 rounded-full border-[2px]'/>
               <IoLogoHtml5 className='text-xl md:text-3xl hover:scale-110  duration-200 rounded-full border-[2px]'/>
               <IoLogoCss3 className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] '/>


 
               </div>
                  

            </div>
           </div>
        </div>
        <div className='md:w-1/2 md:ml-48 md:mt-20  mt-8 order-1'>
        <img src={pic} className='rounded-full md:w-[400px] md:h-[480px]' 
        alt="" />
        </div>
        </div>
    </div>
    <hr />
    

    

    </>
  )
}

export default home