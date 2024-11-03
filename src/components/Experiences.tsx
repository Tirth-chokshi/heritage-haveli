import React from 'react';
import { Users, Star } from 'lucide-react';

const Experiences = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'United Kingdom',
      text: 'Visiting Jash-Dwar Haveli was like stepping back in time. The architecture and hospitality were simply magnificent.',
      rating: 5
    },
    {
      name: 'Rajesh Sharma',
      location: 'Mumbai, India',
      text: 'Perfect venue for our pre-wedding shoot. The historical backdrop added a royal touch to our photographs.',
      rating: 5
    },
    {
      name: 'Maria Garcia',
      location: 'Spain',
      text: 'As an architect, I was mesmerized by the intricate details and preservation of this historical marvel.',
      rating: 5
    }
  ];

  return (
    <section id="experiences" className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-gray-900 mb-4">Visitor Experiences</h2>
          <p className="text-lg text-gray-600">Discover what our guests have to say about their visit</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">{testimonial.text}</p>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Users className="w-10 h-10 text-amber-800" />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;