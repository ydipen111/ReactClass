import React from 'react';
import { DiCss3, DiGit, DiHtml5, DiJava, DiJavascript1, DiNodejs, } from "react-icons/di";
// import { IoLogoHtml5 } from "react-icons/io5";
// import { FaCss3Alt } from "react-icons/fa";
// import { TbBrandJavascript } from "react-icons/tb";
// import { SiMongodb } from "react-icons/si";
// import { SiExpress } from "react-icons/si";
// import { FaGithub } from "react-icons/fa";
import { Outlet } from 'react-router-dom';

const ReactLogo = () => {
  return (
    <div className='grid grid-cols-4 space-y-3 space-x-4 place-items-center py-4'>
      <h1 className='col-span-4 text-2xl font-bold text-center '>Technologies I Use</h1>

      <div className='text-[10rem] md:[8rem] sm:col-span-2 md: hover:scale-95 ease-in-out duration-200 transition-all'> <DiHtml5 /> </div>
      <div className='text-[10rem] md:[8rem] sm:col-span-2 '> <DiCss3 /> </div>
      <div className='text-[10rem] md:[8rem] sm:col-span-2 '> <DiJavascript1 /></div>
      <div className='text-[10rem] sm:col-span-2 md:text-[8rem] '> <DiNodejs /> </div>
      <div className='text-[10rem] sm:col-span-2 md:text-[8rem] '> <DiJava /> </div>
      <div className='text-[10rem] sm:col-span-2 md:text-[8rem] '> <DiGit /> </div>

      <div className='col-span-4 flex justify-center items-center text-white font-semibold h-[350px] w-[350px] bg-black rounded-full sm:h-[280px] sm:w-[280px] '>
        <div className='sm:text-md '>
          <p className='text-md sm:text-sm'> Name : Dipendra Yesmali Magar.</p>
          <p className='text-md sm:text-sm'>Exprenience:2years</p>
          <p className='text-md sm:text-sm'> Frontend:HTML,CSS,JAVASCRIPT,REACT</p>
          <p className='text-md sm:text-sm'>Backend: NODEJS, EXPRESS,MANGODB</p>
          <p className='text-md sm:text-sm'>EMAIL:mgrd08716@gmail.com</p>
          <p className='text-md sm:text-sm'>Tel: +977-9844642298</p>
        </div>

      </div>
      <div className='col-span-4 bg-gray-700 h-20 w-full text-center pt-2 text-lg font-medium sm:text-sm'>
        This is all right copyright and reserved. Developed by dipendra yesmali magar.




      </div>


      <Outlet />
    </div>
  );
}

export default ReactLogo;
