import { useRef, useState, useLayoutEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { HighSchool, University } from "./Details.js";

function Education() {
    const scrollContentRef = useRef(null);
    const [containerHeight, setContainerHeight] = useState('auto');

    const scroll = (direction) => {
        if (scrollContentRef.current) {
            const { current } = scrollContentRef;
            const scrollAmount = current.clientWidth;
            current.scrollBy({
                left: direction === 'right' ? scrollAmount : -scrollAmount,
                behavior: 'smooth'
            });
        }
    };

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
                className="scroll-item"
            >
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
            <div className="scroll-container">
                <div
                    className="scroll-content"
                    ref={scrollContentRef}
                >
                    <EducationItem {...University} split={3} />
                    <EducationItem {...HighSchool} split={0} />
                </div>
                <button className="scroll-button left" onClick={() => scroll('left')}><FaChevronLeft /></button>
                <button className="scroll-button right" onClick={() => scroll('right')}><FaChevronRight /></button>
            </div>
        </section>
    );
}
export default Education;