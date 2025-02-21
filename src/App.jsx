import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutMe from "./pages/AboutMe";
import Skills from "./pages/Skills";
import Home from "./pages/Home";
import Hobbies from "./pages/Hobbies";
import Passions from "./pages/Passions";
import AcademicBackground from "./AcademicBackground";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutMe" element={<AboutMe />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/passions" element={<Passions />} />
        <Route path="/hobbies" element={<Hobbies />} />
        <Route path="/academic-background" element={<AcademicBackground />} />
      </Routes>
    </Router>
  );
}

export default App;
