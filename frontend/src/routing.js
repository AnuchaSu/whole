import React from 'react'
import Home from './view/home'
import Basiccomputing from './view/BasicComputing'
import Linearequations from './view/LinearEquations'
import Interpolation from './view/Interpolation'
import Differentiation from './view/Differentiation'
import Integration from './view/Integration'
import Rootfinding from './view/Rootfinding'

const routes = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "whole",
      element: <Home />,
    },
    {
      path: "basiccomputing",
      element: <Basiccomputing />,
    },
    {
      path: "linearequations",
      element: <Linearequations />,
    },
    {
      path: "interpolation",
      element: <Interpolation />,
    },
    {
      path: "differentiation",
      element: <Differentiation/>,
    },
    {
      path: "integration",
      element: <Integration />,
    },
    {
      path: "rootfinding",
      element: <Rootfinding />,
    },
  ];
  
  export default routes;