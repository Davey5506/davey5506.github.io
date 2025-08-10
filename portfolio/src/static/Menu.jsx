import PropTypes from "prop-types";

function Menu({ sections, menuOpen, setMenuOpen, windowWidth }) {
    const elements = sections.map((section => (
        <div key={section.name} className="var-background mobile-menu-item">
            <a href={section.path} onClick={() => {setMenuOpen(false)}}>{section.name}</a>
        </div>
    )));

    if (windowWidth <= 768) {
        return (
            <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
                <h1 className="var-background mobile-menu-item" onClick={() => {setMenuOpen(false)}}>DK</h1>
                {elements}
            </div>
        )
    } else {
        return null;
    }
    
}
Menu.propTypes = {
    sections: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            path: PropTypes.string.isRequired,
        })
    ).isRequired,
    menuOpen: PropTypes.bool.isRequired,
};
export default Menu;