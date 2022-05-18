import "./App.css";
import Navbar from "./component/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Education from "./pages/Education";
import Skill from "./pages/Skill";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route  path="/about" element={<About/>}></Route>
          <Route  path="/education" element={<Education/>}></Route>
          <Route  path="/skill" element={<Skill/>}></Route>
          <Route  path="/contact" element={<Contact/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
