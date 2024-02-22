import React, { useState } from "react";
import { students } from "../dummyData/StudentData";
const Studenttable =({students , setStudents, setSelectedStudent})=>{

    

    const handleDelete = (studentId)=>{
        const newFilteredData = students?.filter((student)=>{
                return student?.id !== studentId
                
        })
          setStudents(newFilteredData)
    }

    const handleEdit = (student)=>{
            setSelectedStudent(student)
    }

    return (
        <div>
            <div className="student-table-container">
              <table width="900px" border="1px solid black" style={{borderCollapse:"collapse"}}>
                  <thead>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th>Batch</th>
                    <th>Action</th>
                  </thead>

                  <tbody>
                       {
                        students?.map((student,index)=>{
                                return (
                                    <tr key={student?.id}>
                                        <td>{student?.name}</td>
                                        <td>{student?.gender}</td>
                                        <td>{student?.email}</td>
                                        <td>{student?.mobile}</td>
                                        <td>{student?.batch}</td>
                                        <td>
                                            <div className="both-btn">
                                                <button className="edit-btn" type="button" onClick={()=> handleEdit(student)} >Edit</button>
                                                <button className="delete-btn" type="button" onClick={()=> handleDelete(student?.id)} >Delete</button>
                                            </div>
                                            
                                        </td>
                                           
                                    </tr>
                                )
                        })
                       }
                  </tbody>
              </table>
          </div>
        </div>
    )
}

export default Studenttable