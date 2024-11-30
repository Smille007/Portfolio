/**
 * @copyright
 * 2024 Daryna Vershinina Diaz
 * @license Apache-2.0
 */

const aboutItems = [
    {
      label: "Jobs done",
      number: 45,
    },
    {
      label: "Years of experience",
      number: 10,
    },
  ];
  
  const About = () => {
    return (
      <section id="about" className="section">
        <div className="container">
          <div className="bg-zinc-800 p-7 rounded-2xl md:p-12">
            <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
              Welcome! We are Touchless! We have undergone the trial-and-error
              process on your behalf and have forged partnerships with the finest
              software solutions tailored to your business needs, whether you are
              in retail or the restaurant industry.
            </p>
            {/* Column Layout for Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-7">
              {aboutItems.map(({ label, number }, key) => (
                <div key={key} className="flex items-center md:mb-2">
                  <div className="text-2xl font-bold text-white">
                    <span>{number}</span>
                    <span className="text-emerald-400">+</span>
                  </div>
                  <p className="text-zinc-400 text-sm mt-2">{label}</p>
                </div>
              ))}
            </div>
            {/* Logo */}
            <div className="mt-8 flex justify-center">
              <img
                src="/images/logo.svg"
                alt="Logo"
                width={30}
                height={30}
                className=""
              />
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default About;
  