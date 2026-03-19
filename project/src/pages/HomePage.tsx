import React, { useState } from 'react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="pt-12 px-6 min-h-screen text-left page-enter">
      <div className="max-w-2xl">
        <div className="pt-6">
          <h1 className="text-3xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight">
            hi, i'm angel.
          </h1>

          <div className="space-y-4 text-base text-gray-600 max-w-xl leading-relaxed stagger-children">
            <p>
              i learned pretty young that you can just do things. ever since then, i figured out i can do things that bring people together.
            </p>

            <p>
              first-gen american, raised by venezuelan immigrants in ohio. i think that's where i got it — this impulse to put <em>different people</em> in the <em>same room</em> and see what happens.
            </p>

            <p>
              i then started my career at linkedin. over six years i built ai customer support products, grew access to linkedin premium in emerging markets, and delivered data insights to fortune 500 customers that influenced $10M+ in recurring revenue. it was amazing. i met some of my best friends there. but i kept having ideas i couldn't stop thinking about. ai was happening, i was inching closer to my late twenties, so i left to do what any logical business person lost in their career would do...go back to business school.
            </p>

            <p>
              i'm finishing up my mba at uc berkeley haas to <em>explore</em> all the stuff that lights me up.
            </p>

            <p>
              my main quest for the last few months has been{' '}
              <a href="https://youtu.be/5Jm6bv3n1So?si=6idWq8JcACp1FpPm" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline underline-offset-2 hover:text-blue-800 transition-colors duration-75">goplai</a>
              {' '}— ai that watches your sports games and turns them into highlight reels automatically. we're starting with basketball. this is a product i would've LOVED to have growing up playing competitive sports my whole life. that's why we built it.{' '}
              <a href="https://form.typeform.com/to/hn44xRGO" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline underline-offset-2 hover:text-blue-800 transition-colors duration-75">sign up for our waitlist</a>
              {' '}— we're in beta!
            </p>

            <p className="font-medium text-gray-900">side quests:</p>

            <p>
              <a href="https://designmyroute.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline underline-offset-2 hover:text-blue-800 transition-colors duration-75">route art buddy</a>
              {' '}— i love cycling around sf and i couldn't figure out how these strava influencers were biking routes that made cool shapes on the map. so i made my own.
            </p>

            <p>
              i've been playing{' '}
              <a href="https://youtu.be/rSIvS-Skg28?si=IihzfHS1kzGty_Yx" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline underline-offset-2 hover:text-blue-800 transition-colors duration-75">padel</a>
              {' '}since 2017 — my parents lived in panama and it's everywhere down there. i got hooked and couldn't believe it barely existed in the US. so i'm working on changing that with{' '}
              <a href="https://playcostapadel.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline underline-offset-2 hover:text-blue-800 transition-colors duration-75">costa padel</a>
              , starting in the east bay.
            </p>

            <p>
              peloconnect — a bot that matches bay area cyclists for rides based on pace, climbing preference, and location. text it when you want to ride, it finds you someone who won't drop you on the first climb.
            </p>

            <p>
              i'm obsessed with music. bad bunny to industrial techno and everything in between. recently started the{' '}
              <a href="https://youtu.be/njvm5L2fxwo?si=oXXXEwjkzCfcoGVc" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline underline-offset-2 hover:text-blue-800 transition-colors duration-75">5% boys</a>
              {' '}dj collective with some buddies from business school. we do outdoor sets all around the bay area — like this sick{' '}
              <a href="https://partiful.com/e/npLBEVsgTHbg0HyxpAG6?c=zH1DlZgl" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline underline-offset-2 hover:text-blue-800 transition-colors duration-75">sunset at baker beach</a>
              . somehow 300+ people showed up.
            </p>

            <p>
              other things i'm currently loving in sf: backgammon tournaments, friday morning cold plunges at crissy field with the{' '}
              <a href="https://www.instagram.com/saltydogsclub_sf/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline underline-offset-2 hover:text-blue-800 transition-colors duration-75">salty dogs</a>
              , and tinkering with a group of people trying to{' '}
              <a href="https://www.sutrosociety.com/index.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline underline-offset-2 hover:text-blue-800 transition-colors duration-75">bring back the sutro baths</a>
              . this city is so back.
            </p>

            <p>
              if you have something you want to riff on, i typically respond to clear asks.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-500">
            <a
              href="mailto:atramontin@berkeley.edu"
              className="hover:text-gray-900 transition-colors duration-75"
            >
              email
            </a>
            <a
              href="https://www.linkedin.com/in/angeltramontin"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900 transition-colors duration-75"
            >
              linkedin
            </a>
            <a
              href="https://x.com/tito_talks"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900 transition-colors duration-75"
            >
              x
            </a>
          </div>
        </div>

        <div className="mt-10">
          {!imageLoaded && (
            <div className="skeleton w-[400px] max-w-full h-[300px]" />
          )}
          <img
            src="/429949F7-A2F2-438D-A048-4D398E53595F_1_105_c.jpeg"
            alt="angel on bike"
            className={`w-[400px] h-auto rounded-lg ${imageLoaded ? '' : 'hidden'}`}
            onLoad={() => setImageLoaded(true)}
            loading="eager"
          />
        </div>
      </div>
    </div>
  );
}
