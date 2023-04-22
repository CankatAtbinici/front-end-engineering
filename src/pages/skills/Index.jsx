import React from "react";
import { skillsData } from "../../fakeData/fakeData";
import SingleSkill from "../../components/project-components/skills/singleSkill";

function Skills(props) {
  return (
    <section className = {"container mx-auto"} >
      {skillsData.map((data) => (
        <SingleSkill
          title={data.title} 
          key={data.id} 
          description={data.desc}
          icon = {data.component}
        />
      ))}
    </section>
  );
}

export default Skills;
