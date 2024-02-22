import React from "react";

const ATMSelect = ({value, onChange, options, placeholder,label})=>{
        return (
            <div className="input-container">
            <label className="field-label">{label}</label>

            <select value={value} onChange={onChange} className="select-field">
            <option className="option-field" disabled value="">{placeholder} </option>

            {
                    options?.map((batchEl)=>{
                            return(
                                    <option  className="option-val" value={batchEl}> {batchEl} </option> 
                            )
                    })
            }

           </select>
          </div>
        )
}
export default ATMSelect