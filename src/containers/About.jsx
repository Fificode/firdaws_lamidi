import React from 'react'
// import {Link} from 'react-router-dom'


const About = () => {
  return (
    <div className="bg-grey p-[20px]" id="about">
      
      <h2 className="md:text-[40px] text-[30px] text-light-black text-center my-1 font-[700]">ABOUT ME</h2>
      <div className="flex justify-center"> <p className="border-b-cognac rounded-[2px] border-solid border-b-[3px] w-[200px] md:w-[300px] text-center"></p></div>
      <div  data-aos="zoom-in" data-aos-delay="50"
        data-aos-duration="2000">
      <div className="flex justify-center">
        <main className="text-center tracking-[0.0015em] leading-[29px] text-[18px] md:text-[22px] font-[400] text-light-black p-[5px] md:p-[30px]">
          <p className="py-[15px] md:py-[10px]">I am Firdaws Lamidi, a Front end Developer, Mobile App Developer, and Technical Writer.</p><p className="py-[10px]"> I have five years of experience in Front end development. I am a problem solver, I love to code and simplify technical concepts that some people find difficult to understand.</p><p className="py-[10px]"> I specialize in building amazing user interfaces. My works are exceptional and proffers seamless experience for users both on mobile and web platforms.</p>
          <p className="py-[10px]">I'm super excited you're here. Feel free to <a href="https://wa.me/2349022629258" target='_blank' rel="noreferrer" className="text-cognac underline"> reach out to me </a>with any project ideas you have or to just say hello!</p>
        </main>
      </div>
      </div>
    </div>
  )
}

export default About