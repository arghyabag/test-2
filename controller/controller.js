const student = require('../models/student_model');
const teacher = require('../models/teacher_model');
const admin = require('../models/admin_model');


//
//  student
//

create_student = async(req,res)=>{
    const uid = req.body.uid
    const name = req.body.name
    const dob  = req.body.dob
    const course = req.body.course
    const password = req.body.password
    const gender = req.body.gender
    const bloodGroup = req.body.bloodGroup
    const admission_year = req.body.admission_year
    const address = req.body.address
    const email = req.body.email
    const marks = req.body.marks
    const grades = req.body.grades
    const section = req.body.section
    const cgpa = req.body.cgpa
    const sgpa = req.body.sgpa
    const phone = req.body.phone
    const semester = req.body.semester

  const newStudent = new student({
    uid : uid ,
    name : name ,
    dob : dob ,
    course : course ,
    password : password,
    gender : gender ,
    bloodGroup : bloodGroup,
    admission_year : admission_year,
    address : address ,
    email : email ,
    marks : marks ,
    grades : grades ,
    section : section ,
    cgpa : cgpa,
    sgpa : sgpa ,
    phone : phone ,
    semester : semester,
  })

  newStudent.save((err)=>{
          if(!err){
              return res.redirect('Confirmation');
          }else{
              console.log(err);
              return res.redirect("/");
          }
      });
}


//
//  teacher
//


create_teacher = async(req,res)=>{
    const eid = req.body.eid
    const name = req.body.name
    const dob = req.body.dob
    const spelization = req.body.spelization
    const password = req.body.password
    const gender = req.body.gender
    const bloodGroup = req.body.bloodGroup
    const joiningyear = req.body.joiningyear
    const address = req.body.address
    const email = req.body.email
    const marks = req.body.marks
    const attendance = req.body.attendance
    const grades = req.body.grades
    const phone = req.body.phone

    const newTeacher = new teacher({
        eid : eid,  
        name : name, 
        dob : dob,
        spelization : spelization, 
        password : password,
        gender : gender ,
        bloodGroup : bloodGroup , 
        joiningyear : joiningyear , 
        address : address ,
        email : email ,
        marks : marks ,
        attendance : attendance , 
        grades : grades, 
        phone : phone, 
    
    })
  
    newTeacher.save((err)=>{
            if(!err){
                return res.redirect('Confirmation');
            }else{
                console.log(err);
                return res.redirect("/");
            }
        });
  }




  
//
//  teacher
//




create_student = async(req,res)=>{
    const a_id = req.body.a_id
    const password = req.body.a_id

  
    const newAdmin = new admin({
        a_id : a_id ,
        password : password,
    })
  
    newAdmin.save((err)=>{
            if(!err){
                return res.redirect('Confirmation');
            }else{
                console.log(err);
                return res.redirect("/");
            }
        });
  }
  


