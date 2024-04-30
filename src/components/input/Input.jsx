import PropTypes from "prop-types";
import "./input.css";
const Input = ({
  label,
  className,
  type,
  name,
  placeholder,
  onChange,
  onFocus,
  value,
  style,
  disabled,
  required,
  error,
  accept,
  
}) => {
  console.log(value)
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
        onFocus={onFocus}
        style={style}
        disabled={disabled}
        required={required}
        accept={accept}
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
  label: PropTypes.string,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  type: PropTypes.oneOf(["text", "email", "password", "number","file"]).isRequired,
  placeholder: PropTypes.string,
  accept:PropTypes.string,
  onChange: PropTypes.func,
  onFocus:PropTypes.func,
  name: PropTypes.string,
  value: PropTypes.string,
  style: PropTypes.object,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  error: PropTypes.string,
  
};
Input.defaultProps = {
  type: "text",
  label: "top",
  size: "large",
  disabled: false,
  required: false,
  error: "",
 
};

export default Input;
