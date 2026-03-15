import React, { useState, useEffect, useCallback } from 'react';

interface FullscreenState {
  isOpen: boolean;
  images: string[];
  currentIndex: number;
}

const Certificates: React.FC = () => {
  const [fullscreen, setFullscreen] = useState<FullscreenState>({
    isOpen: false,
    images: [],
    currentIndex: 0,
  });

  const certificateImages = [
    '/certificates/certificate1.jpg',
    '/certificates/certificate2.jpg',
    '/certificates/certificate3.jpg',
    '/certificates/certificate4.jpg',
    '/certificates/certificate5.jpg',
    '/certificates/certificate6.jpg',
  ];

  const certificates = [
    { title: 'Cybersecurity Fundamentals', description: 'University of Caloocan' },
    { title: 'Database Universe', description: 'University of Caloocan' },
    { title: 'FastAPI Development', description: 'University of Caloocan' },
    { title: 'GitHub Collaboration', description: 'University of Caloocan' },
    { title: 'User Authentication', description: 'University of Caloocan' },
    { title: 'GitHub Appreciation', description: 'University of Caloocan' },
  ];

  const openFullscreen = useCallback((index: number) => {
    setFullscreen({ isOpen: true, images: certificateImages, currentIndex: index });
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
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [fullscreen.isOpen, closeFullscreen, navigateFullscreen]);

  return (
    <section id="certificates" className="certificates">
      <h2>My Certificates</h2>
      
      {/* Background specific overlays */}
      <div className="certificates-bg-overlay"></div>
      <div className="certificates-bg-gradient-1"></div>
      <div className="certificates-bg-gradient-2"></div>
      
      {/* Decorative elements */}
      <div className="certificates-decor-elements">
        {/* Left side decorations */}
        <div className="certificates-large-decoration one"></div>
        <div className="star-element" style={{ top: '25%', left: '5%', transform: 'scale(1.2)' }}></div>
        <div className="squiggle" style={{ top: '40%', left: '8%', transform: 'rotate(-15deg)' }}></div>
        <div className="small-dots-cluster" style={{ top: '60%', left: '7%' }}><span></span></div>
        <div className="zigzag small" style={{ bottom: '30%', left: '10%' }}></div>
        <div className="scattered-dots" style={{ top: '70%', left: '12%' }}><span></span></div>
        <div className="floating-circle" style={{ top: '35%', left: '5%', width: '60px', height: '60px' }}></div>
        <div className="dark-element dark-circle" style={{ bottom: '20%', left: '8%' }}></div>
        <div className="modal-dashed-circle" style={{ top: '15%', left: '12%', transform: 'scale(0.8)' }}></div>
        
        {/* Right side decorations */}
        <div className="certificates-large-decoration two"></div>
        <div className="star-element" style={{ top: '30%', right: '5%', transform: 'scale(0.9)' }}></div>
        <div className="squiggle" style={{ bottom: '35%', right: '8%', transform: 'rotate(20deg)' }}></div>
        <div className="small-dots-cluster" style={{ top: '20%', right: '10%' }}><span></span></div>
        <div className="zigzag large" style={{ top: '50%', right: '7%' }}></div>
        <div className="diamond" style={{ bottom: '45%', right: '12%' }}></div>
        <div className="grid-pattern" style={{ bottom: '15%', right: '10%' }}></div>
        <div className="floating-plus" style={{ top: '65%', right: '6%' }}></div>
        <div className="dark-element dark-square" style={{ top: '25%', right: '9%' }}></div>
      </div>

      <div className="certificates-container">
        {/* Row 1 */}
        <div className="certificates-row">
          {/* Certificate 1 */}
          <div className="certificate-item" onClick={() => openFullscreen(0)}>
            <div className="certificate-image">
              <img src={'/certificates/certificate1.jpg'} alt="Webinar Certificate 1" />
              <div className="certificate-overlay">
                <div className="certificate-title">{certificates[0].title}</div>
                <div className="certificate-description">{certificates[0].description}</div>
              </div>
            </div>
          </div>
          
          {/* Certificate 2 */}
          <div className="certificate-item" onClick={() => openFullscreen(1)}>
            <div className="certificate-image">
              <img src={'/certificates/certificate2.jpg'} alt="Webinar Certificate 2" />
              <div className="certificate-overlay">
                <div className="certificate-title">{certificates[1].title}</div>
                <div className="certificate-description">{certificates[1].description}</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Row 2 */}
        <div className="certificates-row">
          {/* Certificate 3 */}
          <div className="certificate-item" onClick={() => openFullscreen(2)}>
            <div className="certificate-image">
              <img src={'/certificates/certificate3.jpg'} alt="Webinar Certificate 3" />
              <div className="certificate-overlay">
                <div className="certificate-title">{certificates[2].title}</div>
                <div className="certificate-description">{certificates[2].description}</div>
              </div>
            </div>
          </div>
          
          {/* Certificate 4 */}
          <div className="certificate-item" onClick={() => openFullscreen(3)}>
            <div className="certificate-image">
              <img src={'/certificates/certificate4.jpg'} alt="Webinar Certificate 4" />
              <div className="certificate-overlay">
                <div className="certificate-title">{certificates[3].title}</div>
                <div className="certificate-description">{certificates[3].description}</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Row 3 */}
        <div className="certificates-row">
          {/* Certificate 5 */}
          <div className="certificate-item" onClick={() => openFullscreen(4)}>
            <div className="certificate-image">
              <img src={'/certificates/certificate5.jpg'} alt="Webinar Certificate 5" />
              <div className="certificate-overlay">
                <div className="certificate-title">{certificates[4].title}</div>
                <div className="certificate-description">{certificates[4].description}</div>
              </div>
            </div>
          </div>
          
          {/* Certificate 6 */}
          <div className="certificate-item" onClick={() => openFullscreen(5)}>
            <div className="certificate-image">
              <img src={'/certificates/certificate6.jpg'} alt="Webinar Certificate 6" />
              <div className="certificate-overlay">
                <div className="certificate-title">{certificates[5].title}</div>
                <div className="certificate-description">{certificates[5].description}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Fullscreen viewer */}
      {fullscreen.isOpen && (
        <div className="certificate-fullscreen-viewer active">
          <div className="fullscreen-close" onClick={closeFullscreen}>
            <i className="fas fa-times"></i>
          </div>
          <div className="fullscreen-nav prev" onClick={() => navigateFullscreen('prev')}>
            <i className="fas fa-chevron-left"></i>
          </div>
          <div className="fullscreen-image">
            <img 
              src={fullscreen.images[fullscreen.currentIndex]} 
              alt={`Certificate ${fullscreen.currentIndex + 1}`}
              id="fullscreen-certificate-img"
            />
          </div>
          <div className="fullscreen-nav next" onClick={() => navigateFullscreen('next')}>
            <i className="fas fa-chevron-right"></i>
          </div>
          <div className="fullscreen-counter">
            <span>{fullscreen.currentIndex + 1}</span> / <span>{fullscreen.images.length}</span>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;
