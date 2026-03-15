import React, { useState } from 'react';
import styles from '../styles/certificateViewer.module.css';

interface CertificateViewerProps {
  certificates: string[];
}

const CertificateViewer: React.FC<CertificateViewerProps> = ({ certificates }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openViewer = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeViewer = () => {
    setIsOpen(false);
  };

  const nextCertificate = () => {
    setCurrentIndex((currentIndex + 1) % certificates.length);
  };

  const prevCertificate = () => {
    setCurrentIndex((currentIndex - 1 + certificates.length) % certificates.length);
  };

  return (
    <div>
      <div className={styles.grid}>
        {certificates.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Certificate ${index + 1}`}
            className={styles.thumbnail}
            onClick={() => openViewer(index)}
          />
        ))}
      </div>

      {isOpen && (
        <div className={styles.viewer}>
          <button className={styles.close} onClick={closeViewer}>Close</button>
          <button className={styles.prev} onClick={prevCertificate}>Previous</button>
          <img src={certificates[currentIndex]} alt={`Certificate ${currentIndex + 1}`} className={styles.image} />
          <button className={styles.next} onClick={nextCertificate}>Next</button>
        </div>
      )}
    </div>
  );
};

export default CertificateViewer;