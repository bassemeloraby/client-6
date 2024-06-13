import React from "react";

const FormCheckInput = ({ name, name1, value, defaultChecked, disabled }) => {
  return (
    <div className="form-check bg-warning  rounded text-capitalize m-1">
      
      <input
        className="form-check-input ps-1"
        type="checkbox"
        name={name}
        value={value}
        // id="flexCheckDefault"
        defaultChecked={defaultChecked}
        disabled={disabled}
      />
      <label className="form-check-label pe-2"
      //  htmlFor="flexCheckDefault"
       >
        {name1}
      </label>
    </div>
  );
};

export default FormCheckInput;
