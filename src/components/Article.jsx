import React from "react";
import { Magnetic } from "../components/motion-primitives/magnetic";

const Article = ({
  header,
  articleimage,
  explanation,
  className,
  stack,
  websiteLink,
}) => {
  return (
    <div>
      <div
        className={`flex flex-col-reverse justify-center items-center my-[40px] ${className}`}
      >
        <div className="flex flex-col items-center m-[10px] flex-[100%] max-w-full">
          <h1 className="mt-[20px] md:text-[30px] text-[25px] text-light-black text-center font-[500]">
            {header}
          </h1>
          <div className="flex my-[5px]">
            <div className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] mx-1">
              {stack}
            </div>
          </div>
          <div className="">
            <p className="text-[20px] text-light-black font-[400] text-center">
              {explanation}
            </p>
          </div>
          <div className="flex flex-row justify-center my-[15px] ">
            <Magnetic>
              <div className="border-[1px] px-[20px] py-[5px] md:py-[10px] rounded-[5px] border-light-black flex justify-between items-center">
                <a
                  href={websiteLink}
                  target="_blank"
                  rel="noreferrer"
                  className="text-center text-[14px] md:text-[17px]"
                >
                  View article
                </a>
                <div className="mx-[3px]">
                  {" "}
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
              </div>
            </Magnetic>
          </div>
        </div>
        <div className="m-[10px] flex justify-center flex-[100%] max-w-full">
          <img
            src={articleimage}
            alt="The sky"
            className="w-[300px] md:w-[500px] h-[100%] rounded-[5px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Article;
