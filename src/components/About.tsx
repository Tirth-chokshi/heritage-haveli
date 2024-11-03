import React from 'react';
import { History, Building2 } from 'lucide-react';
import { hal3,photo1 } from '../assests';

const HighlightedText = ({ children }) => (
  <span className="relative inline-block group">
    <span className="relative z-10 font-medium break-words md:whitespace-normal whitespace-nowrap">
      {children}
    </span>
    <span className="absolute bottom-0 left-0 w-full h-2 md:h-3 bg-amber-200/60 -rotate-2 
      group-hover:bg-amber-300/60 transition-all duration-300 transform group-hover:scale-110"></span>
  </span>
);

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-gray-900 mb-4">Our Heritage</h2>
          <p className="text-lg text-gray-600">Discover the story of our magnificent haveli</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <History className="w-6 h-6 text-amber-800" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Historical Significance</h3>
                <p className="text-gray-600 font-serif text-sm md:text-base leading-relaxed">
                  Built in the <HighlightedText>19th</HighlightedText> century, Jash-Dwar Haveli stands 
                  as a testament to the architectural brilliance of its time. Recognized as 
                  a <HighlightedText>Grade-III</HighlightedText> heritage site, it showcases the perfect 
                  blend of Rajasthani and Gujarati architecture.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Building2 className="w-6 h-6 text-amber-800" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Architectural Marvel</h3>
                <p className="text-gray-600 font-serif text-sm md:text-base leading-relaxed">
                  Every corner of the haveli tells a story through its 
                  intricate <HighlightedText>Carvings</HighlightedText>, 
                  traditional <HighlightedText>Jharokhas</HighlightedText>, and stunning 
                  frescoes that have been carefully preserved through generations.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img
              src={photo1}
              alt="Haveli Architecture"
              className="rounded-lg object-cover h-full w-full"
            />
            <img
              src={hal3}
              alt="Haveli Interior"
              className="rounded-lg object-cover h-full w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;