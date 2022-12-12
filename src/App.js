import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
    <div>
      <Header />
    </div>
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" exact element={<About />} />
      </Routes>
    </div>
    <div>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
