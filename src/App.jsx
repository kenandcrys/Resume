import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Cover from "./Components/Cover";
import References from "./Components/References";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <div>
        <h1>Welcome To Kenneth Fisher&rsquo;s Resume</h1>
        <Navbar />
        {/* Define your routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cover" element={<Cover/>} />
          <Route path="/references" element={<References />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
