import PropTypes from 'prop-types'
import './input.css'
const Input = ({
  className,
  type,
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
      <input
        className={className}
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
          visibility: `${error != "" ? "unset" : "hidden"}`,
        }}
      >
        {error}
      </p>
    </div>
  );
};
Input.propTypes ={
    className:PropTypes.string,
    type:PropTypes.string,
    placeholder:PropTypes.string,
    onChange:PropTypes.func,
    value:PropTypes.string,
    style:PropTypes.object,
    disabled:PropTypes.bool,
    required:PropTypes.bool,
    error:PropTypes.string,

    
    
}

export default Input;
