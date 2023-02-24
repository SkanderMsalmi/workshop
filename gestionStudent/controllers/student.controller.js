const Student = require('../models/Student');

exports.getStudentByName = (req,res,next)=>{
    const name = req.params.name;
    Student.findOne({Name:name},(err,student)=>{
        if(err) console.log("error : "+err);
        else{
            res.json(student);
        }
    })
};

exports.addStudent = (req,res,next)=>{
    new Student({
        Name:req.body.Name,
        Age:req.body.Age,
        Note:req.body.Note
    }).save(
        (err,newStudent)=>{
            if(err) console.log("error message : "+err);else{
                console.log(newStudent);
                res.json("Student : " + newStudent.Name + " Added !");
            }
        }
    )
}

exports.deleteStudent = (req,res,next)=>{
    const name = req.params.name;
    Student.findOneAndRemove({Name:name},(err,student)=>{
        if(err) console.log("error : "+err);
        else{
            res.json(student.Name + " deleted successful");
        }
    })
}

exports.updateStudent = (req,res,next)=>{
    Student.findOne({
        Name:req.body.Name
    }
    ).then(result =>{
        if(result){
            result.Age = req.body.Age;
            result.Name = req.body.Name;
            result.save().then(s=>res.status(201).send(s.Name+ " updated succefuly"))
            .catch(err => res.status(404).send());
        }
    }
    )
}

exports.displayStudentsBiggerEighteen = (req,res,next)=>{
    Student.find({Age:{ $gt: 18}},(err,students)=>{
        if(err)console.log("error : "+err);
        else{
            res.json(students);
        }
    })
}
// greater 18 Name start with A ==> add +2
exports.updateStudentNoteWithNameA = (req,res,next)=>{
Student.updateMany({Age:{$gt:18},Name:{$regex:/^A/}},{$inc:{Note:2}},(err,students)=>{
if(err) console.log(err);
else{
    res.json('updated Succesfully');
}
})
}

//Students with note >10 sorted
  exports.studentsNoteSorted = (req,res,next)=>{
    Student.find({Note:{$gt:10}}).sort({Name:'-1'}).then(
        f => res.status(201).send(f)
    ).catch((err)=>res.status(404).send(err));
}

exports.getAllStudent = (req,res,next)=>{
    Student.find().then(
        s => res.status(200).send(s)
    ).catch((err)=>res.status(404).send(err))
}