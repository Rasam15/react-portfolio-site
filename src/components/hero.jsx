// src/components/Hero.jsx
import './Hero.css';
import { useNavigate } from "react-router-dom"; 

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <h1>Hi, I'm Rasam</h1>
      <p>Frontend Developer | React Enthusiast</p>
      <button onClick={() => navigate("/projects")}>View Projects</button>
    </section>
  );
}


export default Hero;