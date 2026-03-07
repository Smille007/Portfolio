import { Suspense, lazy } from 'react';
import { ReactLenis } from 'lenis/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skill from './components/Skill';
import Contact from './components/Contact';
import useCursorGlow from './hooks/userCursorGlow'

const Work = lazy(() => import('./components/Work'));
const Review = lazy(() => import('./components/Review'));
const Footer = lazy(() => import('./components/Footer'));

gsap.registerPlugin(useGSAP, ScrollTrigger);

const App = () => {
  useCursorGlow();

  useGSAP(() => {
    const elements = gsap.utils.toArray('.reveal-up');

    const animations = elements.map((element) =>
      gsap.to(element, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: element,
          start: '-200 bottom',
          end: 'bottom 80%',
          scrub: true,
        },
      })
    );

    return () => {
      animations.forEach((animation) => {
        animation.scrollTrigger?.kill();
        animation.kill();
      });
    };
  });

  return (
    <ReactLenis root>
      {/* Cursor glow */}
      <div
        id="cursor-glow"
        className="pointer-events-none fixed z-[999] h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-0 transition-opacity duration-300"
        style={{
          background:
            "radial-gradient(circle, rgba(56,189,248,0.15) 0%, rgba(56,189,248,0.05) 40%, transparent 70%)",
        }}
      />

      <Header />
      <main>
        <Hero />
        <About />
        <Skill />

        <Suspense fallback={<div className="p-6 text-center">Loading...</div>}>
          <Work />
          <Review />
        </Suspense>

        <Contact />
      </main>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </ReactLenis>
  );
};

export default App;
