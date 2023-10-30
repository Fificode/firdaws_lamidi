import React from 'react'
import Typed from 'react-typed'
import bitmoji from '../assets/bitmoji.jpg'
import github from '../assets/github.svg'
import linkedin from '../assets/linkedin.svg'
import gmail from '../assets/gmail.svg'
import twitter from '../assets/twitter.svg'
import instagram from '../assets/instagram.svg'
import medium from '../assets/medium.svg'

const Header = () => {
  return (
    <div className="flex justify-center items-center px-[10px] h-[680px] lg:h-[650px] bg-white" id="home">
      <div className="flex flex-col items-center">
        <img src={bitmoji} alt="Firdaws Lamidi's Bitmoji" className="md:w-[150px] w-[100px] h-[100%] rounded-[50%]" />
        <h1 className="md:text-[50px] text-[35px] text-light-black text-center my-1 font-[600]">Hi, I'm Firdaws Lamidi</h1>
       <div className="flex justify-center my-1"> <Typed className="text-cognac text-[30px] md:text-[40px] text-center" strings={["Front end Developer.", "Technical Writer.", "Mobile App Developer."]}
        typeSpeed={100} backSpeed={50} loop/></div>
      
<ul className="flex justify-between mt-[20px] list-none">
  <li className="px-[5px]"><a href="https://github.com/Fificode"> <img src={github} alt="Github icon" className="fill-black w-[20px] h-[20px] md:w-[30px] md:h-[30px]" /></a></li>
  <li className="px-[5px]"><a href="https://www.linkedin.com/in/firdaws-lamidi-840b57200/"> <img src={linkedin} alt="Linkedin icon" className="fill-black w-[20px] h-[20px] md:w-[30px] md:h-[30px]" /></a></li>
  <li className="px-[5px]"><a href="mailto:lamidifirdaws@gmail.com"> <img src={gmail} alt="Gmail icon" className="fill-black w-[20px] h-[20px] md:w-[30px] md:h-[30px]" /></a></li>
  <li className="px-[5px]"><a href="https://medium.com/@lamidifirdaws"> <img src={medium} alt="Medium icon" className="fill-black w-[20px] h-[20px] md:w-[30px] md:h-[30px]" /></a></li>
  <li className="px-[5px]"><a href="https://twitter.com/_firdawsss"><img src={twitter} alt="Twitter icon" className="fill-black w-[20px] h-[20px] md:w-[30px] md:h-[30px]" /></a></li>
  <li className="px-[5px]"><a href="https://www.instagram.com/nanashee__/"> <img src={instagram} alt="Instagram icon" className="fill-black w-[20px] h-[20px] md:w-[30px] md:h-[30px]" /></a></li>
 </ul>
 <div className="mt-[60px] animate-bounce"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-10 h-10">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
</svg>
</div>
      </div>
    </div>
  )
}

export default Header