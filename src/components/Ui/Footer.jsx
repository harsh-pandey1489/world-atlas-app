import React from 'react'
import footerData from '../../Api/footerApi.json';
import { MdPlace } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { TbMail } from "react-icons/tb";
import { NavLink } from 'react-router';
import { FaGithub } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";



const Footer = () => {
  const footerIcon={
    MdPlace: <MdPlace />,
   IoCall:<IoCall />,
    TbMail:<TbMail/>
  }
  return (
    <footer className='main-footer '>

<div className='footer-container'>
   { footerData.map((item ,index)=>(

      <div key={index} className='footer-content' >
        <div className='text-2xl footer-icon'>
          {footerIcon[item.icons]}
        </div>

        <div>
          <p className='text-sm md:text-xl font-bold text-white '>{item.title}</p>
          <p className='text-sm  '>{item.details}</p>
        </div>
       
      </div>
    ))  
  }
  </div> 

  <div className='w-full footer-last'>
   <p className="copyright">© 2025 WorldAtlas.com. All rights reserved.</p>
  
  <div>
       <NavLink to='/'><AiOutlineHome /></NavLink>
        <NavLink to='https://github.com/harsh-pandey1489'><FaGithub /></NavLink>
         <NavLink to='https://www.linkedin.com/in/harsh-pandey-10b670253/'><FaLinkedin /></NavLink>
          <NavLink to='/'><FaInstagram /></NavLink>
  </div>
 

  </div>
     
    </footer>
  )
}

export default Footer
