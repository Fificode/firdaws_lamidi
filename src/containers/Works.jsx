import React from "react";
import Project from "../components/Project";
import wtapp from "../assets/wtapp.png";
import cmjs from "../assets/cmjs.webp";
import weatherarticle from "../assets/weatherarticle.jpg";
import { BsMedium } from "react-icons/bs";
import ArticleOne from "../components/ArticleOne";
import ArticleTwo from "../components/ArticleTwo";
import ArticleThree from "../components/ArticleThree";
import { projects } from "../utilities/projects";

const Works = () => {
  return (
    <div id="works">
      <h2 className="lg:text-[40px] text-[30px] text-light-black text-center mt-[80px] mb-[5px] font-[700]">
        WORKS
      </h2>
      <div className="flex justify-center">
        {" "}
        <p className="border-b-cognac border-solid border-b-[3px] w-[150px] md:w-[300px] text-center rounded-[2px]"></p>
      </div>
      <div className="mt-[30px]">
        <div className="px-[50px]">
          {projects.map((project,index) => (
            <Project
              key={project.id}
              header={project.header}
              explanation={project.explanation}
              projectimage={project.projectImage}
              stacks={project.stack}
              videoLink={project.videoLink}
              githubLink={project.githubLink}
              websiteLink={project.websiteLink}
              className={index % 2 !== 0 ? "xl:flex-row-reverse" : "xl:flex-row"} 
            />
          ))}
        </div>
        <div>
          <h2 className="lg:text-[40px] text-[30px] text-light-black text-center mt-[60px] mb-[5px] font-[700]">
            ARTICLES
          </h2>
          <div className="flex justify-center mb-[20px]">
            {" "}
            <p className="border-b-cognac border-solid border-b-[3px] w-[150px] md:w-[300px] text-center rounded-[2px]"></p>
          </div>
          <div className="px-[50px]">
            <ArticleOne
              header="Most common methods of sending and receiving data in Javscript"
              explanation=" An article explaining the most common methods of sending and receiving data in Javscript published on Medium"
              articleimage={cmjs}
              stackone={BsMedium}
            />
            <ArticleTwo
              header="How to build a Weight Tracker app with Vue js and Chart.js"
              explanation=" An article explaining how to build a weight tracker app with Vue js and Chart.js published on Medium"
              articleimage={wtapp}
              stackone={BsMedium}
            />
            <ArticleThree
              header="How to Build a Weather App using React js"
              explanation=" An article explaining how to build a weather app using React js published on Medium"
              articleimage={weatherarticle}
              stackone={BsMedium}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
