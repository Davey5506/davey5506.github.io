import PropTypes from 'prop-types';
import Nav from './Nav';
function Header({ sections, windowWidth, setWindowWidth, setMenuOpen }) {
    return (
        <>
            <header>
                <a href="#About"><h1 className="var-background">DK</h1></a>
                <Nav sections={sections} windowWidth={windowWidth} setWindowWidth={setWindowWidth} setMenuOpen={setMenuOpen}/>
                
            </header>
            <div id="About" style={{paddingBottom:"3rem"}}></div>
        </>
    )
}
Header.propTypes = {
    windowWidth: PropTypes.number.isRequired,
    setWindowWidth: PropTypes.func.isRequired
}
export default Header