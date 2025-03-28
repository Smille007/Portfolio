/**
 * @copyright 2024 Daryna Vershinina Diaz
 * @license Apache-2.0
 */

/**
 * Components
 */
import SkillCard from "./SkillCard";

const skillsData = [
  {
    category: "Core Web Development",
    skills: [
      { imgSrc: "/images/javascript.svg", label: "JavaScript", desc: "Programming Language" },
      { imgSrc: "/images/typescript.svg", label: "TypeScript", desc: "Typed JavaScript" },
      { imgSrc: "/images/html5.svg", label: "HTML", desc: "Markup Language" },
      { imgSrc: "/images/css3.svg", label: "CSS", desc: "Styling & Layout" },
    ],
  },
  {
    category: "Frontend Development",
    skills: [
      { imgSrc: "/images/react.svg", label: "React", desc: "Frontend Library" },
      { imgSrc: "/images/tailwindcss.svg", label: "Tailwind CSS", desc: "Utility-first CSS" },
      { imgSrc: "/images/bootstrap.svg", label: "Bootstrap", desc: "CSS Framework" },
      { imgSrc: "/images/sass.svg", label: "SASS", desc: "CSS Preprocessor" },
    ],
  },
  {
    category: "Backend Development",
    skills: [
      { imgSrc: "/images/nodejs.svg", label: "Node.js", desc: "JavaScript Runtime" },
      { imgSrc: "/images/expressjs.svg", label: "Express.js", desc: "Backend Framework" },
      { imgSrc: "/images/api.svg", label: "REST APIs", desc: "Web Services" },
      { imgSrc: "/images/security.svg", label: "JWT & Bcrypt.js", desc: "Authentication" },
    ],
  },
  {
    category: "Databases & Data Handling",
    skills: [
      { imgSrc: "/images/Postgresql_elephant.svg", label: "PostgreSQL", desc: "SQL Database" },
      { imgSrc: "/images/mongodb.svg", label: "MongoDB", desc: "NoSQL Database" },
      { imgSrc: "/images/mysql.svg", label: "MySQL", desc: "Relational Database" },
      { imgSrc: "/images/graphql.svg", label: "GraphQL", desc: "Data Query Language" },
    ],
  },
  {
    category: "Version Control & Deployment",
    skills: [
      { imgSrc: "/images/git.svg", label: "Git", desc: "Version Control" },
      { imgSrc: "/images/postman.svg", label: "Postman", desc: "API Testing" },
    ],
  },
  {
    category: "Development & Collaboration Tools",
    skills: [
      { imgSrc: "/images/vscode.svg", label: "VS Code", desc: "Code Editor" },
      { imgSrc: "/images/figma.svg", label: "Figma", desc: "Design Tool" },
      { imgSrc: "/images/slack.svg", label: "Slack", desc: "Team Communication" },
      { imgSrc: "/images/trello.svg", label: "Trello", desc: "Project Management" },
    ],
  },
];

const Skills = () => {
  return (
    <section className="section mt-20">
      <div className="container">
        <h2 className="headline-2 reveal-up">Essential Tools I Use</h2>
        {skillsData.map(({ category, skills }, index) => (
          <div key={index} className="mt-8">
            <h3 className="text-lg font-semibold text-zinc-200 reveal-up">{category}</h3>
            <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4">
              {skills.map(({ imgSrc, label, desc }, key) => (
                <SkillCard
                  key={key}
                  imgSrc={imgSrc}
                  label={label}
                  desc={desc}
                  classes="reveal-up"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;