import React from 'react'
import {
    createBrowserRouter,
    RouterProvider
} from 'react-router-dom'
import MainUser from './User/MainUser.jsx'
import Home from './User/Pages/Home/Home.jsx'
import Login from './User/Pages/Login/Login.jsx'
import SignUp from './User/Pages/SignUp/SignUp.jsx'


export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainUser />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/Login',
                element: <Login />
            },
            {
                path: '/SignUp',
                element: <SignUp />
            }
        ]
    }
])

