import React from "react";
import { BrowserRouter } from "react-router-dom";
import TransitionComponent from "./TransitionComponent";
import Navbar from './components/Navbar'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <TransitionComponent />
    </BrowserRouter>
  )
}

export default App