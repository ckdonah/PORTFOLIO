import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import AboutPage from "./components/AboutPage/AboutPage";
import Projects from "./components/Project/Projects"; // Importing Projects Page
import Footer from "./components/Footer/Footer";
import "./index.css";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/work" element={<Projects />} /> {/* Projects Route */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
