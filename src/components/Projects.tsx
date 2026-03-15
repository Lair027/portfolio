import React, { useState, useEffect, useCallback } from 'react';

interface ModalState {
  isOpen: boolean;
  projectId: string;
}

interface FullscreenState {
  isOpen: boolean;
  images: string[];
  currentIndex: number;
}

const Projects: React.FC = () => {
  const [modal, setModal] = useState<ModalState>({ isOpen: false, projectId: '' });
  const [fullscreen, setFullscreen] = useState<FullscreenState>({ 
    isOpen: false, 
    images: [], 
    currentIndex: 0 
  });

  const projectImages: Record<string, string[]> = {
    exam: [
      '/projects/exam.io/exam.io-main.png',
      '/projects/exam.io/exam.io1.png',
      '/projects/exam.io/exam.io2.png',
      '/projects/exam.io/exam.io3.png',
      '/projects/exam.io/exam.io4.png',
      '/projects/exam.io/exam.io5.png',
      '/projects/exam.io/exam.io6.png',
      '/projects/exam.io/exam.io7.png',
      '/projects/exam.io/exam.io8.png',
    ],
    'duel-learn': [
      '/projects/duel-learn/duel-learn-main.png',
      '/projects/duel-learn/duel-learn2.png',
      '/projects/duel-learn/duel-learn3.png',
      '/projects/duel-learn/duel-learn4.png',
      '/projects/duel-learn/duel-learn5.png',
      '/projects/duel-learn/duel-learn6.png',
      '/projects/duel-learn/duel-learn7.png',
      '/projects/duel-learn/duel-learn8.png',
      '/projects/duel-learn/duel-learn9.png',
      '/projects/duel-learn/duel-learn10.png',
      '/projects/duel-learn/duel-learn11.png',
      '/projects/duel-learn/duel-learn12.png',
      '/projects/duel-learn/duel-learn13.png',
    ],
    kopilism: [
      '/projects/kopilism/kopilism-app-main.png',
      '/projects/kopilism/kopilism2.png',
      '/projects/kopilism/kopilism3.png',
      '/projects/kopilism/kopilism4.png',
      '/projects/kopilism/kopilism5.png',
      '/projects/kopilism/kopilism6.png',
      '/projects/kopilism/kopilism7.png',
      '/projects/kopilism/kopilism8.png',
      '/projects/kopilism/kopilism9.png',
      '/projects/kopilism/kopilism10.png',
      '/projects/kopilism/kopilism11.png',
      '/projects/kopilism/kopilism12.png',
      '/projects/kopilism/kopilism13.png',
    ],
    orderly: [
      '/projects/orderly-bites/orderly-bites-main.png',
      '/projects/orderly-bites/orderly-bites1.png',
      '/projects/orderly-bites/orderly-bites2.png',
      '/projects/orderly-bites/orderly-bites3.png',
      '/projects/orderly-bites/orderly-bites4.png',
      '/projects/orderly-bites/orderly-bites5.png',
      '/projects/orderly-bites/orderly-bites6.png',
      '/projects/orderly-bites/orderly-bites7.png',
      '/projects/orderly-bites/orderly-bites8.png',
      '/projects/orderly-bites/orderly-bites9.png',
      '/projects/orderly-bites/orderly-bites10.png',
    ],
  };

  const openModal = useCallback((projectId: string) => {
    setModal({ isOpen: true, projectId });
    document.body.style.overflow = 'hidden';
  }, []);

  const closeModal = useCallback(() => {
    setModal({ isOpen: false, projectId: '' });
    document.body.style.overflow = '';
  }, []);

  const openFullscreen = useCallback((images: string[], startIndex: number) => {
    setFullscreen({ isOpen: true, images, currentIndex: startIndex });
  }, []);

  const closeFullscreen = useCallback(() => {
    setFullscreen({ isOpen: false, images: [], currentIndex: 0 });
  }, []);

  const navigateFullscreen = useCallback((direction: 'prev' | 'next') => {
    setFullscreen(prev => {
      const newIndex = direction === 'next' 
        ? (prev.currentIndex + 1) % prev.images.length
        : (prev.currentIndex - 1 + prev.images.length) % prev.images.length;
      return { ...prev, currentIndex: newIndex };
    });
  }, []);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (fullscreen.isOpen) {
        if (e.key === 'Escape') closeFullscreen();
        if (e.key === 'ArrowLeft') navigateFullscreen('prev');
        if (e.key === 'ArrowRight') navigateFullscreen('next');
      } else if (modal.isOpen && e.key === 'Escape') {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [fullscreen.isOpen, modal.isOpen, closeFullscreen, closeModal, navigateFullscreen]);

  const handleImageClick = (projectId: string, imageIndex: number) => {
    const images = projectImages[projectId] || [];
    openFullscreen(images, imageIndex);
  };

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>

      {/* Decorative elements */}
      <div className="projects-decor-star top-left"></div>
      <div className="projects-decor-star bottom-right"></div>
      <div className="projects-decor-dots top-right"></div>
      <div className="projects-decor-dots bottom-left"></div>
      <div className="projects-squiggle top-mid"></div>
      <div className="projects-squiggle bottom-right"></div>
      <div className="projects-floating-circle one"></div>
      <div className="projects-floating-circle two"></div>
      <div className="projects-floating-plus one">+</div>
      
      {/* Side decorations - Left side */}
      <div className="projects-side-decorations left">
        <div className="projects-side-vertical-line"></div>
        <div className="projects-side-horizontal-accent top"></div>
        <div className="projects-side-horizontal-accent bottom"></div>
        <div className="projects-side-circle large"></div>
        <div className="projects-side-circle small"></div>
        <div className="projects-side-square"></div>
        <div className="projects-side-dashed-circle"></div>
        <div className="projects-side-dots-pattern"></div>
        <div className="projects-side-diagonal-accent"></div>
        <div className="projects-side-zigzag"></div>
        <div className="projects-side-plus-accent"></div>
        <div className="projects-side-star"></div>
        <div className="projects-side-brush-stroke"></div>
        <div className="projects-side-wood-grain"></div>
        <div className="projects-side-corner-accent top"></div>
        <div className="projects-side-corner-accent bottom"></div>
      </div>
      
      {/* Side decorations - Right side */}
      <div className="projects-side-decorations right">
        <div className="projects-side-vertical-line"></div>
        <div className="projects-side-horizontal-accent top"></div>
        <div className="projects-side-horizontal-accent bottom"></div>
        <div className="projects-side-circle large"></div>
        <div className="projects-side-circle small"></div>
        <div className="projects-side-square"></div>
        <div className="projects-side-dashed-circle"></div>
        <div className="projects-side-dots-pattern"></div>
        <div className="projects-side-diagonal-accent"></div>
        <div className="projects-side-zigzag"></div>
        <div className="projects-side-plus-accent"></div>
        <div className="projects-side-star"></div>
        <div className="projects-side-shimmer"></div>
        <div className="projects-side-corner-accent top"></div>
        <div className="projects-side-corner-accent bottom"></div>
        <div className="projects-side-floating-particles">
          <span></span><span></span><span></span><span></span>
        </div>
      </div>

      <div className="projects-container">
        {/* Project 1 - Exam.io */}
        <div className="project-item wide exam">
          <div className="project-image">
            <a href="#!" className="project-link" onClick={(e) => { e.preventDefault(); openModal('exam'); }}></a>
            <img src={'/projects/exam.io/exam.io-main.png'} alt="Exam.io Project" />
            <div className="project-overlay">
              <h3>Exam.io</h3>
              <p>Online examination and assessment platform</p>
              <button className="btn-small" onClick={() => openModal('exam')}>View Project</button>
            </div>
          </div>
        </div>
        
        {/* Project 2 - Duel Learn */}
        <div className="project-item duel-learn">
          <div className="project-image">
            <a href="#!" className="project-link" onClick={(e) => { e.preventDefault(); openModal('duel-learn'); }}></a>
            <img src={'/projects/duel-learn/duel-learn-main.png'} alt="Duel Learn Project" />
            <div className="project-overlay">
              <h3>Duel Learn</h3>
              <p>Educational gaming platform with interactive learning tools</p>
              <button className="btn-small" onClick={() => openModal('duel-learn')}>View Project</button>
            </div>
          </div>
        </div>
        
        {/* Project 3 - Kopilism */}
        <div className="project-item portrait kopilism">
          <div className="project-image">
            <a href="#!" className="project-link" onClick={(e) => { e.preventDefault(); openModal('kopilism'); }}></a>
            <img src={'/projects/kopilism/kopilism-app-main.png'} alt="Kopilism App" />
            <div className="project-overlay">
              <h3>Kopilism</h3>
              <p>Coffee shop management system with user authentication</p>
              <button className="btn-small" onClick={() => openModal('kopilism')}>View Project</button>
            </div>
          </div>
        </div>
        
        {/* Project 4 - Orderly Bytes */}
        <div className="project-item wide orderly">
          <div className="project-image">
            <a href="#!" className="project-link" onClick={(e) => { e.preventDefault(); openModal('orderly'); }}></a>
            <img src={'/projects/orderly-bites/orderly-bites-main.png'} alt="Orderly Bytes Project" />
            <div className="project-overlay">
              <h3>Orderly Bytes</h3>
              <p>Food ordering and restaurant management application</p>
              <button className="btn-small" onClick={() => openModal('orderly')}>View Project</button>
            </div>
          </div>
        </div>
      </div>

      {/* Project Modals */}
      {/* Exam.io Project Modal */}
      <div className={`project-modal ${modal.isOpen && modal.projectId === 'exam' ? 'active' : ''}`} id="modal-exam">
        <div className="modal-content">
          <div className="modal-close" onClick={closeModal}><i className="fas fa-times"></i></div>
          
          <div className="modal-header">
            <h2>Exam.io</h2>
          </div>
          
          <div className="modal-content-wrapper">
            {/* Decorative elements */}
            <div className="modal-decor-circle top-right"></div>
            <div className="modal-decor-circle bottom-left"></div>
            <div className="modal-decor-square mid-right"></div>
            <div className="modal-decor-dots bottom-right"></div>
            <div className="modal-decor-star top-left"></div>
            <div className="modal-decor-star bottom-right"></div>
            <div className="modal-squiggle mid-left"></div>
            <div className="modal-dots-cluster mid-right"><span></span></div>
            <div className="modal-decor-circle top-left"></div>
            <div className="modal-decor-star mid-left"></div>
            <div className="modal-squiggle bottom-left"></div>
            <div className="modal-dots-cluster bottom-left"><span></span></div>
            <div className="modal-decor-square top-left"></div>
            <div className="modal-dashed-circle mid-left"></div>
            <div className="floating-plus top-left"></div>
            
            {/* Gallery */}
            <div className="modal-gallery">
              <div className="modal-main-image" onClick={() => handleImageClick('exam', 0)}>
                <img src={'/projects/exam.io/exam.io-main.png'} alt="Exam.io main screenshot" />
              </div>
              <div className="modal-secondary-images">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="modal-secondary-image" onClick={() => handleImageClick('exam', i)}>
                    <img src={`/projects/exam.io/exam.io${i}.png`} alt={`Exam.io screenshot ${i}`} />
                  </div>
                ))}
              </div>
              <div className="modal-additional-images">
                {[7, 8].map((i) => (
                  <div key={i} className="modal-additional-image" onClick={() => handleImageClick('exam', i)}>
                    <img src={`/projects/exam.io/exam.io${i}.png`} alt={`Exam.io screenshot ${i}`} />
                  </div>
                ))}
              </div>
            </div>
            
            <div className="modal-details">
              <h3>Project Overview</h3>
              <p>Exam.io is an online examination platform designed to streamline the process of creating, conducting, and evaluating exams. It offers a comprehensive solution for educational institutions and corporate training programs.</p>
              
              <div className="modal-features">
                <h4>Key Features</h4>
                <ul>
                  <li>User-friendly exam creation with various question types</li>
                  <li>Secure exam environment with anti-cheating measures</li>
                  <li>Automated grading and detailed performance analytics</li>
                  <li>Customizable exam templates and scheduling options</li>
                  <li>Advanced reporting and statistics for administrators</li>
                </ul>
              </div>
              
              <div className="modal-tech">
                <h4>Technologies Used</h4>
                <div className="tech-tags">
                  <span className="tech-tag">C#</span>
                  <span className="tech-tag">SQL</span>
                  <span className="tech-tag">.NET Framework</span>
                  <span className="tech-tag">WPF</span>
                </div>
              </div>
              
              <div className="modal-actions">
                <a href="https://github.com/bealyssa/Exam-Management-System" target="_blank" rel="noopener noreferrer" className="btn btn-dark">
                  <i className="fab fa-github"></i> View Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Duel Learn Project Modal */}
      <div className={`project-modal ${modal.isOpen && modal.projectId === 'duel-learn' ? 'active' : ''}`} id="modal-duel-learn">
        <div className="modal-content">
          <div className="modal-close" onClick={closeModal}><i className="fas fa-times"></i></div>
          
          <div className="modal-header">
            <h2>Duel Learn</h2>
          </div>
          
          <div className="modal-content-wrapper">
            {/* Decorative elements */}
            <div className="modal-decor-circle top-right"></div>
            <div className="modal-decor-circle bottom-left"></div>
            <div className="modal-decor-square mid-right"></div>
            <div className="modal-decor-dots bottom-right"></div>
            <div className="modal-decor-star top-left"></div>
            <div className="modal-decor-star bottom-right"></div>
            <div className="modal-squiggle mid-left"></div>
            <div className="modal-dots-cluster mid-right"><span></span></div>
            <div className="modal-decor-circle top-left"></div>
            <div className="modal-decor-star mid-left"></div>
            <div className="modal-squiggle bottom-left"></div>
            <div className="modal-dots-cluster bottom-left"><span></span></div>
            <div className="modal-decor-square top-left"></div>
            <div className="modal-dashed-circle mid-left"></div>
            <div className="floating-plus top-left"></div>
            
            {/* Gallery */}
            <div className="modal-gallery">
              <div className="modal-main-image" onClick={() => handleImageClick('duel-learn', 0)}>
                <img src={'/projects/duel-learn/duel-learn-main.png'} alt="Duel Learn main screenshot" />
              </div>
              {/* Video preview */}
              <div className="modal-main-video" style={{ position: 'relative', margin: '18px 0 10px 0', borderRadius: '14px', overflow: 'hidden', border: '3px solid #8AA8BF', boxShadow: '0 0 16px 0 rgba(138,168,191,0.18)', maxWidth: '480px', marginLeft: 'auto', marginRight: 'auto' }}>
                <video className="duel-learn-video" src={'/projects/duel-learn/2025-05-22 01-00-51.mp4'} controls poster={'/projects/duel-learn/duel-learn-main.png'} style={{ width: '100%', display: 'block', background: '#222' }}>
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="modal-secondary-images">
                {[2, 3, 4, 5, 6, 7].map((i) => (
                  <div key={i} className="modal-secondary-image" onClick={() => handleImageClick('duel-learn', i - 1)}>
                    <img src={`/projects/duel-learn/duel-learn${i}.png`} alt={`Duel Learn screenshot ${i}`} />
                  </div>
                ))}
              </div>
              <div className="modal-additional-images">
                {[8, 9, 10, 11, 12, 13].map((i) => (
                  <div key={i} className="modal-additional-image" onClick={() => handleImageClick('duel-learn', i - 1)}>
                    <img src={`/projects/duel-learn/duel-learn${i}.png`} alt={`Duel Learn screenshot ${i}`} />
                  </div>
                ))}
              </div>
            </div>
            
            <div className="modal-details">
              <h3>Project Overview</h3>
              <p>Duel Learn is an interactive educational platform that gamifies the learning process through friendly competitions. Users can challenge friends or random opponents to knowledge duels across various subjects, making learning engaging and fun.</p>
              
              <div className="modal-features">
                <h4>Key Features</h4>
                <ul>
                  <li>Real-time multiplayer duels with live scoring</li>
                  <li>Extensive question bank covering multiple subjects</li>
                  <li>Personal progress tracking and statistics</li>
                  <li>Social features including friends, challenges, and leaderboards</li>
                  <li>Solo practice mode for skill improvement</li>
                </ul>
              </div>
              
              <div className="modal-tech">
                <h4>Technologies Used</h4>
                <div className="tech-tags">
                  <span className="tech-tag">Firebase</span>
                  <span className="tech-tag">Node.js</span>
                  <span className="tech-tag">MySQL</span>
                  <span className="tech-tag">WebSockets</span>
                </div>
              </div>
              
              <div className="modal-actions">
                <a href="https://github.com/Duel-Learn-Devs/duel-learn" target="_blank" rel="noopener noreferrer" className="btn btn-dark">
                  <i className="fab fa-github"></i> View Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Kopilism Project Modal */}
      <div className={`project-modal ${modal.isOpen && modal.projectId === 'kopilism' ? 'active' : ''}`} id="modal-kopilism">
        <div className="modal-content">
          <div className="modal-close" onClick={closeModal}><i className="fas fa-times"></i></div>
          
          <div className="modal-header">
            <h2>Kopilism</h2>
          </div>
          
          <div className="modal-content-wrapper">
            {/* Decorative elements */}
            <div className="modal-decor-circle top-right"></div>
            <div className="modal-decor-circle bottom-left"></div>
            <div className="modal-decor-square mid-right"></div>
            <div className="modal-decor-dots bottom-right"></div>
            <div className="modal-decor-star top-left"></div>
            <div className="modal-decor-star bottom-right"></div>
            <div className="modal-squiggle mid-left"></div>
            <div className="modal-dots-cluster mid-right"><span></span></div>
            <div className="modal-decor-circle top-left"></div>
            <div className="modal-decor-star mid-left"></div>
            <div className="modal-squiggle bottom-left"></div>
            <div className="modal-dots-cluster bottom-left"><span></span></div>
            <div className="modal-decor-square top-left"></div>
            <div className="modal-dashed-circle mid-left"></div>
            <div className="floating-plus top-left"></div>
            
            {/* Gallery */}
            <div className="modal-gallery">
              <div className="modal-main-image" onClick={() => handleImageClick('kopilism', 0)}>
                <img src={'/projects/kopilism/kopilism-app-main.png'} alt="Kopilism main screenshot" />
              </div>
              <div className="modal-secondary-images">
                {[2, 3, 4, 5, 6, 7].map((i) => (
                  <div key={i} className="modal-secondary-image" onClick={() => handleImageClick('kopilism', i - 1)}>
                    <img src={`/projects/kopilism/kopilism${i}.png`} alt={`Kopilism screenshot ${i}`} />
                  </div>
                ))}
              </div>
              <div className="modal-additional-images">
                {[8, 9, 10, 11, 12, 13].map((i) => (
                  <div key={i} className="modal-additional-image" onClick={() => handleImageClick('kopilism', i - 1)}>
                    <img src={`/projects/kopilism/kopilism${i}.png`} alt={`Kopilism screenshot ${i}`} />
                  </div>
                ))}
              </div>
            </div>
            
            <div className="modal-details">
              <h3>Project Overview</h3>
              <p>Kopilism is a specialized inventory management application developed exclusively for Kopilism Coffee Shop. The app facilitates efficient communication and ordering between the main headquarters (admin), branch locations, and employees, streamlining the supply chain for coffee shop materials and ingredients.</p>
              
              <div className="modal-features">
                <h4>Key Features</h4>
                <ul>
                  <li>Multi-user system with role-based access (Admin, Branch Client, Employee)</li>
                  <li>Inventory tracking and low stock alerts across multiple locations</li>
                  <li>Ordering portal for branch clients to request materials from headquarters</li>
                  <li>Order tracking and approval workflow for admins</li>
                  <li>Sales and inventory analytics for better supply chain management</li>
                </ul>
              </div>
              
              <div className="modal-tech">
                <h4>Technologies Used</h4>
                <div className="tech-tags">
                  <span className="tech-tag">Dart (83.5%)</span>
                  <span className="tech-tag">C++ (8.1%)</span>
                  <span className="tech-tag">CMake (6.5%)</span>
                  <span className="tech-tag">Swift (0.9%)</span>
                  <span className="tech-tag">C (0.5%)</span>
                  <span className="tech-tag">HTML (0.4%)</span>
                </div>
              </div>
              
              <div className="modal-actions">
                <a href="https://github.com/mawrk19/Cafe-Inventory-System" target="_blank" rel="noopener noreferrer" className="btn btn-dark">
                  <i className="fab fa-github"></i> View Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Orderly Bytes Project Modal */}
      <div className={`project-modal ${modal.isOpen && modal.projectId === 'orderly' ? 'active' : ''}`} id="modal-orderly">
        <div className="modal-content">
          <div className="modal-close" onClick={closeModal}><i className="fas fa-times"></i></div>
          
          <div className="modal-header">
            <h2>Orderly Bytes</h2>
          </div>
          
          <div className="modal-content-wrapper">
            {/* Decorative elements */}
            <div className="modal-decor-circle top-right"></div>
            <div className="modal-decor-circle bottom-left"></div>
            <div className="modal-decor-square mid-right"></div>
            <div className="modal-decor-dots bottom-right"></div>
            <div className="modal-decor-star top-left"></div>
            <div className="modal-decor-star bottom-right"></div>
            <div className="modal-squiggle mid-left"></div>
            <div className="modal-dots-cluster mid-right"><span></span></div>
            <div className="modal-decor-circle top-left"></div>
            <div className="modal-decor-star mid-left"></div>
            <div className="modal-squiggle bottom-left"></div>
            <div className="modal-dots-cluster bottom-left"><span></span></div>
            <div className="modal-decor-square top-left"></div>
            <div className="modal-dashed-circle mid-left"></div>
            <div className="floating-plus top-left"></div>
            
            {/* Gallery */}
            <div className="modal-gallery">
              <div className="modal-main-image" onClick={() => handleImageClick('orderly', 0)}>
                <img src={'/projects/orderly-bites/orderly-bites-main.png'} alt="Orderly Bytes main screenshot" />
              </div>
              <div className="modal-secondary-images">
                <div className="modal-secondary-image" onClick={() => handleImageClick('orderly', 7)}>
                  <img src={'/projects/orderly-bites/orderly-bites7.png'} alt="Orderly Bytes sales report" />
                </div>
                <div className="modal-secondary-image" onClick={() => handleImageClick('orderly', 8)}>
                  <img src={'/projects/orderly-bites/orderly-bites8.png'} alt="Orderly Bytes employee management" />
                </div>
                <div className="modal-secondary-image" onClick={() => handleImageClick('orderly', 9)}>
                  <img src={'/projects/orderly-bites/orderly-bites9.png'} alt="Orderly Bytes discount management" />
                </div>
                <div className="modal-secondary-image" onClick={() => handleImageClick('orderly', 10)}>
                  <img src={'/projects/orderly-bites/orderly-bites10.png'} alt="Orderly Bytes inventory management" />
                </div>
                <div className="modal-secondary-image" onClick={() => handleImageClick('orderly', 1)}>
                  <img src={'/projects/orderly-bites/orderly-bites1.png'} alt="Orderly Bytes fruit tea" />
                </div>
                <div className="modal-secondary-image" onClick={() => handleImageClick('orderly', 2)}>
                  <img src={'/projects/orderly-bites/orderly-bites2.png'} alt="Orderly Bytes hazelnut almonds" />
                </div>
              </div>
              <div className="modal-additional-images">
                {[3, 4, 5, 6].map((i) => (
                  <div key={i} className="modal-additional-image" onClick={() => handleImageClick('orderly', i)}>
                    <img src={`/projects/orderly-bites/orderly-bites${i}.png`} alt={`Orderly Bytes screenshot ${i}`} />
                  </div>
                ))}
              </div>
            </div>
            
            <div className="modal-details">
              <h3>Project Overview</h3>
              <p>Orderly Bytes is a desktop Point of Sale (POS) system designed specifically for restaurant operations. It connects cashiers, kitchen staff, and administrators in a unified platform to streamline order processing, food preparation, and restaurant management.</p>
              
              <div className="modal-features">
                <h4>Key Features</h4>
                <ul>
                  <li>Role-specific interfaces for cashiers, kitchen staff, and admins</li>
                  <li>Real-time order transmission from cashier to kitchen</li>
                  <li>Order status tracking and preparation management</li>
                  <li>Inventory management and automatic stock deduction</li>
                  <li>Sales reporting and performance analytics for management</li>
                </ul>
              </div>
              
              <div className="modal-tech">
                <h4>Technologies Used</h4>
                <div className="tech-tags">
                  <span className="tech-tag">Java (98.3%)</span>
                  <span className="tech-tag">CSS (1.7%)</span>
                  <span className="tech-tag">JavaFX</span>
                  <span className="tech-tag">SQL</span>
                </div>
              </div>
              
              <div className="modal-actions">
                <a href="https://github.com/Jasupaa/ROLE-SPECIFIC-POS-SYSTEM" target="_blank" rel="noopener noreferrer" className="btn btn-dark">
                  <i className="fab fa-github"></i> View Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="decorative-elements projects-decor">
        <div className="geometric-circle"></div>
        <div className="geometric-square"></div>
        <div className="geometric-triangle"></div>
        <div className="geometric-dots"></div>
        <div className="star-element"></div>
        <div className="large-circle" style={{ width: '200px', height: '200px', top: '20%', right: '10%' }}></div>
        <div className="small-dots-cluster" style={{ top: '60%', left: '5%' }}><span></span></div>
        <div className="squiggle" style={{ bottom: '15%', right: '20%' }}></div>
        <div className="star-element" style={{ bottom: '30%', left: '20%' }}></div>
        
        <div className="floating-circle projects-mid-left"></div>
        <div className="floating-circle projects-top-right"></div>
        <div className="diamond projects-bottom-right"></div>
        <div className="scattered-dots projects-mid-right"><span></span></div>
        <div className="grid-pattern projects-top-left"></div>
        <div className="wave-line" style={{ top: '40%', right: '25%', transform: 'rotate(15deg)' }}></div>
        <div className="wave-line" style={{ bottom: '25%', left: '30%', transform: 'rotate(-25deg)' }}></div>
        <div className="zigzag large" style={{ top: '25%', left: '20%' }}></div>
        <div className="zigzag small" style={{ bottom: '10%', right: '35%' }}></div>
        
        <div className="projects-large-circle one"></div>
        <div className="projects-large-circle two"></div>
        <div className="projects-large-decoration"></div>
        <div className="projects-blob-shape"></div>
        
        <div className="projects-dark-element dark-circle-lg" style={{ top: '15%', right: '18%' }}></div>
        <div className="projects-dark-element dark-circle-lg" style={{ bottom: '25%', left: '12%' }}></div>
        <div className="projects-dark-element dark-square-lg" style={{ top: '35%', left: '15%' }}></div>
        <div className="projects-dark-element dark-square-lg" style={{ bottom: '18%', right: '20%' }}></div>
        
        <div className="large-star-element" style={{ top: '30%', right: '30%' }}></div>
        <div className="large-squiggle" style={{ bottom: '40%', left: '18%' }}></div>
        <div className="large-floating-plus" style={{ top: '45%', right: '15%' }}></div>
        <div className="large-diamond" style={{ bottom: '35%', left: '25%' }}></div>
        
        <div className="projects-dots-pattern" style={{ top: '20%', left: '20%' }}></div>
        <div className="projects-dots-pattern" style={{ bottom: '15%', right: '10%' }}></div>
        
        <div className="projects-gradient-shape one"></div>
        <div className="projects-gradient-shape two"></div>
      </div>

      {/* Fullscreen Image Viewer */}
      {fullscreen.isOpen && (
        <div className="fullscreen-viewer active" id="fullscreen-viewer">
          <div className="fullscreen-close" onClick={closeFullscreen}><i className="fas fa-times"></i></div>
          <div className="fullscreen-nav prev" onClick={() => navigateFullscreen('prev')}><i className="fas fa-chevron-left"></i></div>
          <div className="fullscreen-image">
            <img src={fullscreen.images[fullscreen.currentIndex]} alt="Fullscreen" id="fullscreen-img" />
          </div>
          <div className="fullscreen-nav next" onClick={() => navigateFullscreen('next')}><i className="fas fa-chevron-right"></i></div>
          <div className="fullscreen-counter">
            <span id="current-image">{fullscreen.currentIndex + 1}</span> / <span id="total-images">{fullscreen.images.length}</span>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
