const express = require('express');

const router = express.Router();

const {
getStudentsHTML,
getStudents,
getStudentById,
createStudent,
updateStudent,
deleteStudent
} = require('../controllers/studentController');


// Routes
router.get("/students", getStudentsHTML);

router.get("/api/students", getStudents);

router.get("/api/students/:id", getStudentById);

router.post("/api/students", createStudent);

router.patch("/api/students/:id", updateStudent);

router.delete("/api/students/:id", deleteStudent);


module.exports = router;