import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>} />
          <Route path="/" element={<Home/>} />
          <Route path ="/home" element={<Home/>}/>
          <Route path ="/about" element={<About/>}/>
          <Route path ="/contact" element={<Contact/>}/>
          <Route path ="*" element={<NotFound/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
