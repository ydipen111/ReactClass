import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const ReactClass = () => {
  return (
    <div className=' px-7 py-3'>
      <ul className='flex flex-row space-x-7 font-extralight text-xl '>
        <li><NavLink to='usestates'>Hooks</NavLink></li>

        <li><NavLink to='redux'>redux</NavLink></li>
        <li><NavLink to='usestates'>React hooks-UseState</NavLink></li>
      </ul>
      <Outlet />
    </div>
  )
}

export default ReactClass
