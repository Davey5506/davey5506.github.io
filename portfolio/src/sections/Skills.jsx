import { useRef, useState, useLayoutEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Pskills } from './Details.js';

function Skills() {
    const scrollContentRef = useRef(null);

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

    const skillElements = Pskills.map((skill) => (
        <div key={skill.name} className="scroll-item">
            <h3>{skill.name}</h3>
            <h4>{skill.details}</h4>
        </div>
    ));

    return (
        <section id="skills">
            <h2 style={{marginLeft: "2rem"}}>Skills</h2>
            <div className="scroll-container">
                <div
                    className="scroll-content"
                    ref={scrollContentRef}
                >
                    {skillElements}
                </div>
                <button className="scroll-button left" onClick={() => scroll('left')}><FaChevronLeft /></button>
                <button className="scroll-button right" onClick={() => scroll('right')}><FaChevronRight /></button>
            </div>
        </section>
    )
}
export default Skills;