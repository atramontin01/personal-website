import React from 'react';
import { useTypingAnimation } from '../hooks/useTypingAnimation';
import { useStaggerAnimation } from '../hooks/usePageAnimation';
import { Mail } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const typingText = useTypingAnimation("hi, i'm angel 😇", 80);
  
  const stagger1 = useStaggerAnimation(300);
  const stagger2 = useStaggerAnimation(600);
  const stagger3 = useStaggerAnimation(900);
  const stagger4 = useStaggerAnimation(1200);
  const stagger5 = useStaggerAnimation(1500);
  const stagger6 = useStaggerAnimation(1800);
  const stagger7 = useStaggerAnimation(2100);
  const stagger8 = useStaggerAnimation(2400);
  const stagger9 = useStaggerAnimation(2700);

  return (
    <div className="pt-12 px-6 min-h-screen text-left">
      <div className="max-w-4xl">
        <div className="pt-6">
          <h1 className="text-3xl md:text-5xl font-light text-gray-900 mb-4 tracking-tight">
            <span className="inline-block min-h-[1.2em]">{typingText}</span>
          </h1>

          <div className="space-y-2 text-base text-gray-600 mb-4 max-w-xl leading-relaxed">
            <p className={`transition-all duration-700 ${
              stagger1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              i'm currently pursuing my mba at uc berkeley's haas school of business, taking a two-year hiatus from big-tech corporate life to fully immerse myself in the areas that excite me most: startups, ai, sports, wellness, and the many intersections among them.
            </p>
            
            <p className={`transition-all duration-700 ${
              stagger2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              i previously spent the majority of my career building impactful software at linkedin, working across diverse functions including enterprise gtm, bizops, consumer products, and insights. working there taught me how creating economic opportunity through connection could transform lives.
            </p>
            
            <p className={`transition-all duration-700 ${
              stagger3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              i'm fascinated by products that create excuses for genuine connection – tools that help people find their people, without the artificial barriers.
            </p>
            
            <p className={`transition-all duration-700 ${
              stagger4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              as a first-generation american, raised by venezuelan immigrants whose own parents came from lebanon and italy, my identity is deeply rooted in the confluence of multiple worlds. this upbringing instilled in me a profound appreciation for new ideas, diverse people, and unfamiliar places.
            </p>
            
            <p className={`transition-all duration-700 ${
              stagger5 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              i'm a bit too extraverted, addicted to playing sports, and always chasing the next great adventure with my friends.
            </p>
            
            <p className={`transition-all duration-700 ${
              stagger6 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              i'm living in sf right now. you can probably catch me hanging around bernal heights, biking up hawk hill, or a grabbing breakfast burrito at al carajo.
            </p>

            <p className={`transition-all duration-700 ${
              stagger7 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              always down to riff on new ideas or help out in any way i can. i typically respond to clear asks.
            </p>

            <p className={`transition-all duration-700 ${
              stagger8 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              reach me at: <span className="text-blue-600">atramontin@berkeley.edu</span>
            </p>
          </div>
        </div>

        <div className="mt-4">
          <img
            src="/429949F7-A2F2-438D-A048-4D398E53595F_1_105_c.jpeg"
            alt="angel on bike"
            className="w-[400px] h-auto rounded-lg shadow-sm"
          />
        </div>

        <div className={`flex flex-wrap gap-3 mt-4 transition-all duration-700 ${
          stagger9 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <a
            href="mailto:atramontin@berkeley.edu"
            className="flex items-center justify-center w-10 h-10 rounded-full backdrop-blur-[20px] bg-white/10 border border-white/20 shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:bg-white/20 hover:backdrop-blur-[25px] hover:brightness-110 transition-all duration-300"
            aria-label="Send email"
          >
            <Mail className="w-4 h-4 text-gray-700" />
          </a>
          <a
            href="https://www.linkedin.com/in/angeltramontin"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 rounded-full backdrop-blur-[20px] bg-white/10 border border-white/20 shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:bg-white/20 hover:backdrop-blur-[25px] hover:brightness-110 transition-all duration-300"
            aria-label="LinkedIn profile"
          >
            <img
              src="/linkedin-logo.svg"
              alt="LinkedIn logo"
              className="w-4 h-4"
              style={{ filter: 'brightness(0) saturate(100%) invert(27%) sepia(8%) saturate(1567%) hue-rotate(169deg) brightness(94%) contrast(87%)' }}
            />
          </a>
          <a
            href="https://x.com/tito_talks"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 rounded-full backdrop-blur-[20px] bg-white/10 border border-white/20 shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:bg-white/20 hover:backdrop-blur-[25px] hover:brightness-110 transition-all duration-300"
            aria-label="Twitter/X profile"
          >
            <img
              src="/x-logo.svg"
              alt="X logo"
              className="w-4 h-4 text-gray-700"
            />
          </a>
        </div>
      </div>
    </div>
  );
}