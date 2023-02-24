const router = require('express').Router();
const studentController = require('../controllers/student.controller.js');

router.get('/all',studentController.getAllStudent);
router.get('/student/:name',studentController.getStudentByName);
router.get('/studentsNoteSorted',studentController.studentsNoteSorted)
router.get('/bigger',studentController.displayStudentsBiggerEighteen)
router.post('/add',studentController.addStudent);
router.put('/update',studentController.updateStudent);
router.put('/updateStudentNoteWithNameA',studentController.updateStudentNoteWithNameA)
router.delete('/delete/:name',studentController.deleteStudent);
module.exports = router;