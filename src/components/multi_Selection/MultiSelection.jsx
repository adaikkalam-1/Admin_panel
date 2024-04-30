import { CgClose } from "react-icons/cg"; 
import PropTypes from "prop-types";
import './multi.css'
const MultiSelection = ({value,onClick,}) => {
  return (
    <span>
        {value}
        <CgClose onClick={onClick} className="icon" />

    </span>
  )
}
MultiSelection.propTypes ={
    value:PropTypes.string.isRequired,
    onClick:PropTypes.func.isRequired,
}

export default MultiSelection