
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
      imgSrc: '/images/project-1.png',
      title: 'Full stack Wedding website-invitation',
      tags: ['API', 'SQL', 'Development'],
      projectLink: 'https://djwedding.netlify.app/'
    },
  //   {
  //     imgSrc: '/images/project-2.jpg',
  //     title: 'Free stock photo app',
  //     tags: ['API', 'SPA'],
  //     projectLink: 'https://pixstock-official.vercel.app/'
  //   },
  //   {
  //     imgSrc: '/images/project-3.jpg',
  //     title: 'Recipe app',
  //     tags: ['Development', 'API'],
  //     projectLink: ''
  //   },
  //   {
  //     imgSrc: '/images/project-4.jpg',
  //     title: 'Real state website',
  //     tags: ['Web-design', 'Development'],
  //     projectLink: 'https://github.com/codewithsadee-org/wealthome'
  //   },
  //   {
  //     imgSrc: '/images/project-5.jpg',
  //     title: 'eCommerce website',
  //     tags: ['eCommerce', 'Development'],
  //     projectLink: 'https://github.com/codewithsadee/anon-ecommerce-website'
  //   },
  //   {
  //     imgSrc: '/images/project-6.jpg',
  //     title: 'vCard Personal portfolio',
  //     tags: ['Web-design', 'Development'],
  //     projectLink: 'https://github.com/codewithsadee/vcard-personal-portfolio'
  //   },
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