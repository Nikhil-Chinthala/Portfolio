import { Route, Routes, useLocation } from "react-router-dom";
import Education from "./components/education/Education";
import Skill from "./components/skills/Skill";
import Certifications from "./components/certifications/Certifications";
import Contact from "./components/contact/Contact";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Home from "./home/Home";
import Dashboard from "./components/dashboard/Dashboard";
import "./App.css";

const App = () => {
  const location = useLocation();

  return (
    <div className="appContainer">
      {/* Show Navbar only when not on the Dashboard */}
      {location.pathname !== "/" && <Navbar />}

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/home" element={<Home />} />
        <Route path="/education" element={<Education />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skill />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
