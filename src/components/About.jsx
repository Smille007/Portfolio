/**
 * @copyright 2024 Daryna Vershinina Diaz
 * @license Apache-2.0
 */

const aboutItems = [
    {
      label: "Jobs done",
      number: 10,
    },
    {
      label: "Years of experience",
      number: 2,
    },
  ];
  
  const About = () => {
    return (
      <section id="about" className="section">
        <div className="container">
          <div className="bg-zinc-800 p-7 rounded-2xl md:p-12 reveal-up">
            <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
            👋 Hey, I’m Daryna - a web developer who turns ideas into reality. I specialize in building fast, responsive, and user-friendly websites that blend functionality with great design. With a strong foundation in front-end and back-end technologies, I create solutions that are both efficient and engaging.<br></br><br></br>
            🚀 Looking to work together? Feel free to reach out or grab my resume to learn more about my experience!
            </p>
            {/* Column Layout for Stats */}
            <div className="flex flex-wrap items-center gap-4 md:gap-7">
              {aboutItems.map(({ label, number }, key) => (
                <div key={key}>
                <div className="flex items-center md:mb-2">
                  <span className="text-2xl font-semibold md:text-4xl text-white">{number}</span>
                    <span className="text-emerald-400 font-semibold md:text-3xl">+</span>
                </div>
                <p className="text-zinc-400 text-sm mt-2">{label}</p>
                </div>
              ))}
          
              <img
                src="/images/logo.svg"
                alt="Logo"
                width={30}
                height={30}
                className="ml-auto rounded-full"
              />
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default About;
  