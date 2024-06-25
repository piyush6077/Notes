import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Navbar  from './component/Navbar';
import Display from './component/Display';
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div className='flex w-[100vw] h-[100vh]'>
        <Navbar />
        <Display />
      </div>
    ),
    errorElement: <div>404 ERROR PAGE</div>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
