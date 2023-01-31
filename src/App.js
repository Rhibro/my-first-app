import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
//import Header from "./components/Header";
import About from "./components/About";
//import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  return (
    <BrowserRouter>
    
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
   
    </BrowserRouter>
  );
}

export default App;
