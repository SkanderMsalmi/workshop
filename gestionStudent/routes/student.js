const router = require('express').Router();
const studentController = require('../controllers/student.controller.js');

// router.get('/all',studentController);
router.get('/student/:name',studentController.getStudentByName);
router.post('/add',studentController.addStudent);
router.get('/bigger',studentController.displayStudentsBiggerEighteen)
router.put('/update',studentController.updateStudent);
router.delete('/delete/:name',studentController.deleteStudent);
module.exports = router;