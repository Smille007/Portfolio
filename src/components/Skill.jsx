/**
 * @copyright 2024 Daryna Vershinina Diaz
 * @license Apache-2.0
 */

/**
 * Components
 */
import SkillCard from "./SkillCard";
import { skillsData } from "../data/skills";

const Skills = () => {
  return (
    <section className="section mt-20">
      <div className="container">
        <h2 className="headline-2 reveal-up">Essential Tools I Use</h2>

        {skillsData.map(({ category, skills }, index) => (
          <div key={index} className="mt-8">
            <h3 className="text-lg font-semibold text-zinc-200 reveal-up">
              {category}
            </h3>

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
