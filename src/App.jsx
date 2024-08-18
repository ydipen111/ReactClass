import React from 'react'
import './App.css'
import Home from './Pages/Home.jsx'
import AboutPage from './Pages/AboutPage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Contact from './Pages/Contact.jsx'
import RootLayout from './Pages/RootLayout.jsx'
import Project from './Pages/Project.jsx'
import ReactClass from './Components/MERN/ReactClass.jsx'
import Hooks from './Components/MERN/ReactPart/Hooks.jsx'
import Redux from './Components/MERN/ReactPart/Redux.jsx'

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: 'AboutPage',
          element: <AboutPage />,
        },
        {
          path: 'Contact',
          element: <Contact />
        },
        {
          path: 'class-project',
          element: <Project />
        },
        {
          path: 'react-class',
          element: <ReactClass />,
          children: [
            {
              path: 'usestates',
              element: <Hooks />
            },
            {
              path: 'redux',
              element: <Redux />
            }
          ]
        }
      ]
    }
  ])

  return <RouterProvider router={router} />
}

export default App
