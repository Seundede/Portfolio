import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";

function App() {
  return (
   <div>
     <Routes>
       <Route path='/' element={<Home />} />
       <Route path='/skills' element={<Skills />} />
       <Route path='/projects' element={<Projects />} />
     </Routes>
   </div>
  );
}

export default App;
