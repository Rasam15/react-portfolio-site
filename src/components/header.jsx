// src/components/Header.jsx
import './Header.css';

function Header() {
  return (
    <header className="site-header">
      <h1>My Website</h1>
      <nav>
        <a href="/">Home</a>
  <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
