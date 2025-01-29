import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import backImage from './assets/images/back.jpg';
import './App.css';

function Navbar() {
  return (
    <nav className="navbar" data-aos="fade-down">
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#internships">Internships</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#events">Events attended</a></li>
      </ul>
    </nav>
  );
}

function About() {
  return (
    <section id="about" className="content-section" data-aos="fade-up">
      <h1>Welcome to my Portfolio</h1>
      <p>
        I am currently pursuing ECE 2nd year at SKCET Coimbatore.
        <br />
        My native place is Madurai.
        <br />
        My goal is to become an Embedded System Engineer.
        <br />
        My hobby is playing the piano.
      </p>
    </section>
  );
}

function Skills() {
  const [skills] = useState(["Java", "DSA in C++", "DBMS", "MySQL"]);
  return (
    <section id="skills" className="content-section" data-aos="fade-right">
      <h1>Skills</h1>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

function Internships() {
  return (
    <section id="internships" className="content-section" data-aos="fade-left">
      <h1>Internships Attended</h1>
      <ol>
        <li>4 weeks in Java Programming at Codsoft</li>
      </ol>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="content-section" data-aos="zoom-in">
      <h2>Contact Details</h2>
      <p>
        <strong>Mobile:</strong> +91 9363119154
        <br />
        <strong>Email:</strong> 727723euec117@skcet.ac.in
      </p>
      <h2>Connect with me</h2>
      <a
        href="https://www.linkedin.com/in/mugundha-balaji-265319290/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
          alt="LinkedIn"
          style={{ width: "30px", height: "30px" }}
        />
      </a>
    </section>
  );
}
function Footer() {
  return (
    <footer className="footer" data-aos="fade-up">
      <p>© 2025 Mugundha Balaji. All rights reserved.</p>
    </footer>
  );
}

function Events() {
  return (
    <section id="events" className="content-section" data-aos="fade-up">
      <h2>EVENTS PARTICIPATED</h2>
      <p>
        Participated in SIH hackathon
        <br />
        Participated in MSME hackathon
      </p>
    </section>
  );
}
function Certificates(){
  return(
    <section id="certificates" className="content-section" data-aos="fade-up">
      <h2>Certificates achieved</h2>
      <p>
        <a href="https://olympus.mygreatlearning.com/courses/61717/certificate?pb_id=581"target="_blank">Introduction to Artificial Intelligence</a>
      </p>
    </section>
  )
}
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      once: true, // Animation runs only once
    });
  }, []);

  const appStyle = {
    backgroundImage: `url(${backImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    minHeight: "100vh",
    color: "white",
    padding: "20px",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
  };

  return (
    <div style={appStyle}>
      <Navbar />
      <div className="content-wrapper">
        <About />
        <Skills />
        <Internships />
        <Contact />
        <Events />
        <Certificates Achieved />
      </div>
      <Footer />
    </div>
  );
}

export default App;
