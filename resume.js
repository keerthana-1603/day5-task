console.log(`                         ------------------- MY RESUME --------------------`)

console.log(`                Recent IT graduate eager to excel in software development at an IT company.`)
const resumeData = {
    "name": "keerthana",
    //   "email": "keerthanakani27@email.com",
    //   "phone": "9087487962",
    //   "address": "Tamil nadu,India",
    // "summary": "Recent IT graduate eager to excel in software development at an IT company.",
        "degree": "Bachelor of Science in Computer Science",
        "name of university": " Madurai KamarajUniversity",
        "graduationYear": 2023,
    

    "skills": [
      "JavaScript",
      "Node.js",
      "React",
      "HTML/CSS",
      "Git",
    ],
    "languages": ["Tamil (Fluent)", "English (Intermediate)"],
    "references": [
      {
        "name": "Jane Smith",
        "company": "TechCo Inc.",
        "email": "jane@email.com",
        "phone": "(555) 123-4567"
      },
      {
        "name": "Bob Johnson",
        "company": "CodeTech Ltd.",
        "email": "bob@email.com",
        "phone": "(555) 987-6543"
      }
    ]
  };
  const person={
    "Father name":"KaniLakshmanan",
    "Mother name":"Uma maheswari",
    "Date of Birth":"16/07/2003",
    "email": "keerthanakani27@email.com",
      "phone": "9087487962",
      "address": "Tamil nadu,India",
  };
  
  //console.log(JSON.stringify(resumeData, null, 2));
  let objectkeys=Object.keys(resumeData);
//console.log(objectkeys);
for (let values of objectkeys){ 
    console.log(`${values} :${resumeData[values]} `);
};
console.log(`\n---Personal Details---`);
let object2keys=Object.keys(person);
for (let value of object2keys){ 
    console.log(`${value} :${person[value]} `);
};
  