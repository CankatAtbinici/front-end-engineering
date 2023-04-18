import './App.css';
import Layout from './components/project-components/layout/Layout';
import ModalContext from './context/context';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";

import Skills from './pages/skills/Index';
import Projects from './pages/projects/Index';
import ContactMe from './pages/contact-me/Index';
import Home from "./pages/home/Home"
import Experience from './pages/experience/Index';



function App() {
  return (
    <ModalContext>
      <Router>
      <Layout>
        <Routes>
          <Route  path="/projects" element={<Projects />} />
          <Route path="skills" element={<Skills />} />
          <Route path="contact" element={<ContactMe/>} />
          <Route path="experience" element={<Experience/>} />
          <Route path="/" element={<Home/>} />
        </Routes>
        </Layout>
      </Router>
  </ModalContext>
  );
}

export default App;
