import React from 'react'
import ProjectOne from '../components/ProjectOne'
import ProjectTwo from '../components/ProjectTwo'
import sandwichapp from '../assets/sandwichapp.png'
import ridefraser from '../assets/ridefraser.png'
// import vetaapp from '../assets/vetaapp.png'
import nimsa from '../assets/nimsa.jpg'
import quizapp from '../assets/nimelssaDashboard.png'
import wtapp from '../assets/wtapp.png'
// import weatherapp from '../assets/weatherapp.png'
import accessorieshub from '../assets/accessories-hub.png'
import cmjs from '../assets/cmjs.webp'
import weatherarticle from '../assets/weatherarticle.jpg'
import html from '../assets/html.svg'
import css from '../assets/css.svg'
import js from '../assets/js.svg'
import tailwind from '../assets/tailwind.svg'
import typescript from '../assets/typescript.svg'
import nextjs from '../assets/nextjs.svg'
import react from '../assets/react.svg'
import vue from '../assets/vue.png'
import medium from '../assets/medium.svg'
import ArticleOne from '../components/ArticleOne'
import ArticleTwo from '../components/ArticleTwo'
import ArticleThree from '../components/ArticleThree'
// import ProjectThree from '../components/ProjectThree'
// import ProjectFour from '../components/ProjectFour'
import ProjectFive from '../components/ProjectFive'
import ProjectSix from '../components/ProjectSix'
import ProjectSeven from '../components/ProjectSeven'


const Works = () => {
  return (
    <div id="works">
       <h2 className="lg:text-[40px] text-[30px] text-light-black text-center mt-[80px] mb-[5px] font-[700]">WORKS</h2>
        <div className="flex justify-center"> <p className="border-b-cognac border-solid border-b-[3px] w-[150px] md:w-[300px] text-center rounded-[2px]"></p></div>
<div className="mt-[30px]">
<div className='px-[10px]'>
<ProjectSeven  projectimage={ridefraser} header="RideFraser Web App and Merchant Dashboard" stacktwo={tailwind} stackfive={react}  stackthree={js}   explanation="RideFraser helps Nigerian e-commerce businesses automate and simplify their logistics."/>
<ProjectSix projectimage={accessorieshub} header="Accessories Hub Web App" stacktwo={tailwind}  stackthree={typescript}  stacksix={nextjs} explanation="An ecommerce web application built for selling jewelries. It was built with Next Js, Tailwind CSS and Typescript" />
  <ProjectOne projectimage={quizapp} header="NIMELSSA Dashboard"  stackthree={js} stackfour={tailwind} stackfive={vue} explanation="A custom dashboard built for students to take quizzes seamlessly. It was built with Vue Js, Tailwind CSS, and Javascript" />
  <ProjectTwo  projectimage={sandwichapp} header="Sandwich Club App" stackone={html} stackthree={js} stackfour={tailwind} stackfive={react} explanation="A Sandwich app used for ordering sandwiches. It was built with HTML, Javascript, React js and Tailwind CSS" />
  {/* <ProjectThree  projectimage={vetaapp} header="Veta App" stackone={html} stackthree={js} stackfour={react} stacktwo={tailwind} explanation="A Landing page built with HTML, Tailwind CSS, Javascript and React js" /> */}
  {/* <ProjectFour projectimage={weatherapp} header="Weather Forecast App" stackone={html} stacktwo={css} stackthree={js} stackfour={react} explanation="A weather application for getting current weather conditions, hourly and also daily. It was built with HTML, Javascript, React js and Tailwind CSS" /> */}
  <ProjectFive projectimage={nimsa} header="NIMSA Journal App" stackone={html} stacktwo={css} stackthree={js}  explanation="An App for medical students to publish their journals. It was built with HTML, CSS and Javascript " />
  
 </div>
  <div>
   <h2 className="lg:text-[40px] text-[30px] text-light-black text-center mt-[60px] mb-[5px] font-[700]">ARTICLES</h2>
        <div className="flex justify-center mb-[20px]"> <p className="border-b-cognac border-solid border-b-[3px] w-[150px] md:w-[300px] text-center rounded-[2px]"></p></div>
        <div className='px-[10px]'>
     <ArticleOne header="Most common methods of sending and receiving data in Javscript" explanation=" An article explaining the most common methods of sending and receiving data in Javscript published on Medium" articleimage={cmjs} stackone={medium}/>
     <ArticleTwo header="How to build a Weight Tracker app with Vue js and Chart.js" explanation=" An article explaining how to build a weight tracker app with Vue js and Chart.js published on Medium" articleimage={wtapp} stackone={medium}/>
      <ArticleThree header="How to Build a Weather App using React js" explanation=" An article explaining how to build a weather app using React js published on Medium" articleimage={weatherarticle} stackone={medium}/>
     </div>
        </div>
</div>
    </div>
  )
}

export default Works