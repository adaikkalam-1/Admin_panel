import PropTypes from "prop-types";
import "./input.css";
const Input = ({
  label,
  className,
  type,
  name,
  placeholder,
  onChange,
  value,
  style,
  disabled,
  required,
  error,
}) => {
  return (
    <div>
      <label className="input_label">
        {label}
        {required ? (<small style={{color:"red",padding:"0 5px"}}>*</small>):(" ")}
        </label>
      <input
        className={className}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        style={style}
        disabled={disabled}
        required={required}
      />
      <p
        className="input_error"
        style={{
          visibility: `${error != " " ? "unset" : "hidden"}`,
        }}
      >
        {error}
      </p>
    </div>
  );
};

Input.propTypes = {
  label:PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.oneOf(["text", "email", "password", "number"]).isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string,
  value: PropTypes.string,
  style: PropTypes.object,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  error: PropTypes.string,
};

export default Input;
