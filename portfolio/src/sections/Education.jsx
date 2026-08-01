import { HighSchool, University } from "./Details.js";

function Education() {
    function mapCourses(courses){
        return courses.map((course, index) => (
            <div
                key={index}
                style={{
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <p style={{textAlign: "left", margin: "0", marginTop: "0.5rem"}}>{course.name}<br />{course.dates}</p>
            </div>
        ));
    }

    const EducationItem = ({ school, degree, gpa, courses, split }) => {
        const courses1 = courses.slice(0, split);
        const courses2 = courses.slice(split);
        return (
            <div
                key={school}
                className="card"
            >
                <h3 title={school}>{school}</h3>
                <div style={{alignItems: "center", justifyItems: "center", width: "100%"}}>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        alignContent: "center",
                        justifyContent: "center",
                    }}>
                        <h4>{degree}<br />GPA {gpa}</h4>
                    </div>
                    <div className="course-box">
                        <div style={{width: "fit-content"}}>
                            {mapCourses(courses1)}
                        </div>
                        <div style={{width: "fit-content"}}>
                            {mapCourses(courses2)}
                        </div>
                    </div>

                </div>
            </div>
        )
    }

    return (
        <section id="education">
            <h2 style={{marginLeft: "2rem"}}>Education</h2>
            <div className="card-grid">
                <EducationItem {...University} split={3} />
                <EducationItem {...HighSchool} split={0} />
            </div>
        </section>
    );
}
export default Education;
