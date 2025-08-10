import PropTypes from 'prop-types';
import Nav from './Nav';
function Header({ sections, windowWidth, setWindowWidth, setMenuOpen }) {
    return (
        <header>
            <h1 className="var-background">DK</h1>
            <Nav sections={sections} windowWidth={windowWidth} setWindowWidth={setWindowWidth} setMenuOpen={setMenuOpen}/>
            
        </header>
    )
}
Header.propTypes = {
    windowWidth: PropTypes.number.isRequired,
    setWindowWidth: PropTypes.func.isRequired
}
export default Header