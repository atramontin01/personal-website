import React from 'react';
import { useTypingAnimation } from '../hooks/useTypingAnimation';
import { useStaggerAnimation } from '../hooks/usePageAnimation';

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

  return (
    <div className="pt-20 px-6 min-h-screen text-left">
      <div className="max-w-4xl">
        <div className="pt-16">
          <h1 className="text-4xl md:text-6xl font-light text-gray-900 mb-6 tracking-tight">
            <span className="inline-block min-h-[1.2em]">{typingText}</span>
          </h1>
          
          <div className="space-y-4 text-lg text-gray-600 mb-8 max-w-xl leading-relaxed">
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
          </div>
        </div>
        
        <div className="mt-12">
          <img 
            src="/429949F7-A2F2-438D-A048-4D398E53595F_1_105_c.jpeg" 
            alt="angel on bike"
            className="w-[580px] h-auto rounded-lg shadow-sm"
          />
        </div>
      </div>
    </div>
  );
}