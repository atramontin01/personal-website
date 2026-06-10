import React, { useState } from 'react';
import { Mail, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="pt-12 px-6 min-h-screen text-left page-enter">
      <div className="max-w-2xl">
        <div className="pt-6">
          <div className="mb-8">
            {!imageLoaded && (
              <div className="skeleton w-[200px] max-w-full h-[250px]" />
            )}
            <img
              src="/founder.png"
              alt="angel tramontin"
              className={`w-[200px] h-auto rounded-lg ${imageLoaded ? '' : 'hidden'}`}
              onLoad={() => setImageLoaded(true)}
              loading="eager"
            />
          </div>

          <h1 className="text-3xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight">
            hi, i'm angel.
          </h1>

          <div className="space-y-4 text-base text-gray-600 max-w-xl leading-relaxed stagger-children">
            <p>
              i've always had this innate feeling that i should just keep moving, doing new things, and kind of causing chaos. it never was clear to me that this was an advantage until my adult years.
            </p>

            <p>
              first-gen american, raised by venezuelan immigrants in ohio. i think that's where i got it — this impulse to put <em>different people</em> in the <em>same room</em> and see what happens.
            </p>

            <p>
              i then started my career at linkedin. over six years i built ai customer support products, grew access to linkedin premium in emerging markets, and delivered data insights to fortune 500 customers that influenced $10M+ in recurring revenue. it was amazing. i met some of my best friends there. but i kept having ideas i couldn't stop thinking about. ai was happening, i was inching closer to my late twenties, so i left to do what any logical business person lost in their career would do...go back to business school.
            </p>

            <p>
              i'm now finishing up my mba at berkeley haas, where i've spent the last two years going deep on all the things that light me up.
            </p>

            <p>
              my main quest right now is{' '}
              <a href="https://diablopadel.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline underline-offset-2 hover:text-blue-800 transition-colors duration-75">diablo padel</a>
              {' '}— i've been playing{' '}
              <a href="https://youtu.be/rSIvS-Skg28?si=IihzfHS1kzGty_Yx" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline underline-offset-2 hover:text-blue-800 transition-colors duration-75">padel</a>
              {' '}since 2017 — my parents lived in panama and it's everywhere down there. i got hooked and couldn't believe it barely existed in the US. so i'm opening the east bay's first dedicated indoor padel facility. 4 courts, opening 2027.
            </p>

            <p className="font-medium text-gray-900">side quests:</p>

            <p>
              <a href="https://youtu.be/5Jm6bv3n1So?si=6idWq8JcACp1FpPm" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline underline-offset-2 hover:text-blue-800 transition-colors duration-75">goplai</a>
              {' '}— ai that watches your sports games and turns them into highlight reels automatically - starting with basketball. this is a product i would've LOVED to have growing up playing competitive sports my whole life. that's why we built it.{' '}
              <a href="https://form.typeform.com/to/hn44xRGO" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline underline-offset-2 hover:text-blue-800 transition-colors duration-75">sign up for our waitlist</a>
              {' '}— we're in beta!
            </p>

            <p>
              <a href="https://designmyroute.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline underline-offset-2 hover:text-blue-800 transition-colors duration-75">route art buddy</a>
              {' '}— i love cycling around sf and i couldn't figure out how these strava influencers were biking routes that made cool shapes on the map. so i made my own.
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

          <div className="mt-8 flex items-center gap-3">
            <a href="mailto:atramontin@berkeley.edu">
              <Button variant="outline" type="button" className="rounded-lg hover:scale-110 transition-all duration-300 cursor-pointer">
                <Mail className="h-4 w-4" />
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/angeltramontin" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" type="button" className="rounded-lg hover:scale-110 transition-all duration-300 cursor-pointer">
                <Linkedin className="h-4 w-4" />
              </Button>
            </a>
            <a href="https://x.com/tito_talks" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" type="button" className="rounded-lg hover:scale-110 transition-all duration-300 cursor-pointer">
                <Twitter className="h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
