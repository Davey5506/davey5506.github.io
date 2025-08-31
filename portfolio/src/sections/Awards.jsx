import { useRef, useState, useLayoutEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Earnings } from './Details.js';

function Awards() {
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

    const awardElements = Earnings.map((earning) => (
        <div key={earning.name} className="scroll-item" style={{alignContent: "center"}}>
            <h3>{earning.name}</h3>
            <h5 style={{textAlign: "center"}}>{earning.issuer}<br />{earning.date}</h5>
            <p>{earning.details}</p>
        </div>
    ));

    return (
        <section id="Awards">
            <h2 style={{marginLeft: "2rem"}}>Awards</h2>
            <div className="scroll-container">
                <div
                    className="scroll-content"
                    ref={scrollContentRef}
                >
                    {awardElements}
                </div>
                <button className="scroll-button left" onClick={() => scroll('left')}><FaChevronLeft /></button>
                <button className="scroll-button right" onClick={() => scroll('right')}><FaChevronRight /></button>
            </div>
        </section>
    )
}
export default Awards;