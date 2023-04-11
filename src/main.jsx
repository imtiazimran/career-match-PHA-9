import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Home from './components/Home/Home'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Statistics from './components/Statistics/Statistics';
import AppliedJob from './components/Applied_job/AppliedJob'
import Blog from './components/Blog/Blog'
import JobDetails from './components/FeatureJobs/JobDetails'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: '/',
        element:  <Home></Home>
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>
      },
      {
        path: "/appliedJob",
        element: <AppliedJob></AppliedJob>
      },
      {
        path: "/blog",
        element: <Blog></Blog>
      },
      {
        path:"/jobDetails",
        element: <JobDetails></JobDetails>
      },
      {
        path:"/job/:jobId",
        element: <JobDetails></JobDetails>,
        loader: () => fetch('https://api.jsonbin.io/v3/b/643402d4ebd26539d0a821a6')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
