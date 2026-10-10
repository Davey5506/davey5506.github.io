import { experience } from './Details.js';

function Experience() {
    const experienceElements = experience.map((job) => (
        <div key={`${job.title}-${job.organization}`} className="card">
            <h3 className="job-title">{job.title}</h3>
            {job.details.length > 0 && (
                <ul>
                    {job.details.map((detail) => (
                        <li key={detail}>{detail}</li>
                    ))}
                </ul>
            )}
        </div>
    ));

    return (
        <section id="experience">
            <h2 style={{marginLeft: "2rem"}}>Experience</h2>
            <div className="card-grid">
                {experienceElements}
            </div>
        </section>
    )
}
export default Experience;
