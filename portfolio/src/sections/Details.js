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
    "Experienced in working with teams to complete projects, both in academic and professional settings.",
    "Experienced in leading a team to complete a project in timely and cost effective manner.",
    "Able to approach problems in a systematic way to find effective solutions, both in academic and professional settings."
];

const skills = [];
for (let i = 0; i < skill_names.length; i++) {
    skills.push({
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
    "Diploma"
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
            name: "CPEG 202 - Introduction to Digital Systems",
            url: "https://catalog.udel.edu/preview_course.php?catoid=90&coid=576012&print",
            dates: "Febuaryu 2025 - May 2025"
        },
        {
            name: "CISC 210 - Introduction to Systems Programming",
            url: "https://catalog.udel.edu/preview_course.php?catoid=90&coid=577546&print",
            dates: "September 2024 - December 2024"
        },
        {
            name: "EGGG 101 - Introduction to Engineering",
            url: "https://catalog.udel.edu/preview_course.php?catoid=90&coid=575686&print",
            dates: "September 2024 - December 2024"
        },
        {
            name: "CISC 106 - Computer Science for Engineers",
            url: "https://catalog.udel.edu/preview_course.php?catoid=90&coid=575162&print",
            dates: "September 2024 - December 2024"
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

const education = [];
for ( let i = 0; i < schools.length; i++) {
    education.push({
        school: schools[i],
        degree: degrees[i],
        gpa: gpas[i],
        date: dates[i],
        courses: courses[i]
    });
}

export default { skills, education };