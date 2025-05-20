import React, { useState } from 'react';
import "./Certifications.css";

const certificates = [
  {
    imgSrc: "./src/assets/Azure.png",
    title: "AZURE AI Fundamentals",
    issuer: "Microsoft",
    color: "navy",
  },
  {
    imgSrc: "./src/assets/Introduction To Internet Of Things .jpg",
    title: "NPTEL - Internet oF Things",
    issuer: "IIT - Kanpur",
    color: "red",
  },
  {
    imgSrc: "./src/assets/iot.png",
    title: "Embedded Systems and IOT",
    issuer: "Brain O Vision",
    color: "green",
  },
  {
    imgSrc: "./src/assets/MERNCertificate-1.png",
    title: "MERN Stack Developer",
    issuer: "Quality Thought",
    color: "green",
  }
];

const Certifications = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (imgSrc) => {
    setSelectedImage(imgSrc);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className='certificatecontainer'>
      <h1 style={{  color: "red" }}>Certifications</h1>
      <div className='certificate'>
        {certificates.map((cert, index) => (
          <div className='card' key={index}>
            <div className='image-container' onClick={() => openModal(cert.imgSrc)}>
              <img src={cert.imgSrc} alt={cert.title} />
            </div>
            <div className='text-container'>
              <h3>{cert.title}</h3>
              <h4 style={{ color: cert.color }}>{cert.issuer}</h4>
            </div>
          </div>
        ))}
      </div>

      {modalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-button" onClick={closeModal}>&times;</span>
            <img src={selectedImage} alt="Certificate" className="modal-image" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Certifications;
