import React from 'react';
import './CaseStudies.css';
import { Link } from 'react-router-dom';

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

  return (
    <div className="case-studies-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-logo-absolute">
          <Link to="/">
            <svg
              className="hero-logo-svg"
              width="100"
              height="100"
              viewBox="0 0 250 371"
              fill="none"
              stroke="currentColor"
              strokeWidth="20"
              strokeLinecap="round"
              strokeLinejoin="round"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="125" cy="185" r="90" fill="none" />
              <path d="M 30 185 Q 60 60 125 60 Q 190 60 220 185" fill="none" />
              <path d="M 60 320 Q 125 370 190 320" fill="none" />
              <path d="M 60 320 Q 30 250 30 185" fill="none" />
              <path d="M 190 320 Q 220 250 220 185" fill="none" />
              <path d="M 125 60 L 125 20" fill="none" />
              <path d="M 60 320 L 30 350" fill="none" />
              <path d="M 190 320 L 220 350" fill="none" />
            </svg>
          </Link>
        </div>
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Stephen is a consultant at <span className="highlight">Mercer</span> exploring the leap into <span className="highlight">Product</span>—where curiosity meets execution.
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