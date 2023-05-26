import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './css/style.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Hero/>
        <Contact/>
        <Routes>
          {/* <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectDisplay />} />
          <Route path="/experience" element={<Experience />} /> */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}


export default App;
