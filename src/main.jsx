import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import MainLayout from './layout/MainLayout';
import Home from './pages/Home/Home';
import Project1 from './components/Project1/Project1';
import Project2 from './components/Project2/Project2';
import Project3 from './components/Project3/Project3';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/project-one',
        element: <Project1 />
      },
      {
        path: '/project-two',
        element: <Project2 />
      },
      {
        path: '/project-three',
        element: <Project3 />
      },
    ]
  },
]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
