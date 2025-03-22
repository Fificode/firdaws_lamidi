import React, { useState } from "react";
import bitmoji from "../assets/bitmoji.jpg";
import { TextLoop } from "../components/motion-primitives/text-loop";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import { BsMedium } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { Dock, DockIcon, DockItem, DockLabel } from "../components/motion-primitives/dock";


const Header = () => {
  const [direction, setDirection] = useState(-1);
  const socialIcons = [
    {
      title: 'Github',
      icon: (
        <FaGithub className="text-black w-[20px] h-[20px] md:w-[30px] md:h-[30px]" />
      ),
      href: 'https://github.com/Fificode',
    },
    {
      title: 'LinkedIn',
      icon: (
        <FaLinkedin className="text-black w-[20px] h-[20px] md:w-[30px] md:h-[30px]" />
      ),
      href: 'https://www.linkedin.com/in/firdaws-lamidi-840b57200/',
    },
    {
      title: 'Gmail',
      icon: (
        <MdMailOutline className="text-black w-[20px] h-[20px] md:w-[30px] md:h-[30px]" />
      ),
      href: 'mailto:lamidifirdaws@gmail.com',
    },
    {
      title: 'Medium',
      icon: (
        <BsMedium className="text-black w-[20px] h-[20px] md:w-[30px] md:h-[30px]"/>
      ),
      href: 'https://medium.com/@lamidifirdaws',
    },
    {
      title: 'X (formerly known as Twitter)',
      icon: (
        <FaXTwitter className="text-black w-[20px] h-[20px] md:w-[30px] md:h-[30px]"/>
      ),
      href: 'https://twitter.com/_firdawsss',
    },
    {
      title: 'Instagram',
      icon: (
        <FaInstagram className="text-black w-[20px] h-[20px] md:w-[30px] md:h-[30px]" />
      ),
      href: 'https://www.instagram.com/_nanashee/',
    },
  ]

  return (
    <div
      className="flex justify-center items-center px-[10px] h-[680px] lg:h-[650px] bg-white"
      id="home"
    >
      <div className="flex flex-col items-center">
        <img
          src={bitmoji}
          alt="Firdaws Lamidi's Bitmoji"
          className="md:w-[150px] w-[100px] h-[100%] rounded-[50%]"
        />
       
        <h1 className="md:text-[50px] text-[35px] text-light-black text-center my-1 font-[600]">
          Hi, I'm Firdaws Lamidi
        </h1>
        <div className="flex justify-center my-1">
     
     <TextLoop
            className="text-cognac text-[30px] md:text-[40px] text-center"
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 19,
              mass: 1.2,
            }}
            interval={2.5}
            onIndexChange={(index) => {
              setDirection(index === 0 ? -1 : 1);
            }}
            variants={{
              initial: {
                y: -direction * 20,
                rotateX: -direction * 90,
                opacity: 0,
                filter: "blur(4px)",
              },
              animate: {
                y: 0,
                rotateX: 0,
                opacity: 1,
                filter: "blur(0px)",
              },
              exit: {
                y: -direction * 20,
                rotateX: -direction * 90,
                opacity: 0,
                filter: "blur(4px)",
              },
            }}
          >
            <span>Front end Developer</span>
            <span>Technical Writer</span>
          </TextLoop>
         
        </div>
        <div className='md:mt-[20px] relative max-w-full'>
      <Dock className='flex items-center'>
        {socialIcons.map((item) => (
          <a
            key={item.title}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className=""
            >
          <DockItem
            className=''
          >
            <DockLabel>{item.title}</DockLabel>
            <DockIcon>{item.icon}</DockIcon>
          </DockItem>
          </a>
        ))}
      </Dock>
    </div>
        {/* <ul className="flex justify-between mt-[20px] list-none">
          <li className="px-[5px]">
            <a
              href="https://github.com/Fificode"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <FaGithub className="text-black w-[20px] h-[20px] md:w-[30px] md:h-[30px]" />
            </a>
          </li>
        </ul> */}
        <div className="mt-[60px] animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2.5"
            stroke="currentColor"
            className="w-10 h-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Header;
