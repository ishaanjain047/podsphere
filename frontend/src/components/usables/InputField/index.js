import React from "react";
import "./index.css";

const InputField = ({ value, label, name, placeholder, type, onChange }) => {
  console.log(onChange);
  return (
    <div className="form-group">
      {label && <label htmlFor="input-field">{label}</label>}
      <input
        type={type}
        value={value}
        name={name}
        className="form-control"
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default InputField;
