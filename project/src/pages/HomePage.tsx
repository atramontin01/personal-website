import React, { useState } from 'react';
import { Mail } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="pt-12 px-6 min-h-screen text-left page-enter">
      <div className="max-w-4xl">
        <div className="pt-6">
          <h1 className="text-3xl md:text-5xl font-light text-gray-900 mb-4 tracking-tight">
            hi, i'm angel
          </h1>

          <div className="space-y-2 text-base text-gray-600 mb-4 max-w-xl leading-relaxed stagger-children">
            <p>
              i'm currently pursuing my mba at uc berkeley's haas school of business, taking a two-year hiatus from big-tech corporate life to fully immerse myself in the areas that excite me most: startups, ai, sports, wellness, and the many intersections among them.
            </p>

            <p>
              i previously spent the majority of my career building impactful software at linkedin, working across diverse functions including enterprise gtm, bizops, consumer products, and insights. working there taught me how creating economic opportunity through connection could transform lives.
            </p>

            <p>
              i'm fascinated by products that create excuses for genuine connection – tools that help people find their people, without the artificial barriers.
            </p>

            <p>
              as a first-generation american, raised by venezuelan immigrants whose own parents came from lebanon and italy, my identity is deeply rooted in the confluence of multiple worlds. this upbringing instilled in me a profound appreciation for new ideas, diverse people, and unfamiliar places.
            </p>

            <p>
              i'm a bit too extraverted, addicted to playing sports, and always chasing the next great adventure with my friends.
            </p>

            <p>
              i'm living in sf right now. you can probably catch me hanging around bernal heights, biking up hawk hill, or grabbing a breakfast burrito at al carajo.
            </p>

            <p>
              always down to riff on new ideas or help out in any way i can. i typically respond to clear asks.
            </p>

            <p>
              reach me at: <a href="mailto:atramontin@berkeley.edu" className="text-gray-900 underline decoration-gray-300 hover:decoration-gray-900 transition-colors duration-75">atramontin@berkeley.edu</a>
            </p>
          </div>
        </div>

        <div className="mt-4">
          {!imageLoaded && (
            <div className="skeleton w-[400px] max-w-full h-[300px]" />
          )}
          <img
            src="/429949F7-A2F2-438D-A048-4D398E53595F_1_105_c.jpeg"
            alt="angel on bike"
            className={`w-[400px] h-auto rounded-lg shadow-sm ${imageLoaded ? '' : 'hidden'}`}
            onLoad={() => setImageLoaded(true)}
            loading="eager"
          />
        </div>

        <div className="flex flex-wrap gap-3 mt-4">
          <a
            href="mailto:atramontin@berkeley.edu"
            className="flex items-center gap-2 px-4 py-2 min-h-[44px] rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors duration-75"
            aria-label="Send email"
          >
            <Mail className="w-4 h-4" />
            <span className="text-sm">email</span>
          </a>
          <a
            href="https://www.linkedin.com/in/angeltramontin"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 min-h-[44px] rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors duration-75"
            aria-label="LinkedIn profile"
          >
            <img
              src="/linkedin-logo.svg"
              alt=""
              className="w-4 h-4"
              style={{ filter: 'brightness(0) saturate(100%) invert(27%) sepia(8%) saturate(1567%) hue-rotate(169deg) brightness(94%) contrast(87%)' }}
            />
            <span className="text-sm">linkedin</span>
          </a>
          <a
            href="https://x.com/tito_talks"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 min-h-[44px] rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors duration-75"
            aria-label="Twitter/X profile"
          >
            <img
              src="/x-logo.svg"
              alt=""
              className="w-4 h-4"
            />
            <span className="text-sm">x</span>
          </a>
        </div>
      </div>
    </div>
  );
}
