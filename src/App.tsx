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

function App() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Gallery />
        <Experiences />
        <Activities />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;