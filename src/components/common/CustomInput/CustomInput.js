import React from "react";

const CustomInput = (props) => {
  const{label, id, placeholder} = props
  return (
    <div className="form-group">
      {label && <label htmlFor={id}>{label}</label>}  
      <input
        type="text"
        className="form-control"
        id={id}
        placeholder={placeholder}
      />
    </div>
  );
}

export default CustomInput;
