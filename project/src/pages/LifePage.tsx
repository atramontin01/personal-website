import React from 'react';
import { usePageAnimation, useStaggerAnimation } from '../hooks/usePageAnimation';
import InteractiveMap from '../components/InteractiveMap';

export default function LifePage() {
  const isVisible = usePageAnimation();
  const stagger1 = useStaggerAnimation(200);
  const stagger2 = useStaggerAnimation(400);
  const stagger3 = useStaggerAnimation(600);

  return (
    <div className={`pt-20 px-6 min-h-screen text-left transition-all duration-1000 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
    }`}>
      <div className="max-w-4xl mobile-optimized">
        <div className="pt-16">
          <h2 className={`text-4xl font-light text-gray-900 mb-8 transition-all duration-700 ${
            stagger1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            life
          </h2>
          
          <p className={`text-xl text-gray-600 mb-12 max-w-2xl leading-relaxed transition-all duration-700 ${
            stagger2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            a glimpse into what keeps me going outside of work.
          </p>
          
          {/* Interactive Map Section */}
          <div className={`mb-16 transition-all duration-700 ${
            stagger3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <InteractiveMap />
          </div>

          {/* Additional Life Content */}
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            {/* Interests Section */}
            <div className="hover-lift bg-white rounded-lg shadow-sm border border-gray-100 p-6">
              <h3 className="text-xl font-medium text-gray-900 mb-4">Current Interests</h3>
              <div className="space-y-3 text-gray-600">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🚴‍♀️</span>
                  <span>Biking up hawk hill and around SF</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🌯</span>
                  <span>Mission breakfast burritos exploration</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">☀️</span>
                  <span>Dolores park sunny day enthusiast</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🎓</span>
                  <span>MBA studies at UC Berkeley Haas</span>
                </div>
              </div>
            </div>

            {/* Background Section */}
            <div className="hover-lift bg-white rounded-lg shadow-sm border border-gray-100 p-6">
              <h3 className="text-xl font-medium text-gray-900 mb-4">Heritage & Identity</h3>
              <div className="space-y-3 text-gray-600">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🇺🇸</span>
                  <span>First-generation American</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🇻🇪</span>
                  <span>Venezuelan parents</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🇱🇧</span>
                  <span>Lebanese grandparents</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🇮🇹</span>
                  <span>Italian heritage</span>
                </div>
              </div>
            </div>

            {/* Values Section */}
            <div className="hover-lift bg-white rounded-lg shadow-sm border border-gray-100 p-6">
              <h3 className="text-xl font-medium text-gray-900 mb-4">What Drives Me</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Building communities and meaningful connections</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Exploring intersections of tech, sports, and wellness</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Embracing diverse perspectives and new ideas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Constant learning and personal growth</span>
                </li>
              </ul>
            </div>

            {/* Fun Facts */}
            <div className="hover-lift bg-white rounded-lg shadow-sm border border-gray-100 p-6">
              <h3 className="text-xl font-medium text-gray-900 mb-4">Random Fun Facts</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-1">✨</span>
                  <span>Always up for trying new breakfast spots</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-1">✨</span>
                  <span>Can switch between multiple cultures fluently</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-1">✨</span>
                  <span>Passionate about the startup ecosystem</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-1">✨</span>
                  <span>Love discovering hidden gems in new cities</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}