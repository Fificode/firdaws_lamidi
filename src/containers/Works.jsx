import React from 'react'
import ProjectOne from '../components/ProjectOne'
import ProjectTwo from '../components/ProjectTwo'
import sandwichapp from '../assets/sandwichapp.png'
import vetaapp from '../assets/vetaapp.png'
import nimsa from '../assets/nimsa.jpg'
import tannersapp from '../assets/tannersapp.png'
import weatherapp from '../assets/weatherapp.png'
import weatherarticle from '../assets/weatherarticle.jpg'
import html from '../assets/html.svg'
import css from '../assets/css.svg'
import js from '../assets/js.svg'
import tailwind from '../assets/tailwind.svg'
import react from '../assets/react.svg'
import medium from '../assets/medium.svg'
import Article from '../components/Article'
import ProjectThree from '../components/ProjectThree'
import ProjectFour from '../components/ProjectFour'
import ProjectFive from '../components/ProjectFive'


const Works = () => {
  return (
    <div id="works">
       <h2 className="lg:text-[40px] text-[30px] text-light-black text-center mt-[80px] mb-[5px] font-[700]">WORKS</h2>
        <div className="flex justify-center"> <p className="border-b-cognac border-solid border-b-[3px] w-[150px] md:w-[300px] text-center rounded-[2px]"></p></div>
<div className="mt-[30px]">
  <ProjectOne projectimage={sandwichapp} header="Sandwich Club App" stackone={html} stackthree={js} stackfour={tailwind} stackfive={react} explanation="A Sandwich app used for ordering sandwiches. It was built with HTML, Javascript, React js and Tailwind CSS" />
  <ProjectTwo  projectimage={vetaapp} header="Veta App" stackone={html} stackthree={js} stackfour={react} stackfive={tailwind} explanation="A Landing page built with HTML, Tailwind CSS, Javascript and React js" />
  <ProjectThree projectimage={weatherapp} header="Weather Forecast App" stackone={html} stacktwo={css} stackthree={js} stackfour={react} explanation="A weather application for getting current weather conditions, hourly and also daily. It was built with HTML, Javascript, React js and Tailwind CSS" />
  <ProjectFour projectimage={tannersapp} header="Tanner's Inn App" stackone={html} stacktwo={css} stackthree={js} stackfour={react} explanation="An Inn Application for booking a room. It was built with HTML, CSS, Javascript and React js" />
  <ProjectFive projectimage={nimsa} header="NIMSA Journal App" stackone={html} stacktwo={css} stackthree={js}  explanation="An App for medical students to publish their journals. It was built with HTML, CSS and Javascript " />
 
  <div className="">
   <h2 className="lg:text-[40px] text-[30px] text-light-black text-center mt-[60px] mb-[5px] font-[700]">ARTICLES</h2>
        <div className="flex justify-center"> <p className="border-b-cognac border-solid border-b-[3px] w-[150px] md:w-[300px] text-center rounded-[2px]"></p></div>
     <div className="mt-[30px]">  <Article header="How to Build a Weather App using React js" explanation=" An article explaining how to build a weather app using React js published on Medium" articleimage={weatherarticle} stackone={medium}/></div>
        </div>
</div>
    </div>
  )
}

export default Works