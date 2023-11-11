import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Cover from "./Components/Cover";
import References from "./Components/References";
import Footer from "./Components/Footer";
// import Certifications from "./Components/Certifications";
import { useEffect, useState } from "react";

const welcomeText = "Welcome To Kenneth Fisher's Resume";
const animationDelay = 200; // Adjust the delay as needed

function App() {
  const [visibleText, setVisibleText] = useState('');

const WaveText = ({ welcomeText, animationDelay }) => {
  const animateText = (index) => {
    const waveHeight = 5; // Adjust this value to control the wave height
    const waveSpeed = 0.1; // Adjust this value to control the wave speed

    if (index <= welcomeText.length) {
      const offset = waveHeight * Math.sin(waveSpeed * index);
      setTimeout(() => {
        setVisibleText(welcomeText.substring(0, index));
        setOffsetY(offset);
        animateText(index + 1);
      }, animationDelay);
    }
  };

  const [visibleText, setVisibleText] = useState('');
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    animateText(1);
  }, [welcomeText, animationDelay]);

  const style = {
    transform: `translateY(${offsetY}px)`,
  };

  return <div style={style}>{visibleText}</div>;
};

  return (
    <Router>
      <div>
        <span className="welcomeText">{visibleText}</span>
        <Navbar />
        {/* Define your routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cover" element={<Cover />} />
          <Route path="/references" element={<References />} />
          {/* <Route path="/certs" element={<Certifications />} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
