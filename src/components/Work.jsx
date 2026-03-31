
/**
 * @copyright 2024 Daryna Vershinina Diaz
 * @license Apache-2.0
 */

/**
 * Components
 */
import ProjectCard from "./ProjectCard";

const works = [
    {
      imgSrc: '/images/project-klassiki.jpg',
      title: 'Klassiki — LG WebOS Smart TV App',
      tags: ['React', 'WebOS', 'Streaming'],
      projectLink: 'https://github.com/Smille007/klassiki-lg-mvp'
    },
    {
      imgSrc: '/images/project-1.png',
      title: 'Wedding Website & Invitation',
      tags: ['React', 'SQL', 'Full Stack'],
      projectLink: 'https://github.com/Smille007/Wedding1'
    },
    {
      imgSrc: '/images/project-capstone.jpg',
      title: 'Impactify — Civic Engagement App',
      tags: ['React', 'Node.js', 'Full Stack'],
      projectLink: 'https://impactify.netlify.app/'
    },
    {
      imgSrc: '/images/project-portfolio.jpg',
      title: 'Personal Portfolio Website',
      tags: ['React', 'Tailwind CSS', 'GSAP'],
      projectLink: 'https://github.com/Smille007/Portfolio'
    },
   ];

export const Work = () => {
  return (
    <section
     id="work"
     className="section"
     >
        <div className="container">
        
            <h2 className="headline-2 mb-8 reveal-up">
            My portfolio highlights
            </h2>
            <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                {works.map(({imgSrc, title, tags, projectLink}, key)=>(
                   <ProjectCard
                   key={key}
                   imgSrc={imgSrc}
                   title={title}
                   tags={tags}
                   projectLink={projectLink}
                   classes='reveal-up'
                   />
                ))}
            </div>
        </div>
     </section>
  )
}
export default Work