// Skills
const skills = [
    {
        name: "KiCAD",
        details: "Skilled in using KiCAD EDA software to design, simulate and manufacture electronic circuits and PCBs."
    },
    {
        name: "Autodesk Fusion 360",
        details: "Experienced with its 3D design and simulation suites."
    },
    {
        name: "SolidWorks",
        details: "Experienced with its 3D design and wire/pipe routing tools."
    },
    {
        name: "Xilinx Vivado",
        details: "Proficient with the Vivado toolchain for developing designs for AMD Xilinx FPGAs."
    },
    {
        name: "VHDL",
        details: "Proficient in using VHDL to program an FPGA as part of undergraduate coursework and personal projects."
    },
    {
        name: "C/C++",
        details: "Proficient in using C/C++ for embedded systems programming and general software development."
    },
    {
        name: "Python",
        details: "Understand the syntax and control flow of Python for use in embedded systems programming and web development."
    },
    {
        name: "Communication",
        details: "Able to communicate effectively with team members in order to facilitate project progress."
    },
    {
        name: "Teamwork",
        details: "Experienced working in teams to complete projects, both in academic and professional settings."
    },
    {
        name: "Project Management",
        details: "Experienced in leading a team to complete a project in a timely and cost-effective manner."
    },
    {
        name: "Problem-Solving",
        details: "Able to approach problems in a systematic way to find effective solutions, both in academic and professional settings."
    }
];

// Experience (most recent first)
const experience = [
    {
        title: "Educational Activities Committee, Student Representative",
        organization: "Electrical and Computer Engineering, University of Delaware",
        date: "September 2026 - Present",
        details: [
            "Provide a student's perspective to the University of Delaware College of Engineering's Educational Activities Committee."
        ]
    },
    {
        title: "Undergraduate Lab Assistant",
        organization: "Electrical and Computer Engineering, University of Delaware",
        date: "August 2026 - Present",
        details: [
            "Host student office hours for assistance with analog circuit concepts.",
            "Run lab sections where students demonstrate understanding of lecture topics from ELEG 205, Analog Circuits I."
        ]
    },
    {
        title: "ECE Grader",
        organization: "Electrical and Computer Engineering, University of Delaware",
        date: "August 2026 - Present",
        details: [
            "Grade labs for CPEG 222, Microprocessor Systems.",
            "Help foster understanding of microprocessor functions and architectures."
        ]
    },
    {
        title: "Undergraduate Student Researcher",
        organization: "University of Delaware",
        date: "June 2026 - Present",
        details: [
            "Developed a thermoforming process for printing conductive circuits on curved surfaces for prosthetic pressure sensing.",
            "Printed and formed circuits with an nScrypt 3Dn-300 and a Formech 450DT vacuum former, reducing ink cracking and eliminating substrate warping.",
            "Presented the research at the Symposium for Undergraduate Research and Creative Activity."
        ]
    },
    {
        title: "ECE Ambassador",
        organization: "Electrical and Computer Engineering, University of Delaware",
        date: "February 2026 - Present",
        details: [
            "Introduced prospective students, parents, and guardians to the programs offered by the Electrical and Computer Engineering Department.",
            "Clarified details about campus life, housing, and career-building opportunities.",
            "Demonstrated the high community standards of the Electrical and Computer Engineering Department."
        ]
    },
    {
        title: "Peer Mentor",
        organization: "University of Delaware",
        date: "August 2025 - May 2026",
        details: [
            "Facilitated weekly discussion groups for engineering students to enhance understanding of complex course concepts.",
            "Applied skills in leadership and communication by aiding students in understanding tools and concepts needed to succeed in the course.",
            "Taught a cohort of 42 students concepts such as using Autodesk Fusion 360 and programming microcontrollers."
        ]
    }
];

// Education (rendered in this order)
const schools = [
    {
        school: "University of Delaware",
        degree: "B.E. Electrical Engineering",
        gpa: 3.63,
        date: "September 2024 - Present",
        courses: [
            { name: "ELEG 309 - Electronic Circuit Analysis I", dates: "February 2026 - May 2026" },
            { name: "ELEG 305 - Signals and Systems", dates: "February 2026 - May 2026" },
            { name: "ELEG 298 - ECE Design Challenges", dates: "February 2026 - May 2026" },
            { name: "MATH 351 - Engineering Mathematics I", dates: "February 2026 - May 2026" },
            { name: "CPEG 222 - Microprocessor Systems", dates: "August 2025 - December 2025" },
            { name: "ELEG 205 - Analog Circuits I", dates: "August 2025 - December 2025" },
            { name: "MATH 243 - Analytic Geometry and Calculus C", dates: "August 2025 - December 2025" },
            { name: "PHYS 208 - Fundamentals of Physics II", dates: "August 2025 - December 2025" },
            { name: "PHYS 228 - Fundamentals of Physics Laboratory II", dates: "August 2025 - December 2025" }
        ]
    },
    {
        school: "Penncrest High School",
        degree: "High School Diploma",
        gpa: 3.67,
        date: "September 2020 - May 2024",
        courses: [
            { name: "Manufacturing, Design and Engineering I", dates: "September 2022 - June 2023" },
            { name: "Manufacturing, Design and Engineering II", dates: "September 2023 - June 2024" }
        ]
    }
];

// Awards
const awards = [
    {
        name: "DoW SMART Scholarship",
        issuer: "U.S. Department of War",
        date: "April 2026",
        details: "SMART is a one-to-one scholarship-for-service program hosted by the United States Department of War (DoW) since 2006. Its mission is to promote the development of domestic engineering talent within the DoW, and it has funded the education of over 6,000 students ranging from undergraduates to PhD students."
    },
    {
        name: "Dean's List",
        issuer: "University of Delaware",
        date: "December 2024, December 2025",
        details: "Awarded for achieving a semester GPA of 3.5 or higher."
    },
    {
        name: "Eagle Scout",
        issuer: "Boy Scouts of America, Troop 85",
        date: "May 2024",
        details: ""
    },
    {
        name: "Team MVP",
        issuer: "University of Delaware, College of Engineering",
        date: "December 2024",
        details: "Voted by teammates as the most valuable contributor to the success of our course project."
    },
    {
        name: "TechCraft Excellence",
        issuer: "University of Delaware, College of Engineering",
        date: "December 2024",
        details: "Awarded for demonstrating exceptional skill with CAD software and embedded systems programming."
    },
    {
        name: "Excellence in Engineering",
        issuer: "Penncrest High School",
        date: "June 2024",
        details: "Awarded for outstanding performance in the Manufacturing, Design and Engineering program."
    }
];

export { skills, experience, schools, awards };

export const contact = {
    firstName: "David",
    lastName: "Kennedy",
    title: "Electrical Engineering Student",
    organization: "University of Delaware",
    synopsis: "I am an Electrical Engineering student at the University of Delaware and a DoW SMART Scholar " +
        "sponsored by the Naval Surface Warfare Center, Indian Head Division. I research in mold electronics " +
        "for use in prosthetics, and I support the" +
        "Analog Circuits I and Microprocessor Systems courses at the University of Delaware.",
    email: "kennedyd@udel.edu",
    phone: "+14845741810",
    links: [
        { name: "LinkedIn", label: "david-kennedy-mmvi", url: "https://www.linkedin.com/in/david-kennedy-mmvi" },
        { name: "GitHub", label: "Davey5506", url: "https://github.com/Davey5506" },
        { name: "Website", label: "www.davidkennedy.us", url: "https://www.davidkennedy.us" }
    ]
};
