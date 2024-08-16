import React from 'react'
import { Outlet } from 'react-router-dom'
import Display from './Home/Display'
import ReactLogo from './ReactLogo'


function Home() {
  return (
    <div>
      <Display />
      <ReactLogo />

      <Outlet />

    </div>
  )
}

export default Home
