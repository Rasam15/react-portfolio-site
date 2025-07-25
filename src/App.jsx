// src/App.jsx
import './app.css';
import Header from './components/header';
import Hero from './components/hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import { Routes, Route } from "react-router-dom";
import Footer from './components/Footer';
import Contact from './components/contact';
function App() {
  return (
    <Routes> 
      <Route
        path="/"
        element={
          <div>
            <Header />
            <Hero />
            <About />
            <Skills />
         
      <section style={{ backgroundColor: '#000', padding: '5rem 1rem' }}>
        <Contact />
      </section>


          <Footer />
          </div>
        }
      />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  );
}

export default App;
