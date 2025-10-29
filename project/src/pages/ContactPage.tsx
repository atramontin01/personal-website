import React from 'react';
import { ArrowUpRight, Mail, Github, Linkedin } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="pt-20 px-6 min-h-screen text-left">
      <div className="max-w-4xl">
        <div className="pt-16">
          <h2 className="text-4xl font-light text-gray-900 mb-8">let's chat</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl leading-relaxed">
            always down to riff on new ideas or help out in any way i can.
            <br />
            i typically respond to clear asks, hit me up!
          </p>
          
          <div className="flex flex-wrap gap-4 mb-12">
            <a
              href="mailto:angeltramontin01@gmail.com"
              className="flex items-center justify-center w-12 h-12 rounded-full backdrop-blur-[20px] bg-white/10 border border-white/20 shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:bg-white/20 hover:backdrop-blur-[25px] hover:brightness-110 transition-all duration-300 group"
              aria-label="Send email"
            >
              <Mail className="w-5 h-5 text-gray-700" />
            </a>
            <a
              href="https://www.linkedin.com/in/angeltramontin"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-full backdrop-blur-[20px] bg-white/10 border border-white/20 shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:bg-white/20 hover:backdrop-blur-[25px] hover:brightness-110 transition-all duration-300 group"
              aria-label="LinkedIn profile"
            >
              <img 
                src="/linkedin-logo.svg" 
                alt="LinkedIn logo" 
                className="w-5 h-5"
                style={{ filter: 'brightness(0) saturate(100%) invert(27%) sepia(8%) saturate(1567%) hue-rotate(169deg) brightness(94%) contrast(87%)' }}
              />
            </a>
            <a
              href="https://x.com/tito_talks" target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-full backdrop-blur-[20px] bg-white/10 border border-white/20 shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:bg-white/20 hover:backdrop-blur-[25px] hover:brightness-110 transition-all duration-300 group"
              aria-label="Twitter/X profile"
            >
              <img 
                src="/x-logo.svg" 
                alt="X logo" 
                className="w-5 h-5 text-gray-700"
              />
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}