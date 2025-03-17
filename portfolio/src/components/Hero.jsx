/**
 * @copyright 2024 Daryna Vershinina Diaz
 * @license Apache-2.0
 */

/**
 * Components
 */
import { ButtonPrimary, ButtonOutline } from "./Button";


const Hero = () => {
  return (
    <section id="home" className="pt-28 lg:pt-36">
      <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10">
        {/* Left Content */}
        <div className="space-y-5">
          {/* Profile and Status */}
          <div className="flex items-center gap-3">
            <figure className="img-box w-9 h-9 rounded-lg">
              <img
                src="/public/images/avatar-1.JPG"
                width={40}
                height={40}
                alt="Daryna Diaz"
                className="img-cover"
              />
            </figure>
            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
              <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
              </span>
              Available for work
            </div>
          </div>

          {/* Heading */}
          <h2 className="headline-1 max-w-[20ch] sm:max-w-[15ch] lg:max-w-[15ch]">
        💡 Crafting high-performance websites with clean, scalable code.
          </h2>

          {/* Buttons */}
          <div className="flex items-center gap-3">
            <ButtonPrimary 
            href='/DV_resume.pdf'
            label="Download Resume"
            icon="download"
            />
            <ButtonOutline
            href='#about'
            label='Scroll down'
            icon='Arrow_Downward'
            />
          </div>
        </div>

        {/* Right Banner */}
        <div className="hidden lg:block">
          <figure className="w-full max-w-[480px] ml-auto bg-gradient-to-t from-sky-400 via-25% to-black to-45% rounded-[100px] overflow-hidden">
            <img
              src="/images/hero-banner.png"
              width={656}
              height={800}
              alt="Daryna Diaz"
              className="w-full"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
