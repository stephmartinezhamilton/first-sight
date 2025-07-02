import React from 'react';
import './AboutMe.css';

const AboutMe: React.FC = () => {
  const workExperience = [
    {
      id: 1,
      company: "Mercer",
      role: "Consultant",
      period: "2022 - Present"
    },
    {
      id: 2,
      company: "Previous Role",
      role: "Business Analyst",
      period: "2020 - 2022"
    },
    {
      id: 3,
      company: "Company 3",
      role: "Role 3",
      period: "2018 - 2020"
    },
    {
      id: 4,
      company: "Company 4",
      role: "Role 4",
      period: "2016 - 2018"
    },
    {
      id: 5,
      company: "Company 5",
      role: "Role 5",
      period: "2014 - 2016"
    }
  ];

  const yaleHighlights = [
    {
      id: 1,
      title: "Bachelor's Degree",
      field: "Economics & Political Science",
      period: "2016 - 2020",
      description: "Graduated with honors, focusing on economic policy and international relations."
    },
    {
      id: 2,
      title: "Leadership Roles",
      field: "Student Organizations",
      period: "2017 - 2020",
      description: "Led multiple student organizations, developing skills in team management and strategic planning."
    },
    {
      id: 3,
      title: "Research Experience",
      field: "Policy Analysis",
      period: "2018 - 2020",
      description: "Conducted research on economic policy impacts, presenting findings to faculty and peers."
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
                thoughtful, impactful products. Outside of work, you'll me taking hip-hop classes, exploring new coffee shops, or catching up on Morning Brew.
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
      <section className="yale-section">
        <div className="yale-container">
          <div className="section-header">
            <h2 className="section-title">Yale University</h2>
            <p className="section-subtitle">
              Where I developed my analytical foundation and leadership skills.
            </p>
          </div>
          
          <div className="yale-grid">
            {yaleHighlights.map((highlight) => (
              <div key={highlight.id} className="yale-card">
                <div className="yale-card-header">
                  <h3 className="yale-card-title">{highlight.title}</h3>
                  <span className="yale-card-period">{highlight.period}</span>
                </div>
                <p className="yale-card-field">{highlight.field}</p>
                <p className="yale-card-description">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Interests Section */}
      <section className="interests-section">
        <div className="interests-container">
          <div className="section-header">
            <h2 className="section-title">What I'm Excited About</h2>
            <p className="section-subtitle">
              Areas of product management that drive my passion and curiosity.
            </p>
          </div>
          
          <div className="interests-grid">
            {productInterests.map((interest) => (
              <div key={interest.id} className="interest-card">
                <h3 className="interest-title">{interest.title}</h3>
                <p className="interest-description">{interest.description}</p>
              </div>
            ))}
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