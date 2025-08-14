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

export default skills;