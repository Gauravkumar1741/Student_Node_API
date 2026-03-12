const Student = require('../models/studentModel');


// GET HTML STUDENTS
exports.getStudentsHTML = async(req,res)=>{
try{

const students = await Student.find();

const html = `
<ul>
${students.map(s=>`<li>${s.name} - ${s.tot}</li>`).join('')}
</ul>
`;

res.send(html);

}catch(error){
res.status(500).json({error:"Error"});
}
};


// GET ALL STUDENTS
exports.getStudents = async(req,res)=>{
try{

const students = await Student.find({});
res.json(students);

}catch(error){
res.status(500).json({error:"Error"});
}
};


// GET STUDENT BY ID
exports.getStudentById = async(req,res)=>{
try{

const student = await Student.findById(req.params.id);

if(!student){
return res.status(404).json({msg:"Student not found"});
}

res.json(student);

}catch(error){
res.status(500).json({error:"Error"});
}
};


// CREATE STUDENT
exports.createStudent = async(req,res)=>{
try{

const body = req.body;

body.tot = Number(body.marks1) + Number(body.marks2) + Number(body.marks3);

const student = await Student.create(body);

res.status(201).json(student);

}catch(error){
res.status(500).json({error:"Error"});
}
};


// UPDATE STUDENT
exports.updateStudent = async(req,res)=>{
try{

const student = await Student.findByIdAndUpdate(
req.params.id,
req.body,
{new:true}
);

res.json(student);

}catch(error){
res.status(500).json({error:"Error"});
}
};


// DELETE STUDENT
exports.deleteStudent = async(req,res)=>{
try{

await Student.findByIdAndDelete(req.params.id);

res.json({msg:"Student deleted"});

}catch(error){
res.status(500).json({error:"Error"});
}
};