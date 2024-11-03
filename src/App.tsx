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
import { hal2, hal3, hall1, hall } from './assests';
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


function App() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Gallery images={intimages}  title = "Interior"  />
        {/* <PhotographySection/> */}
        {/* <Gallery images={images}  title = "Interior"  /> */}
        {/* <Gallery images={images}  title = "Interior"  /> */}
        <Experiences />
        <Activities />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;