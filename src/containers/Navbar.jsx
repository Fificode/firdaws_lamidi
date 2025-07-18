import React, {useState} from 'react'
import {MenuIcon, XIcon} from '@heroicons/react/outline';
import { navLinks } from "../utilities/NavbarDB";
import logo from '../assets/FL-logo.png'
const Navbar = () => {
     const [activeNav, setActiveNav] = useState(0);
    const [nav, setNav] = useState(false);
const handleClick = () => setNav(!nav);
  return (
    <div className='w-screen h-[60px] z-10 fixed top-0 bg-almond'>
        <div className="w-full h-full flex justify-between items-center">
<div className='mx-2 my-[28px] py-[5px] '>
  <a href="#home">
<img src={logo} alt="Logo" className='w-[50px] h-[30px] lg:w-[100px] lg:h-[50px]'/>
</a>
</div>
<ul className='md:flex hidden'>
{navLinks.map((val) => 
        <li onClick={() => setActiveNav(val.id)} key={val.id} className={`px-5 py-5 text-[18px] font-[500] text-light-black hover:text-cognac
       ${
        activeNav === val.id &&  "active"
       }
  `}> <a href={val.path}>
            {val.title}
          </a></li>
        )}
       <a href="https://docs.google.com/document/d/17VWFF5m_cvHnbpJJvJ1w3E_8J6MwqpypmGRMGRuzScE/edit?usp=sharing" target='_blank' rel="noreferrer" className='rounded-[10px] px-[20px] py-[5px] text-center border-[2px] border-cognac border-solid mx-[7px] my-[13px] text-[18px] mr-[30px] font-[500] text-light-black hover:text-cognac hover:border-black'>Resume</a>
        </ul>
<div className="md:hidden pr-4" onClick={handleClick}>
    {!nav ? <MenuIcon className='w-10 text-cognac my-2' /> : <XIcon className='w-10 text-cognac my-2'/>}
</div>
</div>

<ul className={!nav ? 'hidden' : ' w-full h-auto px-[5px] pb-6 bg-almond animate-scale_up_tr md:h-auto md:hidden'}>
  {navLinks.map((val) => 
          <li key={val.id} onClick={()=> { 
            setActiveNav(val.id); 
             setNav(false)}}  className={`w-full px-5 py-5 text-[18px] font-[500] hover:text-cognac text-light-black 
       ${
        
        activeNav === val.id &&  "active" 
         
       }
  `}><a href={val.path}>
            {val.title}
            </a>
          </li>
        )}
       <a href="https://docs.google.com/document/d/1LfuMni1rla4g2CjB17FbPl81H3LUqVzAYXK7gBT6nCg/edit?usp=sharing" target='_blank' rel="noreferrer" className='rounded-[10px] px-[20px] py-[5px] text-center border-[2px] border-cognac border-solid mx-[5px] my-[20px] text-[18px] font-[500] text-light-black hover:text-cognac hover:border-black'>Resume</a>
</ul>
    </div> 
  )
}

export default Navbar