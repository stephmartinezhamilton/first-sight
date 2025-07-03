import React from 'react';
import './AboutMe.css';

const AboutMe: React.FC = () => {
  const workExperience = [
    {
      id: 2,
      company: "Product Team at The Prelude",
      role: "Associate Product Manager",
      period: "Jan 2024 - Aug 2024"
    },
    {
      id: 3,
      company: "Data & Analytics at Mercer",
      role: "VBA Developer",
      period: "Jan 2024 - Apr 2024"
    },
    {
      id: 4,
      company: "Intellify Team at Mercer",
      role: "UX Research Intern",
      period: "Jan 2024 - Feb 2025"
    },
    {
      id: 5,
      company: "Operations & Technology at Marsh",
      role: "Product Operations Intern",
      period: "Mar 2025 - Present"
    }
  ];

  

  const productInterests = [
    {
      id: 1,
      title: "Product Strategy",
      description: "Developing comprehensive product roadmaps and go-to-market strategies that align business objectives with user needs."
    },
    {
      id: 2,
      title: "User Research",
      description: "Conducting qualitative and quantitative research to understand user pain points and validate product decisions."
    },
    {
      id: 3,
      title: "Data-Driven Decisions",
      description: "Leveraging analytics and metrics to inform product strategy and measure success."
    },
    {
      id: 4,
      title: "Innovation",
      description: "Exploring emerging technologies and methodologies to create innovative product solutions."
    }
  ];

  return (
    <div className="about-me-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-image">
              <div className="profile-placeholder">
                <img src="/grad.png" alt="Stephen Martinez-Hamilton" />
              </div>
            </div>
            <div className="hero-text">
              <h1 className="hero-title">
                Hello, I am Stephen.
              </h1>
              <p className="hero-bio">
              (proh-duhkt man-ij-er)
              </p>
              <p className="hero-bio">
                Born and raised in New York, I am an aspiring product manager with a background studying health, economics, and technology at Yale University. I am passionate about bridging the gap between technology, user behavior, and bussiness goals to create
                thoughtful, impactful products. Outside of work, you'll see me taking yoga classes, exploring new coffee shops, or catching up on Morning Brew.
              </p>
              <p className="hero-bio">
                You can reach me at my <a href="https://linkedin.com/in/stephenmartinezhamilton" target="_blank" rel="noopener noreferrer">LinkedIn page</a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="experience-section">
        <div className="experience-redesign">
          <div className="experience-title">
            <h2>Experience</h2>
          </div>
          <div className="experience-list">
            {[...workExperience].sort((a, b) => b.id - a.id).map((job) => (
              <div key={job.id} className="experience-item">
                <div className="experience-company-period">
                  <span className="experience-company">{job.company}</span>
                  <span className="experience-period">{job.period}</span>
                </div>
                <div className="experience-role">{job.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Yale Section */}
      {/* Yale section removed */}

      {/* Product Interests Section */}
      <section className="interests-section">
        <div className="interests-container">
          <div className="section-header">
            <h2 className="section-title">In My Free Time</h2>
          </div>
          
          <div className="interests-grid">
            <div className="free-time-rectangle" data-image="/image1.jpg">
              <div className="rectangle-content">
              </div>
              <div className="rectangle-image"></div>
            </div>
            
            <div className="free-time-rectangle" data-image="/image2.jpg">
              <div className="rectangle-content">
              </div>
              <div className="rectangle-image"></div>
            </div>
            
            <div className="free-time-rectangle" data-image="/image3.jpg">
              <div className="rectangle-content">
              </div>
              <div className="rectangle-image"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="contact-container">
          <div className="section-header">
            <h2 className="section-title">Let's Connect</h2>
            <p className="section-subtitle">
              Interested in working together? I'd love to hear about your next project.
            </p>
          </div>
          
          <div className="contact-content">
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project..."
                  rows={5}
                />
              </div>
              
              <button type="submit" className="btn btn-primary submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
      
      {/* Footer Credit */}
      <div className="footer-credit">
        <p>© Designed by: Stephen Martinez-Hamilton</p>
      </div>
    </div>
  );
};

export default AboutMe; 