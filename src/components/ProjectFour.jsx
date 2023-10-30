import React from 'react'
import github from '../assets/github.svg'


const ProjectFour = ({header, stackone, stacktwo, stackthree, stackfour, explanation, projectimage}) => {
  return (
   <div className="flex flex-col-reverse xl:flex-row-reverse items-center justify-center">
      <div className="flex flex-col items-center m-[10px] flex-[100%] max-w-full" >
        <h1 className="mt-[20px] md:text-[30px] text-[25px] text-light-black text-center font-[500]">{header}</h1>
        <div className="flex my-[10px]">
          <img src={stackone} alt="HTML logo" className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] mx-1" />
          <img src={stacktwo} alt="CSS logo" className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] mx-1" />
          <img src={stackthree} alt="Javascript logo" className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] mx-1" />
          <img src={stackfour} alt="React js logo" className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] mx-1" />
         
        </div>
        <div className="">
          <p className="text-[20px] text-light-black font-[400] text-center">
            {explanation}
          </p>
        </div>
      <div className="flex flex-row justify-center my-[15px] ">
<div className="mx-[10px]">
  <div className="border-[1px] px-[20px] py-[5px] md:py-[10px] rounded-[5px] border-light-black flex justify-between items-center">
    <a href="https://react-tanners-inn.netlify.app/" target='_blank' rel="noreferrer" className="text-center text-[14px] md:text-[17px]">Visit website</a>
     <div className="mx-[3px]"> <svg className="w-[20px] h-[15px] md:w-[25px] md:h-[25px]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
</svg>
</div>
     
  </div>
 
</div>
<div className="mx-[10px]">
  <div className="border-[1px] px-[20px] py-[5px] md:py-[10px] rounded-[5px] border-light-black flex justify-between items-center">
  <a href="https://github.com/Fificode/react-tanners-inn-app" className="text-center text-[14px] md:text-[17px]">View code</a>
  <img src={github} alt="Github icon" className="fill-black mx-[3px] w-[20px] h-[20px] md:w-[25px] md:h-[25px]" />
  </div>
</div>
        </div>
      </div>
      <div className="m-[10px] flex justify-center flex-[100%] max-w-full">
        <img src={projectimage} alt="Tanner's Inn website landing page" className="w-[300px] md:w-[500px] h-[100%] rounded-[5px]" />
      </div>
    </div>
  
  )
}

export default ProjectFour