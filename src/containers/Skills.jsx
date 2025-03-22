import React from "react";
import { BorderTrail } from "../components/motion-primitives/border-trail";

const Skills = () => {
  const data = [
    { id: 1, skill: "HTML" },
    { id: 2, skill: "CSS" },
    { id: 3, skill: "Javascript" },
    { id: 4, skill: "Typescript" },
    { id: 5, skill: "React Js" },
    { id: 6, skill: "Vue Js" },
    { id: 7, skill: "Next Js" },
    { id: 8, skill: "Tailwind CSS" },
    { id: 9, skill: "React Native" },

  ];
  return (
    <div id="skills" className="px-6">
      <h2 className="md:text-[40px] text-[30px] text-light-black text-center mt-[40px] mb-[5px] font-[700]">
        SKILLS
      </h2>
      <div className="flex justify-center">
        {" "}
        <p className="border-b-cognac border-solid border-b-[3px] w-[150px] md:w-[300px] text-center rounded-[2px]"></p>
      </div>
      <div className="mt-[30px] mb-[20px] px-[10px] flex flex-col items-center justify-center xl:flex-row flex-wrap">
      {data.map((item) => (
        <div key={item.id} className="border-2 my-[20px] rounded-[5px] border-[#a49cac] w-auto px-[40px] py-[5px] mx-[10px] relative h-auto  overflow-hidden outline-none  ">
        <BorderTrail
       style={{
          boxShadow:
            '0px 0px 60px 30px #f00, 0 0 100px 60px #e3b, 0 0 140px 90px #500',
        }}
        
      />
          <p className="text-center text-[17px] font-[500] text-light-black uppercase">
           {item.skill}
          </p>
        
        </div>
      ))}
      
      </div>
    </div>
  );
};

export default Skills;
