//Algoritmo 9
let students = [
 {name:"Smith", average:80},
 {name:"Jenny", average:69},
 {name:"John", average:35},
 {name:"Tiger", average:55}
];
const output = student.map((student)=>{
    if(student.marks < 60){
        student.average += 20;
    }
    return student;
}).filter((student)=> student.average > 60);
console.log(output);

