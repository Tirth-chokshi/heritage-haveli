import React from 'react';
import { History, Building2 } from 'lucide-react';
import { photo1, hal3 } from '../assests';
const About = () => {
  return (
    <section id="about" className="py-20 bg-[#]">
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
                <p className="text-gray-600">
                  Built in the 18th century, Jash-Dwar Haveli stands as a testament to the architectural brilliance of its time.
                  Recognized as a Grade-3 heritage site, it showcases the perfect blend of Rajasthani and Mughal architecture.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Building2 className="w-6 h-6 text-amber-800" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Architectural Marvel</h3>
                <p className="text-gray-600">
                  Every corner of the haveli tells a story through its intricate carvings, traditional jharokhas,
                  and stunning frescoes that have been carefully preserved through generations.
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