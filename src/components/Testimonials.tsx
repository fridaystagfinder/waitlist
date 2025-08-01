import React from 'react';
import { Star } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      id: 1,
      text: "Finally an app that makes going out alone feel easy and safe.",
      name: "Shravya",
      age: 26,
      role: "Software Manager",
      city: "Bengaluru",
      initial: "S",
      gradientFrom: "accent-orange",
      gradientTo: "accent-pink",
      nameColor: "accent-orange"
    },
    {
      id: 2,
      text: "I got into a premium bar as a stag—Friday Swipe made my weekend!",
      name: "Akash",
      age: 28,
      role: "Growth Marketer",
      city: "Hyderabad",
      initial: "A",
      gradientFrom: "accent-purple",
      gradientTo: "accent-orange",
      nameColor: "accent-purple"
    },
    {
      id: 3,
      text: "Finally found a platform that gets it—singles deserve the same experiences as couples. FridayStag made me feel welcomed, not like an outsider.",
      name: "Eshwar",
      age: 29,
      role: "Product Designer",
      city: "Pune",
      initial: "E",
      gradientFrom: "accent-pink",
      gradientTo: "accent-purple",
      nameColor: "accent-pink"
    }
  ];

  return (
    <section className="relative py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            What Solo Goers Say
          </h2>
          <p className="text-gray-300 text-sm max-w-md mx-auto">
            Real experiences from our early community members
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="glass-card p-6 border border-accent-purple/30 bg-gradient-to-br from-accent-purple/10 to-transparent hover:from-accent-purple/15 transition-all duration-300 group"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star 
                    key={star} 
                    className="w-4 h-4 fill-yellow-400 text-yellow-400 opacity-90"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-white font-medium italic text-base leading-relaxed mb-5 group-hover:text-gray-100 transition-colors">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 bg-gradient-to-r from-${testimonial.gradientFrom} to-${testimonial.gradientTo} rounded-full flex items-center justify-center flex-shrink-0 shadow-lg`}>
                  <span className="text-white text-sm font-bold">
                    {testimonial.initial}
                  </span>
                </div>
                <div className="text-left">
                  <div className={`text-${testimonial.nameColor} font-semibold text-base`}>
                    {testimonial.name}, {testimonial.age}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {testimonial.role}, {testimonial.city}
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-3 right-3 w-1.5 h-1.5 bg-accent-purple rounded-full opacity-40 group-hover:opacity-60 transition-opacity"></div>
              <div className="absolute bottom-3 left-3 w-1 h-1 bg-accent-pink rounded-full opacity-30 group-hover:opacity-50 transition-opacity"></div>
            </div>
          ))}
        </div>

        {/* Bottom accent */}
        <div className="flex justify-center mt-8">
          <div className="w-24 h-0.5 bg-gradient-to-r from-accent-purple to-accent-pink rounded-full opacity-60"></div>
        </div>
      </div>
    </section>
  );
}