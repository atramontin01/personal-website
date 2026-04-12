import React from 'react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="pt-20 px-6 min-h-screen text-left">
      <div className="max-w-4xl">
        <div className="pt-16">
          <h1 className="text-4xl md:text-6xl font-light text-gray-900 mb-6 tracking-tight">
            hi, i'm <span className="font-medium">angel <span className="text-2xl md:text-3xl">😇</span></span>
          </h1>
          <div className="space-y-4 text-lg text-gray-600 mb-8 max-w-xl leading-relaxed">
            <p>
              i'm currently pursuing my mba at uc berkeley's haas school of business, taking a two-year hiatus from big-tech corporate life to fully immerse myself in the areas that excite me most: startups, ai, sports, wellness, and the many intersections among them.
            </p>
            <p>
              i previously spent the majority of my career building impactful software at linkedin, working across diverse functions including enterprise gtm, bizops, consumer products, and insights.
            </p>
            <p>
              as a first-generation american, raised by venezuelan immigrants whose own parents came from lebanon and italy, my identity is deeply rooted in the confluence of multiple worlds. this upbringing instilled in me a profound appreciation for new ideas, diverse people, and unfamiliar places.
            </p>
            <p>
              i'm also a community builder, athlete, tech enthusiast, and avid traveler.
            </p>
            <p>
              i'm living in sf right now. you can probably catch me biking up hawk hill, grabbing breakfast burritos in the mission, or enjoying sunny days at dolores park.
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