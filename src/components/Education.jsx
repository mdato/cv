import React from "react";
import { educationData } from "../cv";
import Title from "./Shared/Title";
const Education = () => {
  return (
    <section className="education section" id="education">
      <Title title={educationData.title}></Title>
      <div className="education__container bd-grid">
        {educationData.educations.map((education, i) => (
          <div className="education__content" key={i}>
            <div className="education__time">
              <span className="education__rounder" />
              {education.line && <span className="education__line"></span>}
            </div>
            <div className="education__data bd-grid">
              <h3 className="education-title">{education.title}</h3>
              <span className="education__studies"> {education.studies} </span>
              <div className="education__year">{education.year}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
