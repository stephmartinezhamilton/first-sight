import React from 'react';
import './CaseStudies.css';
import { Link, useNavigate } from 'react-router-dom';

const CaseStudies: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: "Digital Transformation at Mercer",
      subtitle: "Consulting Case Study",
      description: "Led strategic initiatives to modernize client engagement processes, resulting in 40% efficiency gains and improved client satisfaction scores.",
      category: "Strategy",
      image: "🏢"
    },
    {
      id: 2,
      title: "Product Strategy Framework",
      subtitle: "Innovation Project",
      description: "Developed a comprehensive product strategy framework that streamlined decision-making processes across multiple stakeholder groups.",
      category: "Product Strategy",
      image: "📊"
    },
    {
      id: 3,
      title: "User Experience Optimization",
      subtitle: "UX Research",
      description: "Conducted user research and implemented design improvements that increased user engagement by 60% and reduced support tickets by 35%.",
      category: "UX/UI",
      image: "🎨"
    },
    {
      id: 4,
      title: "Market Entry Strategy",
      subtitle: "Business Development",
      description: "Analyzed market opportunities and developed go-to-market strategies for new service offerings in emerging markets.",
      category: "Business Strategy",
      image: "🚀"
    }
  ];

  const handleCaseStudyClick = (id: number) => {
    // Placeholder for future PDF/external URL links
    console.log(`Case study ${id} clicked - will link to PDF/external URL`);
    alert(`Case Study ${id} - PDF/External link will be added here!`);
  };

  const navigate = useNavigate();
  const handlePixelClick = () => {
    navigate('/case-studies');
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
            <h2 className="section-title">Featured Case Studies</h2>
            <p className="section-subtitle">
              Real projects, real impact. Here's how I've helped organizations solve complex challenges.
            </p>
          </div>
          
          <div className="case-studies-grid">
            {caseStudies.map((study) => (
              <div 
                key={study.id} 
                className="case-study-card"
                onClick={() => handleCaseStudyClick(study.id)}
              >
                <div className="case-study-image">
                  <span>{study.image}</span>
                </div>
                <div className="case-study-content">
                  <div className="case-study-category">{study.category}</div>
                  <h3 className="case-study-title">{study.title}</h3>
                  <p className="case-study-subtitle">{study.subtitle}</p>
                  <p className="case-study-description">{study.description}</p>
                  <div className="case-study-link">
                    <span>View Case Study →</span>
                  </div>
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
            <h2 className="section-title">Let's Connect</h2>
            <p className="section-subtitle">
              Interested in working together? I'd love to hear about your next project.
            </p>
          </div>
          
          <div className="contact-content">
            <div className="contact-info">
              <h3>Ready to collaborate?</h3>
              <p>
                Whether you're looking for strategic consulting, product strategy, 
                or just want to discuss interesting opportunities, I'm always open to new connections.
              </p>
              <div className="contact-details">
                <div className="contact-item">
                  <span className="contact-icon">📧</span>
                  <span>martinezhamiltonstephen@gmail.com</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📱</span>
                  <span>+1 (917) 562-0424</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <span>New York, NY</span>
                </div>
              </div>
            </div>
            
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
    </div>
  );
};

export default CaseStudies; 