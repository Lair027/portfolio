import React from 'react';

const Education: React.FC = () => {
  return (
    <section id="education" className="education">
      <h2>Education Journey</h2>

      {/* Background specific overlays */}
      <div className="education-bg-overlay"></div>
      <div className="education-bg-gradient-1"></div>
      <div className="education-bg-gradient-2"></div>
      
      {/* Larger, more prominent decorations */}
      <div className="education-large-decoration one"></div>
      <div className="education-large-decoration two"></div>
      
      {/* Darker elements for better visibility */}
      <div className="dark-element dark-circle one"></div>
      <div className="dark-element dark-circle two"></div>
      <div className="dark-element dark-square one"></div>
      <div className="dark-element dark-square two"></div>

      {/* Decorative elements */}
      <div className="education-decor-elements">
        <div className="education-decor-star top-right"></div>
        <div className="education-decor-star bottom-left"></div>
        <div className="education-large-circle"></div>
        <div className="star-element" style={{ top: '40%', left: '15%' }}></div>
        <div className="squiggle" style={{ bottom: '30%', right: '20%' }}></div>
        <div className="small-dots-cluster" style={{ top: '20%', right: '30%' }}><span></span></div>
        
        {/* Additional decorative elements */}
        <div className="wave-line top-right"></div>
        <div className="wave-line bottom-left"></div>
        <div className="zigzag large education-top-right"></div>
        <div className="zigzag small education-bottom-left"></div>
        <div className="diamond education-mid-right"></div>
        <div className="scattered-dots education-mid-left"><span></span></div>
        <div className="grid-pattern education-bottom-right"></div>
        
        {/* Additional decorative elements */}
        <div className="geometric-circle" style={{ top: '35%', right: '25%', opacity: 0.7 }}></div>
        <div className="geometric-square" style={{ bottom: '35%', left: '10%', opacity: 0.5 }}></div>
        <div className="geometric-triangle" style={{ top: '15%', left: '25%', opacity: 0.6 }}></div>
        <div className="geometric-dots" style={{ bottom: '15%', right: '15%', opacity: 0.7 }}></div>
        <div className="floating-circle" style={{ top: '50%', left: '20%', width: '60px', height: '60px' }}></div>
        <div className="floating-plus" style={{ bottom: '45%', right: '30%' }}></div>
        <div className="star-element" style={{ top: '60%', right: '15%', transform: 'scale(0.7)' }}></div>
        <div className="small-dots-cluster" style={{ bottom: '50%', left: '30%' }}><span></span></div>
        <div className="modal-dashed-circle" style={{ top: '25%', left: '35%', transform: 'scale(0.8)' }}></div>
        <div className="squiggle" style={{ top: '70%', right: '40%', transform: 'scale(0.8) rotate(45deg)' }}></div>
      </div>

      <div className="education-container">
        {/* Decorative Line */}
        <div className="timeline-line">
          <div className="timeline-line-dot"></div>
          <div className="timeline-line-dot-middle-top"></div>
          <div className="timeline-line-dot-middle-bottom"></div>
        </div>

        {/* Education Item 1 (University) */}
        <div className="education-item">
          <div className="education-box">
            <div className="edu-icon">
              <i className="fa-solid fa-graduation-cap"></i>
            </div>
            <h3>Bachelor of Science in Computer Science</h3>
            <p className="edu-date">Aug 2022 - Present</p>
            <p className="edu-place">University of Caloocan City</p>
            <p>Developing skills in software development, algorithms, and problem-solving. Currently in my third year with focus on web technologies and programming fundamentals.</p>
          </div>
        </div>

        {/* Education Item 2 (Senior High School) */}
        <div className="education-item">
          <div className="education-box">
            <div className="edu-icon">
              <i className="fa-solid fa-school"></i>
            </div>
            <h3>TVL-Track Programming</h3>
            <p className="edu-date">Oct 2020 - July 2022</p>
            <p className="edu-place">Caloocan City Business High School</p>
            <p>Specialized in programming fundamentals, web development, and software application development within the Technical-Vocational-Livelihood (TVL) track.</p>
          </div>
        </div>

        {/* Education Item 3 (Junior High School) */}
        <div className="education-item">
          <div className="education-box">
            <div className="edu-icon">
              <i className="fa-solid fa-book"></i>
            </div>
            <h3>Junior High School</h3>
            <p className="edu-date">Jun 2016 - Mar 2020</p>
            <p className="edu-place">Escuela San Gabriel de Arcangel Foundation Incorporation</p>
            <p>Completed junior high school education with a focus on mathematics and science, building a strong foundation for future technical studies.</p>
          </div>
        </div>
        
        {/* Education Item 4 (Elementary School) */}
        <div className="education-item">
          <div className="education-box">
            <div className="edu-icon">
              <i className="fa-solid fa-pencil"></i>
            </div>
            <h3>Elementary School</h3>
            <p className="edu-date">Jun 2010 - Mar 2016</p>
            <p className="edu-place">F.S.S Patulo Elementary School</p>
            <p>Completed primary education with honors, developing early interest in mathematics and technology-related subjects.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
