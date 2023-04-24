import './App.css';
import Layout from './components/project-components/layout/Layout';
import ModalContext from './context/context';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import Skills from './pages/skills/index';
import Projects from './pages/projects/Index';
import ContactMe from './pages/contact-me/Index';
import Home from "./pages/home/Home"
import Articles from './pages/articles/Index';



function App() {
  return (
    <ModalContext>
      <Router>
      <Layout>
        <Routes>
          <Route  path="/projects" element={<Projects />} />
          <Route path="skills" element={<Skills />} />
          <Route path="contact" element={<ContactMe/>} />
          <Route path="articles" element={<Articles/>} />
          <Route path="/" element={<Home/>} />
        </Routes>
        </Layout>
      </Router>
  </ModalContext>
  );
}

export default App;
