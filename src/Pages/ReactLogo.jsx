import React from 'react';
import { DiGit, DiJava, DiJavascript1, DiNodejs, DiReact, } from "react-icons/di";
import { NavLink, Outlet } from 'react-router-dom';

const ReactLogo = () => {
  return (
    <div className='grid grid-cols-4 space-y-3 space-x-4 place-items-center py-4'>
      <h1 className='col-span-4 text-2xl font-bold text-center '>Technologies I Use</h1>

      <div className='text-[10rem] md:[8rem] sm:col-span-2 '>

        <NavLink to='react-class'> <DiReact />
        </NavLink></div>
      <div className='text-[10rem] md:[8rem] sm:col-span-2 '>
        <NavLink to='react-class'> <DiJavascript1 /></NavLink></div>
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
