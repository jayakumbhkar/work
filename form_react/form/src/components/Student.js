import React, { useState } from "react";
import Inputtextfield from "./atoms/ATMButton/Inputtextfield";
// import { students } from "../dummyData/StudentData";
import Studentform from "./Studentform";
import Studenttable from "./Studenttable";

const Student = ()=>{

        const [students , setStudents] = useState([])

        const [selectedStudent , setSelectedStudent] =useState(null)

        const handleSubmit =(values,resetForm)=>{

        const {name, email,mobile,batch ,gender} = values

        const data ={
            name,
            email,
            mobile,
            batch,
            gender,
            id:`${name}-${mobile}`
        }

        setStudents([...students, data ])

         resetForm?.()  
        console.log(data)
      }

      const handleUpdate = (values,resetForm)=>{
              const result = students?.map(student =>{
              if(student?.id === selectedStudent?.id){
                student = {
                  ...values , 
                  id: selectedStudent?.id
                }
              }

              return student 
            })
             setStudents(result)
             resetForm?.()
             setSelectedStudent(null)

      }

    return (
       <div className="page-container">

        <Studentform handleSubmit={handleSubmit} handleUpdate={handleUpdate} selectedStudent={selectedStudent} />

        <Studenttable students={students} setStudents={setStudents} setSelectedStudent={setSelectedStudent} />

       </div>

    )
}

export default Student