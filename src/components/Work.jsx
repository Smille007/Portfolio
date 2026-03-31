
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
      imgSrc: '/images/project-capstone.jpg',
      title: 'Impactify — Civic Engagement App',
      tags: ['React', 'Node.js', 'Express.js', 'PostgreSQL', 'Bootstrap'],
      projectLink: 'https://group2app.netlify.app/',
      githubLink: 'https://github.com/Smille007/capstone_frontend'
    },
    {
      imgSrc: '/images/project-1.png',
      title: 'Personal Blog App',
      tags: ['React', 'Node.js', 'Express.js', 'PostgreSQL'],
      projectLink: 'https://github.com/Smille007/Portfolio_Project_Frontend',
      githubLink: 'https://github.com/Smille007/Portfolio_Project_Frontend'
    },
    {
      imgSrc: '/images/project-2.jpg',
      title: 'Wedding Invitation App',
      tags: ['React', 'CSS', 'PostgreSQL'],
      projectLink: 'https://github.com/Smille007/Wedding1',
      githubLink: 'https://github.com/Smille007/Wedding1'
    },
    {
      imgSrc: '/images/project-3.jpg',
      title: 'Inventory Management App',
      tags: ['HTML', 'CSS', 'JavaScript'],
      projectLink: 'https://github.com/Smille007/-Inventory-Web-Application-Project',
      githubLink: 'https://github.com/Smille007/-Inventory-Web-Application-Project'
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