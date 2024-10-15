import React, { useState, useEffect } from 'react';

const images = [
  { src: "/bali.jpeg", alt: "Bali" },
  { src: "/bali1.jpeg", alt: "Bali" },
  { src: "/mon.jpeg", alt: "Mon" },
  { src: "/paris.jpeg", alt: "Paris" },
  { src: "/tokyo.jpeg", alt: "Tokyo" },
  { src: "/sea.jpeg", alt: "Sea" },
  { src: "/new-york.jpeg", alt: "New York" },
  { src: "/rinjani.jpeg", alt: "Rinjani Mountain" },
  { src: "/bromo.jpeg", alt: "Bromo mountain" },
  { src: "/kawah-ijen.jpeg", alt: "Kawah Ijen" },
];

const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const Gallery = () => {
  const [shuffledImages, setShuffledImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    setShuffledImages(shuffleArray(images));
  }, []);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-2">Gallery</h2>
        <p className="text-center mx-auto text-gray-200 mb-12 max-w-2xl">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, incidunt.
        </p>
        <div className="columns-1 xs:columns-2 sm:columns-3 md:columns-4 gap-4 space-y-4">
          {shuffledImages.map((image, index) => (
            <div 
              key={index} 
              className="break-inside-avoid overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 relative group"
              onClick={() => openModal(image)}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-lg font-semibold">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="relative">
            <img src={selectedImage.src} alt={selectedImage.alt} className="max-w-full max-h-96" />
            <button 
              className="absolute top-2 right-2 text-white text-2xl"
              onClick={closeModal}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;