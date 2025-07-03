import React, { useEffect } from 'react';
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

  useEffect(() => {
    // Set background images for the rectangles
    const rectangles = document.querySelectorAll('.free-time-rectangle');
    rectangles.forEach((rectangle) => {
      const imagePath = rectangle.getAttribute('data-image');
      const imageDiv = rectangle.querySelector('.rectangle-image') as HTMLElement;
      if (imagePath && imageDiv) {
        imageDiv.style.backgroundImage = `url(${imagePath})`;
      }
    });
  }, []);

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
            <div className="rectangle-wrapper">
              <div className="free-time-rectangle" data-image="/dance.png">
                <div className="rectangle-content">
                </div>
                <div className="rectangle-image"></div>
              </div>
              <div className="rectangle-caption">Red Bull Dance Your Style</div>
              <div className="rectangle-subtitle">Street battles, music, movement - NYC at its best</div>
            </div>
            
            <div className="rectangle-wrapper">
              <div className="free-time-rectangle" data-image="/beach.png">
                <div className="rectangle-content">
                </div>
                <div className="rectangle-image"></div>
              </div>
              <div className="rectangle-caption">Culebra, Puerto Rico</div>
              <div className="rectangle-subtitle">Quiet water, slow days, island stillness.</div>
            </div>
            
            <div className="rectangle-wrapper">
              <div className="free-time-rectangle" data-image="/omakase.png">
                <div className="rectangle-content">
                </div>
                <div className="rectangle-image"></div>
              </div>
              <div className="rectangle-caption">Omakase in NYC</div>
              <div className="rectangle-subtitle">First time. Every bite a surprise.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="contact-container">
          <div className="section-header">
            <h2 className="section-title">Let's Chat</h2>
            <p className="section-subtitle">
              Open to conversations - from big ideas to casual thoughts.
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
            
            <div className="linkedin-section">
              <a href="https://linkedin.com/in/stephenmartinezhamilton" target="_blank" rel="noopener noreferrer" className="linkedin-link">
                <svg className="linkedin-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
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