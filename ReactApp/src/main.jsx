import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider} from 'react-router-dom'
import {router} from './RouterProvider.jsx'
import './Global.css'




ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
