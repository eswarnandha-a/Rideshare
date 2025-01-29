import React, { useState } from "react";
import "./App.css";
import "./carousel.css";
import "./navbar.css";
import "./gallery.css";
import "./exp.css";
import "./contact.css";
import "./design.css";
import "./projects.css";


function App() {
  const videos = [
    "FITBAE_1.mp4",
    "FITBAE_2.mp4",
    "FITBAE_3.mp4",
    "FITBAE_4.mp4",
    "FITBAE_5.mp4",
    
    
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + videos.length) % videos.length
    );
  };

  const getPositionClass = (index) => {
    const relativeIndex = (index - currentIndex + videos.length) % videos.length;

    switch (relativeIndex) {
      case 0:
        return "front"; // Center video
      case 1:
        return "next"; // Next on the right
      case 2:
        return "next-behind"; // Behind on the right
      case 4:
        return "prev"; // Previous on the left
      case 3:
        return "prev-behind"; // Behind on the left
      default:
        return "hidden"; // Any extras (won't happen with 5 videos)
    }
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Form submitted!\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`);
    // Add your form submission logic here
  };
  
  // State to track the current video index
  const projects = [
    {
      title: "Event Management System",
      description:
        "Created UI design for a college event management website. Collaborated with developers to ensure cohesive, user-friendly navigation. A consultancy project for the college.",
      link: "#",
      image: "./event.webp",
    },
    {
      title: "AlumniHub",
      description:
        "Designed the UI for a website connecting school alumni, fostering networking and engagement. Supports long-term alumni relations with the school. A Project for School in Salem.",
      link: "#",
      image: "./alumni.webp",
    },
    {
      title: "E-commerce Web",
      description:
        "Designed the UI for a fashion e-commerce website, focusing on aesthetic appeal and user-friendly navigation. Ensured a cohesive shopping experience across all pages.",
      link: "#",
      image: "./sokkai.webp",
    },
  ];

  return (
    <div className="App">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo">Eswar Anand</div>
        <ul className="nav-links">
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#gallery">Gallery</a></li>
          
          <li><a href="#tools">Tools</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <header className="hero">
  <div className="hero-background">
    <img src="background.jpg" alt="Background" className="background-img" />
    <div className="overlay"></div>
  </div>

  <div className="hero-content">
    <div className="left-content">
      <h1>
        Hi, I'm <br></br><span>Eswar Anand</span> <br />
        <span className="thin">Designer and Developer</span>
      </h1>
    </div>
  </div>
</header>

     
<section id="experience" className="experience-section">
  <center ><h1 className="wwe">Experience</h1></center>
  <div className="experience-grid">
    <div className="image-container">
      {/* Replace this placeholder with your uploaded image */}
      <img src="removebg.png" alt="Experience" className="experience-image" />
    </div>
    <div className="experience-list">
      <div className="experience-item soulful-box">
        <span className="highlight soulful">SOULFUL AI</span> UI/UX Developer and Branding for a students startup.
      </div>
      <div className="experience-item crea8iv-box">
        <span className="highlight crea8iv">Crea8iv</span> Part-time content manager at a creative startup.
      </div>
      <div className="experience-item professor-box">
        <span className="highlight professor">Program Professor</span> Manages content for a tech YouTube channel .
      </div>
      <div className="experience-item freelance-box">
        <span className="highlight freelance">Freelance Designer</span> Logo creation, banner designs for startups and clubs.
      </div>
      <div className="experience-item ariyatra-box">
        <span className="highlight ariyatra">Ariyatra Tours</span> Creates designs for a travel agency in Coimbatore.
      </div>
      <div className="experience-item edc-box">
        <span className="highlight edc">Media Manager</span> Entrepreneurship Development Cell, Sri Eshwar College.
      </div>
    </div>
  </div>
</section>
      
        
          
<section id="projects" className="projects-section old">
  <center><h2 className="wwf">Projects</h2></center>
  <br></br><br></br>
  <div className="projects-grid old">
    <div className="project-card old">
      <div className="project-image-container old">
        <img src="mobile.webp" alt="Electricity Monitoring App" className="project-image old" />
      </div>
      <div className="project-details old">
        <h3>Electricity Monitoring App</h3>
        <p>Created an app design and ML model to predict electricity and maintain electricity consumption based on planners.</p>
      </div>
    </div>
    <div className="project-card old">
      <div className="project-image-container old">
        <img src="jump.webp" alt="Waste Heat Utilization" className="project-image old" />
      </div>
      <div className="project-details old">
        <h3>Waste Heat Utilization</h3>
        <p>Used Peltier modules to convert heat into electricity and store it in batteries following sustainable development goals.</p>
      </div>
    </div>
  </div>
</section>


<center><h1 className="desbar">My designs</h1></center>
    <section className="projects-section">
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`project-card ${
              index % 2 === 0 ? "row-normal" : "row-reverse"
            }`}
          >
            <div className="project-image-container">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
            </div>
            <div className="project-details">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link}>View Project</a>
            </div>
          </div>
        ))}
      </div>
    </section>
 


<center><h1 className="aew">Gallery</h1></center>
      <section className="aew">
      <div id="galll">
        <img  src="pic17.png"></img>
        <img  src="pic22.png"></img>
        <img  src="pic19.png"></img>
        <img  src="pic21.png"></img>
        <img  src="pic20.png"></img>
        <img  src="pic23.png"></img>
      </div>
      </section>
      <section>
      <div id="gall">
        <img  src="pic7.png"></img>
        <img  src="pic8.png"></img>
        <img  src="pic9.png"></img>
        <img  src="pic13.png"></img>
        <img  src="pic14.jpg"></img>
        <img  src="pic15.png"></img>
      </div>
      </section>
      
      <section>
      <div id="gal">
        <img  src="pic4.png"></img>
        <img  src="pic5.png"></img>
        <img  src="pic6.png"></img>
        <img  src="pic10.png"></img>
        <img  src="pic11.png"></img>
        <img  src="pic12.png"></img>
      </div>
      </section>


           <section id="videoCarousel" className="video-carousel">
  <div className="carousel-wrapper">
    {/* Text on the left */}
    <div className="carousel-text">
      <h2>My Videos</h2>
    </div>
    {/* Carousel on the right */}
    <div className="carousel-container">
      {videos.map((video, index) => (
        <video
          key={index}
          className={`video-item ${getPositionClass(index)}`}
          src={video}
          controls
          onClick={() =>
            index === (currentIndex + 1) % videos.length
              ? handleNext()
              : index === (currentIndex - 1 + videos.length) % videos.length
              ? handlePrev()
              : null
          }
        />
      ))}
    </div>
  </div>
</section>


  <div className="contact">
      <div className="container">
        <h2 className="tna">Share Your Thoughts</h2>
        <p>I'd love to hear from you! Fill out the form below and share your thoughts with me.</p>
        
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Tell me what you want to share"
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
    </div>

  );
}



export default App;
