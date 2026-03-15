import React, { useState } from 'react';
import styles from '../styles/fullscreenViewer.module.css';

interface FullscreenViewerProps {
  images: string[];
  initialIndex?: number;
  onClose: () => void;
}

const FullscreenViewer: React.FC<FullscreenViewerProps> = ({ images, initialIndex = 0, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div className={styles.viewer}>
      <button className={styles.close} onClick={onClose}>Close</button>
      <button className={styles.prev} onClick={prevImage}>Previous</button>
      <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} className={styles.image} />
      <button className={styles.next} onClick={nextImage}>Next</button>
    </div>
  );
};

export default FullscreenViewer;