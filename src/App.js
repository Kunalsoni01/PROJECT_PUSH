import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './Components/About'
import Nav from "./Components/Nav";
import Contact from "./Components/Contact";
import Blog from "./Components/Blog";
import Home from "./Components/Home";

function App() {
  return (
   
      
     <BrowserRouter>
        <Nav />
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
