const FormInput = ({ label, name, type, defaultValue, onChange, disp }) => {
  return (
    <div className={`input-group mb-3 ${disp}`}>
      <span className="input-group-text text-bg-warning" id="basic-addon1">
        {label}
      </span>
      <input
        type={type}
        name={name}
        defaultValue={defaultValue}
        className="form-control"
        onChange={onChange}
        aria-describedby="basic-addon1"
        autoComplete="off"
      />
    </div>
  );
};
export default FormInput;
