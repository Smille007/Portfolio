import { Suspense, lazy } from 'react';
import { ReactLenis } from 'lenis/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skill from './components/Skill';

const Work = lazy(() => import('./components/Work'));
const Review = lazy(() => import('./components/Review'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

gsap.registerPlugin(useGSAP, ScrollTrigger);

const App = () => {
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
      <Header />
      <main>
        <Hero />
        <About />
        <Skill />
        <Suspense fallback={<div className="p-6 text-center">Loading...</div>}>
          <Work />
          <Review />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </ReactLenis>
  );
};

export default App;
