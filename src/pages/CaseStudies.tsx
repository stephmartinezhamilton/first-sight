import React from 'react';
import './CaseStudies.css';
import { Link, useNavigate } from 'react-router-dom';

const CaseStudies: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: "Evaluating Pendo as a Digital Adoption Platform within MarshWings Platform",
      subtitle: "Digital Adoption Strategy",
      description: "Led integration of Pendo into MarshWings application to support user analytics and operational efficiency for 10,000+ users across U.S. and Canada.",
      category: "Data Analytics Strategy",
      image: "/airplane.png"
    },
    {
      id: 2,
      title: "Improving UX for Intellify: An AI-Powered Benefits Intelligence Tool",
      subtitle: "Enterprise UX Research",
      description: "Led user feedback sessions to uncover pain points and improve the usability of Intellify, Mercer's internal AI-powered platform for client benefit plan insights.",
      category: "User Research",
      image: "/ux.png"
    },
    {
      id: 3,
      title: "The Prelude: 0 to 1 Product Development",
      subtitle: "Product Management",
      description: "Contributed to The Prelude's 0-to-1 product launch by defining key app requirements, building analytics infrastructure, and facilitating user testing to shape a luxury mobile experience.",
      category: "Mobile App Strategy",
      image: "/prelude.png"
    },
    {
      id: 4,
      title: "Automation & Data Efficiency for Mercer's MHA Team",
      subtitle: "VBA Scripting & Access Database Optimazation",
      description: "Developed VBA scripts to automate data extraction from Access databases, improving PPT generation efficiency by 30% for Mercer's MHA team.",
      category: "Data Ops & Efficiency",
      image: "/excel.png"
    }
  ];

  const handleCaseStudyClick = (id: number) => {
    // Placeholder for future PDF/external URL links
    console.log(`Case study ${id} clicked - will link to PDF/external URL`);
    alert(`Case Study ${id} - PDF/External link will be added here!`);
  };

  const handlePixelClick = () => {
    window.location.href = '/case-studies';
  };

  return (
    <div className="case-studies-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="floating-orbs-bg" aria-hidden="true">
          {[...Array(12)].map((_, i) => (
            <div key={i} className={`orb orb-${i+1}`}></div>
          ))}
        </div>
        <img
          src={require('../assets/pixel_me.png')}
          alt="Pixelated character"
          className="pixel-character-bg clickable"
          onClick={handlePixelClick}
          style={{ cursor: 'pointer', pointerEvents: 'auto' }}
        />
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title" style={{ fontWeight: 200 }}>
              Stephen is an aspiring product manager, blending curiousity with execution to build what matters.
            </h1>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="case-studies-section">
        <div className="case-studies-container">
          <div className="section-header">
            {/* Removed section title and subtitle */}
          </div>
          <div className="case-studies-grid">
            {caseStudies.map((study) => (
              <div 
                key={study.id} 
                className="case-study-card"
                onClick={() => handleCaseStudyClick(study.id)}
              >
                <div className="case-study-image">
                  {study.image.startsWith('/') ? (
                    <img src={study.image} alt={study.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  ) : (
                    <span>{study.image}</span>
                  )}
                </div>
                <div className="case-study-content">
                  {/* <div className="case-study-category">{study.category}</div> */}
                  <h3 className="case-study-title">{study.title}</h3>
                  <p className="case-study-subtitle">{study.subtitle}</p>
                  <p className="case-study-description">{study.description}</p>
                  {/* <div className="case-study-link">
                    <span>View Case Study →</span>
                  </div> */}
                </div>
              </div>
            ))}
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

export default CaseStudies; 