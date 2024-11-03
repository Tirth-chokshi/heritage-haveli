import React from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-gray-900 mb-4">Contact Us</h2>
          <p className="text-lg text-gray-600">Get in touch to plan your visit</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-amber-800 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Location</h3>
                <p className="text-gray-600">1539, Jash-Dwar, Bhajgovind Vaid Ni Khadki, Sarangpur, Ahmedabad, Gujarat, India</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Instagram className="w-6 h-6 text-amber-800 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Instagram</h3>
                <a 
                  href="https://www.instagram.com/jashdwar_haweli" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-amber-800 hover:text-amber-900 transition-colors"
                >
                  @jashdwar_haveli
                </a>
              </div>
            </div>

            

            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-amber-800 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Phone</h3>
                <p className="text-gray-600">+91 97370 88713</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <MessageCircle className="w-6 h-6 text-amber-800 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">WhatsApp</h3>
                <a 
                  href="https://wa.me/9737088713" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-amber-800 hover:text-amber-900 transition-colors"
                >
                  Message us on WhatsApp
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Mail className="w-6 h-6 text-amber-800 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Email</h3>
                <p className="text-gray-600">info@jashdwarhaveli.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Clock className="w-6 h-6 text-amber-800 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Visiting Hours</h3>
                <p className="text-gray-600">Contact for Schdule</p>
              </div>
            </div>


          </div>

          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-800 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-800 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-800 focus:border-transparent"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-amber-800 text-white py-2 px-4 rounded-lg hover:bg-amber-900 transition-colors duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;