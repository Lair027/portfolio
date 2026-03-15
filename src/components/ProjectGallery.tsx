import React, { useState } from 'react';
import styles from '../styles/projectGallery.module.css';

interface ProjectGalleryProps {
  projects: { id: string; images: string[] }[];
}

const ProjectGallery: React.FC<ProjectGalleryProps> = ({ projects }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState<{ id: string; images: string[] } | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openGallery = (project: { id: string; images: string[] }) => {
    setCurrentProject(project);
    setCurrentImageIndex(0);
    setIsOpen(true);
  };

  const closeGallery = () => {
    setIsOpen(false);
    setCurrentProject(null);
  };

  const nextImage = () => {
    if (currentProject) {
      setCurrentImageIndex((currentImageIndex + 1) % currentProject.images.length);
    }
  };

  const prevImage = () => {
    if (currentProject) {
      setCurrentImageIndex((currentImageIndex - 1 + currentProject.images.length) % currentProject.images.length);
    }
  };

  return (
    <div>
      <div className={styles.grid}>
        {projects.map((project) => (
          <div key={project.id} className={styles.project} onClick={() => openGallery(project)}>
            <img src={project.images[0]} alt={project.id} className={styles.thumbnail} />
            <p>{project.id}</p>
          </div>
        ))}
      </div>

      {isOpen && currentProject && (
        <div className={styles.viewer}>
          <button className={styles.close} onClick={closeGallery}>Close</button>
          <button className={styles.prev} onClick={prevImage}>Previous</button>
          <img src={currentProject.images[currentImageIndex]} alt={`Project ${currentProject.id} Image`} className={styles.image} />
          <button className={styles.next} onClick={nextImage}>Next</button>
        </div>
      )}
    </div>
  );
};

export default ProjectGallery;