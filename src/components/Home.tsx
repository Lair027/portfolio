import React, { useState, useEffect, useCallback } from 'react';

const Home: React.FC = () => {
  const [isAboutMeActive, setIsAboutMeActive] = useState(false);

  const triggerAboutMe = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setIsAboutMeActive(true);
  }, []);

  const closeAboutMe = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsAboutMeActive(false);
  }, []);

  // Handle escape key to close about me
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isAboutMeActive) {
        setIsAboutMeActive(false);
      }
    };
    
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isAboutMeActive]);

  return (
    <section className="home new-home-layout">
      {/* Decorative Elements */}
      <div className="decorative-elements">
        <div className="geometric-circle"></div>
        <div className="geometric-square"></div>
        <div className="geometric-triangle"></div>
        <div className="geometric-dots"></div>
        <div className="home-decor-star top-right"></div>
        <div className="home-decor-star mid-left"></div>
        <div className="home-large-circle"></div>
        <div className="star-element" style={{ top: '25%', left: '30%' }}></div>
        <div className="squiggle" style={{ bottom: '20%', right: '15%' }}></div>
        <div className="small-dots-cluster" style={{ top: '70%', left: '20%' }}><span></span></div>
      </div>

      <div className={`home-main-content hsr-layout ${isAboutMeActive ? 'about-me-active' : ''}`}>
        <div className="home-left-content">
          <h1 className="home-title">Hi, I'm <span>Laira</span></h1>
          <h2 className="home-subtitle typing-text">I'm a <span></span></h2>
          <p className="home-desc">Honest and teachable. Ready to help the team to achieve company goals.</p>
          <div className="home-social-row">
            <a href="https://www.facebook.com/lairacoleen.samis" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="https://github.com/Lair027" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://www.instagram.com/arialeen_/" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
          <div className="home-buttons">
            <a href="#education" className="btn">Education</a>
            <a href="#projects" className="btn btn-outline">Projects</a>
          </div>
        </div>
        <div className="home-right-image">
          <div className="background-streak"></div>
          <div 
            className="insta-frame" 
            id="about-me-trigger" 
            onClick={triggerAboutMe}
          >
            <div className={`chat-bubble ${isAboutMeActive ? 'hidden' : ''}`}>
              <i className="fas fa-comment"></i>Click Me
            </div>
            <div className="tap-indicator">
              <i className="fas fa-hand-pointer"></i>Tap to view
            </div>
            <div className="corner-highlight"></div>
            <div className="home-profile-thumb">
              <img src={process.env.PUBLIC_URL + '/main.jpg'} alt="Profile Thumb" />
            </div>
            {/* Decorative elements for the insta-frame background */}
            <div className="insta-frame-decorations">
              <div className="insta-frame-circle one"></div>
              <div className="insta-frame-circle two"></div>
              <div className="insta-frame-dots"></div>
              <div className="insta-frame-star one"></div>
              <div className="insta-frame-star two"></div>
              <div className="insta-frame-polygon"></div>
              <div className="insta-frame-triangle"></div>
              <div className="insta-frame-diagonal"></div>
              <div className="insta-frame-dashed-circle"></div>
              <div className="insta-frame-shimmer"></div>
              <div className="insta-frame-floating-particles">
                <span></span><span></span><span></span><span></span>
              </div>
              {/* Darker brown elements */}
              <div className="insta-frame-wood-grain"></div>
              <div className="insta-frame-brushstroke"></div>
              <div className="insta-frame-corner top-right"></div>
              <div className="insta-frame-corner bottom-left"></div>
            </div>
            <div className="image-container">
              <div className="hsr-slant">
                <img src={process.env.PUBLIC_URL + '/secondPic.png'} alt="Profile Picture" className="main-profile-img" />
              </div>
            </div>
            <div className="insta-actions">
              <i className="fa-regular fa-heart"></i>
              <i className="fa-regular fa-comment"></i>
              <i className="fa-regular fa-paper-plane"></i>
            </div>
          </div>
        </div>
        
        {/* About Me expanded content section */}
        <div className={`about-me-expanded-content ${isAboutMeActive ? 'active' : ''}`}>
          {/* Background Elements */}
          <div className="about-me-bg-elements">
            <div className="about-me-circle top-right"></div>
            <div className="about-me-circle bottom-left"></div>
            <div className="about-me-dots mid-right"></div>
            <div className="about-me-dots bottom-left"></div>
            
            {/* Decorative elements */}
            <div className="about-me-star top-right"></div>
            <div className="about-me-star mid-left"></div>
            <div className="about-me-star bottom-right"></div>
            
            <div className="about-me-floating-circle one"></div>
            <div className="about-me-floating-circle two"></div>
            <div className="about-me-floating-circle three"></div>
            
            <div className="about-me-small-dots top-right"><span></span></div>
            <div className="about-me-small-dots bottom-left"><span></span></div>
            
            <div className="about-me-diagonal top-left"></div>
            <div className="about-me-diagonal bottom-right"></div>
            
            <div className="about-me-shimmer"></div>
            <div className="about-me-shimmer second"></div>
            
            <div className="about-me-polygons">
              <div className="polygon one"></div>
              <div className="polygon two"></div>
              <div className="polygon three"></div>
            </div>
            
            <div className="about-me-particles">
              <span></span><span></span><span></span>
              <span></span><span></span><span></span>
            </div>
            
            <div className="about-me-dashed-circle"></div>
          </div>
        
          <div className="back-button" onClick={closeAboutMe}>
            <i className="fas fa-times"></i>
          </div>
          
          <div className="about-me-header">
            <h2>ABOUT ME</h2>
            <div className="section-divider"></div>
          </div>
          
          <div className="about-me-content-container">
            {/* Left Side: Empty/Reserved for decoration */}
            <div className="about-me-left"></div>
            
            {/* Right Side: All content goes here */}
            <div className="about-me-right">
              {/* Bio Section */}
              <div className="about-me-right-section">
                <div className="about-me-bio">
                  <p>Hi, I'm Laira, a 3rd year CS student passionate about creating beautiful and functional websites. With a love for design, learning, and creative problem-solving, I aim to build digital experiences that are both smart and visually engaging.</p>
                </div>
              </div>
              
              {/* Personal Info Section */}
              <div className="about-me-right-section">
                <div className="about-me-info">
                  <h3>NAME</h3>
                  <p>Laira Coleen W. Samis</p>
                </div>
                
                <div className="about-me-info">
                  <h3>E-MAIL</h3>
                  <p>samislairacoleenw@gmail.com</p>
                </div>
              </div>
              
              {/* What I Specialize In Section */}
              <div className="about-me-right-section">
                <h3>WHAT I SPECIALIZE IN</h3>
                <div className="about-me-specialties">
                  <div className="specialty-item">
                    <i className="fas fa-desktop"></i>
                    <div className="specialty-text">
                      <h4>Front-End Development</h4>
                      <p>Creating responsive, user-friendly interfaces with modern design principles</p>
                    </div>
                  </div>
                  
                  <div className="specialty-item">
                    <i className="fas fa-paint-brush"></i>
                    <div className="specialty-text">
                      <h4>UI Design</h4>
                      <p>Crafting visually appealing layouts that enhance user experience</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* My Goals Section */}
              <div className="about-me-right-section">
                <h3>MY GOALS</h3>
                <div className="about-me-goals">
                  <div className="goal-item">
                    <i className="fas fa-graduation-cap"></i>
                    <p>Seeking OJT opportunities to apply and expand my skills in a professional setting</p>
                  </div>
                  
                  <div className="goal-item">
                    <i className="fas fa-code"></i>
                    <p>Continuously improving my technical skills in web development and design</p>
                  </div>
                  
                  <div className="goal-item">
                    <i className="fas fa-users"></i>
                    <p>Building a portfolio of projects that showcase my creativity and problem-solving abilities</p>
                  </div>
                </div>
              </div>
              
              {/* What Makes Me Unique Section */}
              <div className="about-me-right-section">
                <h3>WHAT MAKES ME UNIQUE</h3>
                <div className="about-me-traits">
                  <div className="trait-item">
                    <i className="fas fa-star"></i>
                    <p>Detailed-oriented with a knack for spotting and solving design issues</p>
                  </div>
                  
                  <div className="trait-item">
                    <i className="fas fa-lightbulb"></i>
                    <p>Creative thinker who brings fresh perspectives to projects</p>
                  </div>
                  
                  <div className="trait-item">
                    <i className="fas fa-heart"></i>
                    <p>Passionate about arts and crafts, bringing an artistic sensibility to my work</p>
                  </div>
                  
                  <div className="trait-item">
                    <i className="fas fa-book"></i>
                    <p>Avid reader who continuously learns and stays updated with the latest trends</p>
                  </div>
                </div>
              </div>
              
              {/* Interests Section */}
              <div className="about-me-right-section">
                <h3>MY INTERESTS</h3>
                <div className="about-me-interests">
                  <div className="interest-item">
                    <i className="fas fa-tshirt"></i>
                    <span>Fashion</span>
                  </div>
                  <div className="interest-item">
                    <i className="fas fa-palette"></i>
                    <span>Art</span>
                  </div>
                  <div className="interest-item">
                    <i className="fas fa-gamepad"></i>
                    <span>Games</span>
                  </div>
                  <div className="interest-item">
                    <i className="fas fa-book"></i>
                    <span>Reading</span>
                  </div>
                  <div className="interest-item">
                    <i className="fas fa-cut"></i>
                    <span>Crafts</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
