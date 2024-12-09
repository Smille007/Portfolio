/**
 * @copyright 2024 Daryna Vershinina Diaz
 * @license Apache-2.0
 */

/**
 * Componenets
 **/ 
import { ButtonPrimary } from "./Button";

const sitemap = [
    {
      label: 'Home',
      href: '#home'
    },
    {
      label: 'About',
      href: '#about'
    },
    {
      label: 'Work',
      href: '#work'
    },
    {
      label: 'Reviews',
      href: '#reviews'
    },
    {
      label: 'Contact us',
      href: '#contact'
    }
  ];
  
  const socials = [
    {
      label: 'GitHub',
      href: 'https://www.github.com/smille007'
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/daryna-v-17469169/'
    },
    {
      label: 'Twitter X',
      href: 'https://x.com/TimothyDSnyder'
    },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/smille007'
    },
    {
      label: 'Touchless',
      href: ''
    }
  ];



const Footer = () => {
  return (
    <footer className="section">
        <div className="container">
            <div className="">

                <div className="">
                    <h2 className="headline-1">lets work together today!</h2>
                    <ButtonPrimary 
                    href="mailto:support@touchlesspos.io"
                    label="Start project"
                    icon="chevron_right"
                    />
                </div>
<div className="">
    <div>
        <p className="">Sitemap</p>
        <ul>
            {sitemap.map(({label, href}, key)=>(
                <li key={key}>
                    <a href={href} className="">
                        {label}
                    </a>
                </li>
            ))}
        </ul>
    </div>
  <div>
        <p className="">Socials</p>
        <ul>
            {socials.map(({label, href}, key)=>(
                <li key={key}>
                    <a href={href} target="_blank" className="">
                        {label}
                    </a>
                </li>
            ))}
        </ul>
    </div>
</div>
            </div>
<div className="">
    <a href="" className="">
        <img src="/images/logo.svg" width={40} height={40} alt="" className="Logo" />
    </a>
    <p className="">&copy; 2024 <span className="">Touchless</span></p>
</div>
            
        </div>
    </footer>
  )
}

export default Footer