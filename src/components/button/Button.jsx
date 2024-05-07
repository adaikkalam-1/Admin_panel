import PropTypes  from 'prop-types'
import './button.css'
const Button = (
  {
  className, 
  type, 
  onClick,
  size,
  buttonName,
  icons,

}) => {
  return (
    <div>
      <button type={type} onClick={onClick}  className={`button ${size} ${className}`}>
        {buttonName}{icons}
      </button>
    </div>
  );
};
Button.propTypes={
    className:PropTypes.string,
    type:PropTypes.string,
    size:PropTypes.oneOf(["small","large","default"]),
    buttonName:PropTypes.string,
    onClick:PropTypes.func.isRequired,
    icons:PropTypes.string,

}

Button.defaultProps={
  size: "large",
  className:'',
}

export default Button;
