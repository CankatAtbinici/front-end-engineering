import React from "react";
import { skillsData } from "../../../mock-data/mockData";
import SingleSkill from "./SingleSkill";

function Index(props) {

    return (
        <section className = {"container mx-auto py-5 mb-10"} >
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

export default Index;