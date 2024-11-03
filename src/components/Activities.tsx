import React from 'react';
import { Calendar, Clock, Camera, Users } from 'lucide-react';

const Activities = () => {
  const activities = [
    {
      icon: Calendar,
      title: 'Heritage Visits',
      description: 'Explore our haveli\'s rich cultural heritage through guided tours of its intricately carved halls, ornate chambers.',
    },
    {
      icon: Camera,
      title: 'Photography Sessions',
      description: 'Special access for pre-wedding shoots and professional photography.',
    },
    {
      icon: Users,
      title: 'Festival Events',
      description: 'Experience the vibrant festivals of India with our special events and celebrations.',
    }
  ];

  return (
    <section id="activities" className="py-20 bg-[#FFF2E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-gray-900 mb-4">Cultural Activities</h2>
          <p className="text-lg text-gray-600">Immerse yourself in our cultural experiences</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {activities.map((activity, index) => {
            const Icon = activity.icon;
            return (
              <div
                key={index}
                className="bg-stone-50 p-8 rounded-lg hover:shadow-lg transition-shadow duration-200"
              >
                <Icon className="w-12 h-12 text-amber-800 mb-6" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{activity.title}</h3>
                <p className="text-gray-600 mb-4">{activity.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Activities;