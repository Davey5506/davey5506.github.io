import { skills } from './Details.js';

function Skills() {
    const skillElements = skills.map((skill) => (
        <div key={skill.name} className="card">
            <h3>{skill.name}</h3>
            <p>{skill.details}</p>
        </div>
    ));

    return (
        <section id="skills">
            <h2 style={{marginLeft: "2rem"}}>Skills</h2>
            <div className="card-grid">
                {skillElements}
            </div>
        </section>
    )
}
export default Skills;
