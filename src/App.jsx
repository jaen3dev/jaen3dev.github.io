import React from "react";
import { BrowserRouter } from "react-router-dom";

import TransitionComponent from "./TransitionComponent";
import Navbar from './components/Navbar'
import data from './assets/data/codeProjects.json';



function App() {

  // console.log(data)

  return (
    <BrowserRouter>
      <Navbar />
      <TransitionComponent />
    </BrowserRouter>
  )
}

export default App