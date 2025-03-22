import React from "react";
import { FaGithub } from "react-icons/fa";

const Project = ({
  header,
  stacks,
  explanation,
  projectimage,
  videoLink,
websiteLink,
  githubLink,
  className

}) => {
  return (
    <div className={`flex flex-col-reverse justify-center items-center my-[40px] ${className}`}>
      <div className="flex flex-col items-center mx-[10px] my-[5px] flex-[100%] max-w-full">
        <h1 className="mt-[20px] md:text-[30px] text-[25px] text-light-black text-center  font-[500]">
          {header}
        </h1>
        <div className="flex my-[10px]">
          {stacks.map((stack, index) => (
            <img
              key={index}
              src={stack}
              alt={`${stack} logo`}
              className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] mx-1"
            />
          ))}
        </div>
        <div className="my-[5px]">
          <p className="text-[20px] text-light-black font-[400] text-center">
            {explanation}
          </p>
        </div>
        <div className="flex flex-row justify-center my-[15px] ">
          {githubLink && (
            <div className="mx-[10px]">
              <div className="border-[1px] px-[20px] py-[5px] md:py-[10px] rounded-[5px] border-light-black ">
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noreferrer"
                  className="text-center text-[14px] md:text-[17px] flex justify-center items-center gap-2"
                >
                  View code
               <FaGithub   className="text-black mx-[3px] w-[20px] h-[20px] md:w-[25px] md:h-[25px]"/>
               </a>
              </div>
            </div>
          )}
{websiteLink && (
  <div className="mx-[10px]">
  <div className="border-[1px] px-[20px] py-[5px] md:py-[10px] rounded-[5px] border-light-black ">
    <a href={websiteLink} target='_blank' rel="noreferrer" className="text-center text-[14px] md:text-[17px] flex justify-center gap-2 items-center">Visit website
     <div className="mx-[3px]"> <svg className="w-[20px] h-[15px] md:w-[25px] md:h-[25px]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
</svg>
</div>
     </a>
  </div>
 
</div>
)}
          {videoLink && (
            <div className="mx-[10px]">
              <div className="border-[1px] px-[20px] py-[5px] md:py-[10px] rounded-[5px] border-light-black ">
                <a
                  href={videoLink}
                  target="_blank"
                  rel="noreferrer"
                  className="text-center text-[14px] md:text-[17px] flex justify-center gap-2 items-center"
                >
                  Watch Video
                

                <div className="mx-[3px]">
                
                  <svg
                    className="w-[20px] h-[15px] md:w-[25px] md:h-[25px]"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </div>
</a>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="mx-[10px] my-[8px] md:m-[10px] flex justify-center flex-[100%] max-w-full ">
        <img
          src={projectimage}
          alt={`${projectimage}`}
          className="w-[300px] md:w-[500px] h-[100%] rounded-[5px] border border-grey shadow-md"
        />
      </div>
    </div>
  );
};

export default Project;
