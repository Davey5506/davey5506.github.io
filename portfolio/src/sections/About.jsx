import portrait from '../assets/portrait.jpg';

function About(props) {
    return (
        <section id="about">
            <h2>About Me</h2>
            <div className="about-content">
                <img src={portrait} alt="Portrait" className="portrait"></img>
                <p>
                    Second-year Electrical Engineering student with two years of direct experience using CAD programs, 
                    including SolidWorks and Autodesk Fusion 360, gained through academic and personal projects. 
                    Eager to expand industry knowledge and technical skills by contributing to real-world projects and collaborating with engineering teams. 
                    Proven leadership, delegation, and interpersonal communication skills developed through roles as Senior and Assistant Senior Patrol Leader in the Boy Scouts of America. 
                </p>
            </div>
            
        </section>
    );
}

export default About;