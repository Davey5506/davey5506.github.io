import { useRef, useState, useLayoutEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Schools } from "./Details.js";

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
                    flexDirection: "row",
                    alignContent: "center",
                    justifyContent: "center",
                }}
            >
                <p style={{textAlign: "left"}}>{course.name}<br />{course.dates}</p>
            </div>
        ));            
    }
    
    const educationElements = Schools.map((school) => (
        <div 
            key={school.school} 
            className="scroll-item"
        >
            <h3>{school.school}</h3>
            <div style={{alignItems: "center"}}>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    alignContent: "center",
                    justifyContent: "center",
                }}>
                    <h4>{school.degree}<br />GPA {school.gpa}</h4>
                </div>
                {mapCourses(school.courses)}
            </div>
        </div>
    ));

    return (
        <section id="education">
            <h2 style={{marginLeft: "2rem"}}>Education</h2>
            <div className="scroll-container">
                <div
                    className="scroll-content"
                    ref={scrollContentRef}
                >
                    {educationElements}
                </div>
                <button className="scroll-button left" onClick={() => scroll('left')}><FaChevronLeft /></button>
                <button className="scroll-button right" onClick={() => scroll('right')}><FaChevronRight /></button>
            </div>
        </section>
    )
}
export default Education;