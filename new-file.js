let mentorStudents=[];
let mentors= 
[
    {
        firstName: "misha",
        students: ["lia","jigo","kviro"]
    },
    {
        firstName: "gio",
        students: ["lia","jigo","kviro"]
    },
    {
        firstName: "akaki",
        students: ["lia","jigo","kviro"]
    }
];
for(let i=0;i<=mentors.length-1;i++){
    for(let k=0;k<mentors[i].students.length; k++){
        mentorStudents[mentorStudents.length]=mentors[i].students[k];
    }
}
console.log(mentorStudents);