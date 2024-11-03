import React from 'react';
import { Building2, Phone, Mail, MapPin, Clock, Camera, History, Users, Calendar } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Experiences from './components/Experiences';
import Activities from './components/Activities';
import Contact from './components/Contact';
import { hal2, hal3, hall1, hall, wedding0, wedding1, wedding2, wedding3, wedding5, nav0, nav2, nav3, art1, art2, photo0, photo1, photo5, photot6, art3 } from './assests';
import PhotographySection from './components/PhotographySection';

const intimages = [
  {
    src: hall,
    alt: "Palace Interior 1"
  }, 
  {
    src: hall1,
    alt: "Palace Interior 1"
  }, 
  {
    src: hal2,
    alt: "Palace Interior 1"
  }, 
  {
    src: hal3,
    alt: "Palace Interior 1"
  }, 
];
const wedImages =[
  {
    src: wedding0,
    alt: "Palace Interior 1"
  },
  {
    src: wedding1,
    alt: "Palace Interior 1"
  },
  {
    src: wedding2,
    alt: "Palace Interior 1"
  },
  {
    src: wedding3,
    alt: "Palace Interior 1"
  },
  {
    src: wedding5,
    alt: "Palace Interior 1"
  }
]

const navImages=[
  {
    src: nav0,
    alt: "Navratri Celebration 1"
  },
  {
    src: nav2,
    alt: "Navratri Celebration 2"
  },
  {
    src: nav3,
    alt: "Navratri Celebration 3"
  },
  {
    src: photo0,
    alt: "Photo 1"
  },
  {
    src: photo1,
    alt: "Photo 2"
  },
  {
    src: photo5,
    alt: "Photo 3"
  },
  {
    src: photot6,
    alt: "Photo 4"
  }
]

const artImages = [
  {
    src: art1,
    alt: "Art Piece 1"
  },
  {
    src: art2,
    alt: "Art Piece 2"
  },
  {
    src: art3,
    alt: "Art Piece 3"
  }
]


function App() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Gallery images={intimages}  title = "Interior"  />
        {/* <PhotographySection/> */}
        <Gallery images={wedImages}  title = "Wedding Photoshoot"  />
        <Gallery images={navImages}  title = "Navratri"  />
        <Gallery images={artImages}  title = "ArtWorks"  />
        <Experiences />
        <Activities />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;