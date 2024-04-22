import PropTypes from 'prop-types'
import './button.css'
const Button = (
  {className, 
  type, 
  buttonName
}) => {
  return (
    <div>
      <button type={type} className={className}>
        {buttonName}
      </button>
    </div>
  );
};
Button.propTypes={
    className:PropTypes.string,
    type:PropTypes.string,
    buttonName:PropTypes.string,

}

export default Button;
