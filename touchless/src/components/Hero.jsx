/**
 * @copyright 2024 Daryna Vershinina Diaz
 * @license Apache-2.0
 */

const Hero = () => {
  return (
    <section id='home'className="pt-28 lg:pt-36">
       
                 <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10"> 
            <div className="flex items-center gap-3">
               <figure className="img-box w-9 h-9 rounded-lg">
               <img src='/images/avatar-1.jpg' 
               width={40} 
               height={40}
                alt='Touchless team' 
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
            <h2 className="headline-1">
            Building Scalable Modern Websites for the Future
            </h2>
            <div className="">
                ButtonPrimary

                ButtonOutLine
            </div>
            <figure className="">
               <img src='/images/hero-banner.png' width={656} height={800} alt='Touchless' className='w-full' />
                </figure> 
            </div> 
            
     </section>
  )
}

export default Hero