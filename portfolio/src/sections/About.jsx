import portrait from '../assets/portrait.jpg';

function About(props) {
    return (
        <div className="about">
            <h2>About Me</h2>
            <div className="about-content">
                <div className="portrait-container">
                    <img src={portrait} alt="Portrait" className="portrait"></img>
                    <h4 style={{textAlign: "center"}}>David Kennedy</h4>
                </div>
                <p>
                    I am a second-year Electrical Engineering student with two years of hands-on experience with CAD programs, 
                    such as SolidWorks and Autodesk Fusion 360 gotten through school and personal projects. 
                    Eager to enhance my industry knowledge and technical skills 
                    through contributing to real-world projects and collaborating with a team of engineers. 
                    I have developed skills in team leadership, delegation, and interpersonal communication 
                    through Boy Scouts of America while working towards my Eagle Scout.
                </p>
            </div>
            
        </div>
    );
}

export default About;