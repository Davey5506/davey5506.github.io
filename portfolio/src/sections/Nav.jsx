import PropTypes from "prop-types";
import { useEffect } from "react";

function Nav({ sections, windowWidth, setWindowWidth, setMenuOpen }) {
    

    const elements = sections.map((section) => (
        <div key={section.name} className="var-background">
            <a href={section.path}>{section.name}</a>
        </div>));

    const Menu = (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
            <path d="M6 24H42M6 12H42M6 36H42" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    if (windowWidth > 768) {
        return (
            <nav>
                {elements}
            </nav>
        );
    } else {
        return (
            <button style={{"backgroundColor": "transparent", "border": "none"}}onClick={() => {setMenuOpen(prev => !prev)}}>
                <div className="menu-button">
                    {Menu}
                </div>
            </button>
        );
    }
}
    
Nav.propTypes = {
  windowWidth: PropTypes.number.isRequired,
  setWindowWidth: PropTypes.func.isRequired,
};
export default Nav;