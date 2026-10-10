import PropTypes from "prop-types";
import { schools } from "./Details.js";

function CourseList({ courses }) {
    return (
        <div className="course-box">
            {courses.map((course) => (
                <p key={course.name} className="course">{course.name}<br />{course.dates}</p>
            ))}
        </div>
    );
}

const courseShape = PropTypes.shape({
    name: PropTypes.string.isRequired,
    dates: PropTypes.string.isRequired,
});

CourseList.propTypes = {
    courses: PropTypes.arrayOf(courseShape).isRequired,
};

function EducationItem({ school, degree, gpa, courses }) {
    return (
        <div className="card">
            <h3>{school}</h3>
            <div style={{alignItems: "center", justifyItems: "center", width: "100%"}}>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    alignContent: "center",
                    justifyContent: "center",
                }}>
                    <h4>{degree}<br />GPA {gpa}</h4>
                </div>
                <CourseList courses={courses} />
            </div>
        </div>
    );
}

EducationItem.propTypes = {
    school: PropTypes.string.isRequired,
    degree: PropTypes.string.isRequired,
    gpa: PropTypes.number.isRequired,
    courses: PropTypes.arrayOf(courseShape).isRequired,
};

function Education() {
    return (
        <section id="education">
            <h2 style={{marginLeft: "2rem"}}>Education</h2>
            <div className="card-grid">
                {schools.map((school) => (
                    <EducationItem key={school.school} {...school} />
                ))}
            </div>
        </section>
    );
}
export default Education;
