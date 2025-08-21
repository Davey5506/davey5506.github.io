import { useRef, useState, useLayoutEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { education } from "./Details.js";

function Education() {
    const scrollContentRef = useRef(null);
    const [containerHeight, setContainerHeight] = useState('auto');

    useLayoutEffect(() => {
        const calculateHeight = () => {
            if (scrollContentRef.current) {
                const items = scrollContentRef.current.children;
                let maxHeight = 0;
                for (let i = 0; i < items.length; i++) {
                    if (items[i].offsetHeight > maxHeight) {
                        maxHeight = items[i].offsetHeight;
                    }
                }
                if (maxHeight > 0) {
                    setContainerHeight(maxHeight);
                }
            }
        };

        calculateHeight();
        window.addEventListener('resize', calculateHeight);
        return () => window.removeEventListener('resize', calculateHeight);
    }, [skills]);

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

    const educationElements = education.map((education, index) => (
        <div key={index} className="scroll-item">
            <h3>{education.school}</h3>
            <h4>{education.degree} {education.gpa}</h4>
            <p>{education.courses}</p>
        </div>
    ));

    return (
        <>
            <h2 style={{marginLeft: "2rem"}}>Skills</h2>
            <div className="scroll-container">
                <div
                    className="scroll-content"
                    ref={scrollContentRef}
                    style={{ height: containerHeight === 'auto' ? 'auto' : `${containerHeight}px` }}
                >
                    {skillElements}
                </div>
                <button className="scroll-button left" onClick={() => scroll('left')}><FaChevronLeft /></button>
                <button className="scroll-button right" onClick={() => scroll('right')}><FaChevronRight /></button>
            </div>
        </>
    )
}
export default Education;