import React from "react";

const Inputtextfield = ({label , placeholder , value , onChange} )=>{
    return (
        <div className="input-container">
            <label className="field-label">{label}</label>
            <input  value={value} onChange={onChange} className="student-input-field" placeholder={placeholder} />
        </div>
    )
}

export default Inputtextfield