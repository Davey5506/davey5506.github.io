function splitArray(arr, n) {
    const result = [];
    result.push(arr.slice(0, n));
    result.push(arr.slice(n));
    return result;
}

// Assemble Skills
const skill_names = [
        "Autodesk Fusion 360", 
        "SolidWorks",
        "Xilinx Vivado",
        "VHDL",
        "C/C++",
        "Python",
        "Communication",
        "Teamwork",
        "Project Management",
        "Problem-Solving"
    ];

const skill_details = [
    "Experienced with the 3D design and simulation suites as well as the EDA tools for PCB design.",
    "Experienced with the 3D design and wire/pipe routing tools.",
    "Proficient with Vivado toolchain for developing designs for use the AMD Xilinx FPGAs.",
    "Proficient in using VHDL to program an FPGA as part of undergraduate coursework and personal projects.",
    "Proficient in using C/C++ for embedded systems programming and general software development.",
    "Understand the syntax and control flow of Python, for use in embeded systems programming and web development.",
    "Able to communicate effectively with team members inorder to facilitate project progress.",
    "Experienced working with in teams to complete projects, both in academic and professional settings.",
    "Experienced in leading a team to complete a project in timely and cost effective manner.",
    "Able to approach problems in a systematic way to find effective solutions, both in academic and professional settings."
];

const Pskills = [];
for (let i = 0; i < skill_names.length; i++) {
    Pskills.push({
        name: skill_names[i],
        details: skill_details[i]
    });
}


// Assemble Education
const schools = [
    "Univsity of Delaware",
    "Penncrest High School"
]

const degrees = [
    "B.E. Electrical Engineering",
    "High School Diploma"
]

const gpas = [
    3.61,
    3.67
]

const dates = [
    "September 2024 - Present",
    "September 2020 - May 2024"
];

const courses = [
    // UD Courses
    [
        {
            name: "CPEG 222 - Microprocessor Systems",
            dates: "August 2025 - Present"
        },
        {
            name: "ELEG 205 - Analog Circuits I",
            dates: "August 2024 - Present"
        },
        {
            name: "MATH 243 - Analytic Geometry and Calculus C",
            dates: "August 2025 - Present"
        },
        {
            name: "PHYS 208 - Fundamental of Physics II",
            dates: "August 2025 - Present"
        },
        {
            name: "PHYS 228 - Fundamental of Physics Laboratory II",
            dates: "August 2025 - Present"
        }
    ],
    // Penncrest Courses
    [
        {
            name: "Manufacturing, Design and Engineering I",
            dates: "September 2022 - June 2023"
        },
        {
            name: "Manufacturing, Design and Engineering II",
            dates: "September 2023 - June 2024"
        }
    ]
];

const HighSchool = ({
        school: schools[1],
        degree: degrees[1],
        gpa: gpas[1],
        date: dates[1],
        courses: courses[1]
    });

const University = ({
        school: schools[0],
        degree: degrees[0],
        gpa: gpas[0],
        date: dates[0],
        courses: courses[0]
    });



// Assemble Awards
const Earnings = [
    {
        name: "Eagle Scout",
        issuer: "BSA Troop 85",
        date: "May 2024",
        details: ""
    },
    {
        name: "Team MVP",
        issuer: "University of Delaware, College of Engineering",
        date: "December 2024",
        details: "Voted by team mates as most valuable contributor to the success of our course project."
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
]

export { Pskills, HighSchool, University, Earnings};