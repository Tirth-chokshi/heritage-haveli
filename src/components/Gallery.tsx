import React, { useState } from 'react';
import { Camera, Video, ChevronLeft, ChevronRight } from 'lucide-react';

const Carousel = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative group">
      <img
        src={images[currentIndex]}
        alt="Gallery"
        className="w-full h-80 object-cover rounded-lg"
      />
      
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                  currentIndex === index ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('photos');

  const galleryData = {
    architecture: [
      'https://images.unsplash.com/photo-1590687755272-6a4e6ab90d7f?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1582972236019-ea4af5ffe587?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?auto=format&fit=crop&q=80'
    ],
    interior: [
      'https://images.unsplash.com/photo-1624956578878-21fe6b0a3b38?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1615529162924-f8605388461d?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1592595896616-c37162298647?auto=format&fit=crop&q=80'
    ],
    art: [
      'https://images.unsplash.com/photo-1626198226928-95cf2b61d2f0?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1577083552431-6e5fd01988ec?auto=format&fit=crop&q=80'
    ],
    events: [
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80'
    ],
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-gray-900 mb-4">Gallery</h2>
          <p className="text-lg text-gray-600">Explore the beauty of our heritage through images</p>
        </div>

        <div className="flex justify-center space-x-4 mb-8">
          <button
            onClick={() => setActiveTab('photos')}
            className={`flex items-center px-6 py-2 rounded-lg ${
              activeTab === 'photos'
                ? 'bg-amber-800 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <Camera className="w-5 h-5 mr-2" />
            Photos
          </button>
          <button
            onClick={() => setActiveTab('videos')}
            className={`flex items-center px-6 py-2 rounded-lg ${
              activeTab === 'videos'
                ? 'bg-amber-800 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <Video className="w-5 h-5 mr-2" />
            Videos
          </button>
        </div>

        {activeTab === 'photos' && (
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-serif text-gray-900 mb-6">Architecture</h3>
              <Carousel images={galleryData.architecture} />
            </div>

            <div>
              <h3 className="text-2xl font-serif text-gray-900 mb-6">Interior</h3>
              <Carousel images={galleryData.interior} />
            </div>

            <div>
              <h3 className="text-2xl font-serif text-gray-900 mb-6">Art & Sculptures</h3>
              <Carousel images={galleryData.art} />
            </div>

            <div>
              <h3 className="text-2xl font-serif text-gray-900 mb-6">Events</h3>
              <Carousel images={galleryData.events} />
            </div>
          </div>
        )}

        {activeTab === 'videos' && (
          <div className="text-center py-12">
            <p className="text-gray-600">Video gallery coming soon...</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;