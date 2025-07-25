import './Projects.css';
import { Link } from 'react-router-dom';

function Projects() {
  const projects = [
    {
      id: 1,
      title: "To-Do List App",
      image: "src/assets/Screenshot_todo.jpg", 
      github: "https://github.com/yourusername/todo-app"
    },
    {
      id: 2,
      title: "Calculator",
      image: "src/assets/Screenshot_Calculator.png",
      github: "https://github.com/yourusername/weather-app"
    }
 ,
   {
      id: 3,
      title: "Tic Tac Toe",
      image: "src/assets/Screenshot.png",
      github: "https://github.com/yourusername/weather-app"
    }
 ,
 
 {
      id: 4,
      title: "Book Manager",
      image: "src/assets/Screenshotbook.png",
      github: "https://github.com/yourusername/weather-app"
    }
 
 

 
  ];

  return (
    <div className="projects-container">
      <h1>My Projects</h1>
      
      <div className="projects-grid">
        {projects.map(project => (
          <div className="project-card" key={project.id}>
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.github} target="_blank" rel="noreferrer">View Code</a>
          </div>
        ))}
      </div>

      <Link to="/"><button className="back-button">⬅ Back to Home</button></Link>
    </div>
  );
}

export default Projects;
