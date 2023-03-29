import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Education from "./components/Education";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Bhro from "./components/Bhro";
import Gen from "./components/Gen";
import Spacegarden from "./components/Spacegarden";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {

  return (
    <BrowserRouter>
    
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/education" exact element={<Education />} />
        <Route path="/portfolio" exact element={<Portfolio />} />
        <Route path="/contact" exact element={<Contact />} />
        <Route path="/bhro" exact element={<Bhro />} />
        <Route path="/gen" exact element={<Gen />} />
        <Route path="/spacegarden" exact element={<Spacegarden />} />
      </Routes>
    </div>
   
    </BrowserRouter>
  );
}

export default App;
