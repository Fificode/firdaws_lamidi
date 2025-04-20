import React from "react";
import Project from "../components/Project";
import Article from "../components/Article";
import { projects } from "../utilities/projects";
import { articles } from "../utilities/articles";


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
          {articles.map((article, index) =>
            <Article
              header={article.header}
              explanation={article.explanation}
              articleimage={article.articleImage}
              stack={article.stack}
              websiteLink={article.websiteLink}
              className={index % 2 !== 0 ? "xl:flex-row-reverse" : "xl:flex-row"}
            /> 
          )}
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
