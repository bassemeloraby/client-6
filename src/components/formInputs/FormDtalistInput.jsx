import React from "react";

const FormDtalistInput = ({
  label,
  name,
  type,
  defaultValue,
  size,
  listDB,
  onInput,
  list,
}) => {
  return (
    <div className="input-group mb-3">
      {/* <label htmlFor={name} className="label">
        <span className="label-text capitalize">{label}</span>
      </label>*/}
      <span className="input-group-text text-bg-warning" id="basic-addon1">
        {label}
      </span>
      <input
        type={type}
        name={name}
        defaultValue={defaultValue}
        className="form-control rounded"
        aria-describedby="basic-addon1"
        autoComplete="off"
        // className={`input input-bordered ${size}`}
        list={list}
        onInput={onInput}
      />
      <datalist id={list}>
        {listDB.map((c, i) => (
          <option key={i} value={c}>
            {c}
          </option>
        ))}
      </datalist>
    </div>
  );
};

export default FormDtalistInput;
