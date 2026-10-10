import portrait from '../assets/portrait.jpg';

function About() {
    return (
        <div className="about">
            <h2>About Me</h2>
            <div className="about-content">
                <div className="portrait-container">
                    <img src={portrait} alt="Portrait" className="portrait"></img>
                    <h4 style={{textAlign: "center", margin:"0"}}>David Kennedy</h4>
                </div>
                <p>
                    I am an Electrical Engineering student at the University of Delaware 
                    and a DoW SMART Scholar sponsored by the Naval Surface Warfare Center, 
                    Indian Head Division. As an Undergraduate Student Researcher at the Center for Composite Materials, 
                    I develop thermoformed printed circuits for conformal prosthetic electronics, 
                    using CAD and EDA tools such as Autodesk Fusion 360 and KiCAD for electronic design, 
                    simulation and manufacturing. In the Electrical and Computer Engineering department, 
                    I serve as an Undergraduate Lab Assistant for Analog Circuits I 
                    and a Grader for Microprocessor Systems, act as a department ambassador for prospective 
                    students and families, and represent students on the College of Engineering's Educational 
                    Activities Committee. I previously served as a Peer Mentor, teaching a cohort of 42 students 
                    CAD design and microcontroller programming. My technical toolkit includes analog circuits, 
                    signal processing, Python, C, and Xilinx Vivado, and I bring strong leadership and 
                    communication skills developed through Boy Scouts of America while earning my Eagle Scout rank.
                </p>
            </div>
            
        </div>
    );
}

export default About;