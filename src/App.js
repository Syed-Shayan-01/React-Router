import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Blog from "./components/Blog";

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <div className="text-center mt-52">
              <p className="font-bold text-[3rem]"> Hello Friends</p>
              <p className="text-[2rem] font-[Arial]">
                Welcome to my React Practice App
              </p>
            </div>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
