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
<div className='mx-2 my-[28px] p-[5px] '>
<img src={logo} alt="Logo" className='w-[50px] h-[30px] md:w-[100px] md:h-[50px]'/>
</div>
<ul className='flex large:hidden'>
{navLinks.map((val) => 
        <li onClick={() => setActiveNav(val.id)} key={val.id} className={`
       ${
        activeNav === val.id &&  "active"
       }
  `}> <a href={val.path}>
            {val.title}
          </a></li>
        )}
        <li className='rounded-[10px] px-[20px] py-[5px] text-center border-[2px] border-cognac border-solid mx-[7px] my-[13px]'><a>Resume</a></li>
        </ul>
<div className="lg:hidden" onClick={handleClick}>
    {!nav ? <MenuIcon className='w-10 text-cognac m-2' /> : <XIcon className='w-10 text-cognac m-2'/>}
</div>
</div>

<ul className={!nav ? 'hidden' : 'absolute w-full h-[auto] px-[5px]  bg-almond animate-scale_up_tr md:h-[auto]'}>
  {navLinks.map((val) => 
          <li key={val.id} onClick={() => setActiveNav(val.id)}  className={`w-full
       ${
        activeNav === val.id &&  "active"
       }
  `}><a href={val.path}>
            {val.title}
            </a>
          </li>
        )}
          <li className='rounded-[10px] px-[20px] py-[5px] text-center border-[2px] border-cognac border-solid mx-[5px] my-[20px]'><a>Resume</a></li>
</ul>
    </div> 
  )
}

export default Navbar