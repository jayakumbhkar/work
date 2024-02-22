import React, { useEffect } from "react";
import Inputtextfield from "./atoms/ATMButton/Inputtextfield";
import { useState } from "react";
import ATMSelect from "./atoms/ATMSelect/ATMSelect";

const indianMobile = /^[6-9]\d{9}$/
const regEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/ 
const regName = /^Mr(?:s)?\.\s+[a-zA-Z]{4,}$/

const Studentform = ({handleSubmit, selectedStudent ,handleUpdate})=>{

        const initialValues = {
                name: "",
                email: "",
                mobile: "",
                batch: "",
                gender: ""
        }

        const [values , setValues]  = useState(initialValues)

       useEffect(()=>{
        console.log("Rendering")      
        setValues(selectedStudent || initialValues)
       },[selectedStudent] )

        // const {name,email,mobile,batch,gender}  = values

        const setFieldValue =(fieldName , fieldValue)=>{
                const newValues = {
                                 ...values , 
                                 [fieldName] : fieldValue,
                }

                setValues(newValues)
        }

        //   

        const resetForm =()=>{
                setValues(initialValues)
        }

        const genderOptions = ["Male", "Female","Other"]

        const batches = ["MERN","MEAN","MEVN","HTML","CSS","JavaScript"]

        const isValid = 
          
              indianMobile.test(values?.mobile)&&
              regEmail.test(values?.email) &&
              regName.test(values?.name) &&
              values?.batch !==""  && 
              values?.gender !==""

    return (
        <div>
            <div className="student-form-container">
            {/* Name */}
                    <Inputtextfield label="Name" placeholder="Enter Your Name" value={values?.name} onChange={(e) =>setFieldValue("name",e.target.value)} />

            {/* Gender */}
                   <div>
                        <label>Gender</label>

                        <div className="all-btn">

                                {genderOptions?.map((el)=>{

                                        const isSelected = el === values?.gender
                                      return (
                                        <button key={el} onClick={()=> setFieldValue("gender",el)} className={`transition ${isSelected ? "active-btn" : "radio-btn"}`} >{el}</button>
                                      )
                                })}
                           
                        </div>
                        
                   </div>

            {/* Email */}
                    <Inputtextfield label="Email" placeholder="Enter Your Email"  value={values?.email} onChange={(e) =>setFieldValue("email",e.target.value)} />

            {/* Mobile */}
                    <Inputtextfield label="Mobile" placeholder="Enter Your Mobile" value={values?.mobile} onChange={(e) =>setFieldValue("mobile",e.target.value)}  />

            {/* Batch */}
                    {/* <Inputtextfield label="Batch" placeholder="Enter Your Batch"  value={batch} onChange={(e) =>setBAtch(e.target.value)} /> */}

                    <ATMSelect  
                         value={values?.batch} 
                         onChange={(e) =>setFieldValue("batch",e.target.value)} 
                         options={batches}
                         placeholder={"Select Batch"}
                         label="Batch" 
                         
                         />                          
                        
                   <button disabled={!isValid} type="button" onClick={()=> 
                   
                        {
                                if(selectedStudent !==null){
                                      handleUpdate(
                                             { 
                                                name: values?.name,
                                                email: values?.email,
                                                mobile: values?.mobile,
                                                batch: values?.batch,
                                                gender: values?.gender,
                                              },
                                              resetForm
                                      )
                                }else{
                                        handleSubmit(
                                                { 
                                                  name: values?.name,
                                                  email: values?.email,
                                                  mobile: values?.mobile,
                                                  batch: values?.batch,
                                                  gender: values?.gender,
                                                },
                        
                                                 resetForm)
                                }
                        }

                        }
                     
                         className="submit-btn">Submit</button>


          </div>
        </div>
    )
}

export default Studentform