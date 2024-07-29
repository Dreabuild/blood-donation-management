import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Saifa from "./components/Saifa";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const App: React.FC = () => {
  useEffect(() => {
    AOS.init({ disable: "mobile" });
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/saifa" element={<Saifa />} />
      </Routes>
    </Router>
  );
};

export default App;
