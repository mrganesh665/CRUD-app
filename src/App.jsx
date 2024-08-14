import React from 'react'
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Layout from './components/Layout';
import Register from './components/Register';
import Login from './components/Login';
import Profile from './components/Profile';
import AllUsers from './components/AllUsers';
import EditUser from './components/EditUser';


const App = () => {

 let routes = createBrowserRouter([{
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/register",
        element:<Register/>
      },
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:"/profile",
        element:<Profile/>
      },
      {
        path:"/allUsers",
        element: <AllUsers/>
      },
      {
        path:"/editUser/:userID",
        element: <EditUser/>
      }
    ]
  }
])
  return (
    <div>
     <RouterProvider router={routes}>
     <Layout/>
     </RouterProvider>
    </div>
  )
}

export default App