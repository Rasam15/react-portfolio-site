import { p } from 'framer-motion/client';
import './About.css';

import jsIcon from '../assets/js-svgrepo-com.svg';
import reactIcon from '../assets/react-svgrepo-com.svg';
import msIcon from '../assets/microsoft-svgrepo-com.svg';



function About() {

  return (
 

    <>
      <h2 className="about-title">About Me</h2>
 
 
 
 <div className="container">


<div className='text1'>I'm a motivated and versatile technical talent with practical experience
in mechanical workshops and a strong interest in front-end web development.
In recent years, I’ve worked with technical machines in a hands-on environment
and gained solid skills in SolidWorks, industrial drafting, and interpreting technical documents.
Alongside this, I’ve also developed a passion for coding and completed a training program in 
front-end web development using HTML, CSS, and JavaScript. This unique combination of physical 
and digital skills allows me to solve problems from both sides — technical and IT-based.</div>
 
 
<div className='img1'>

      <img height={120} src={jsIcon} alt="JavaScript Icon" />
        <img height={130} src={reactIcon} alt="React Icon" />
        <img height={130} src={msIcon} alt="Microsoft Icon" />


</div>
 
</div>
  </>
  );
}

export default About;
