import React from 'react';
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <><div className='flex flex-row justify-around  bg-black text-white py-4 px-7 space-x-5 shadow-md'>
      <div className=' 
       flex flex-row space-x-96 '>

        <h1 className='text-white'>
          <NavLink to='/'>Header</NavLink></h1>
        <ul className='text-white flex space-x-5 sm:hidden'>
          <li><NavLink to='/AboutPage'>About us</NavLink></li>
          <li><NavLink to='/Contact'>Tiny Project</NavLink></li>
          <li><NavLink to='/Sample'>Tiny Project</NavLink></li>
        </ul>
      </div>
      <h1>Search button</h1>
    </div>
    </>
  );
}

export default Header;
