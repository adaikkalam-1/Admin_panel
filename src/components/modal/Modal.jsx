import "./modal.css";
import PropTypes from "prop-types";
const Modal = ({title, content, close}) => {
  return (
    <div className="modal">
      <div className="modal_container">
        <div className="modal_close" onClick={() => close(false)}>
          &times;
        </div>
        <div className="modal_title">{title}</div>
        <div className="modal_content">{content}</div>
        {/* <div className="modal_footer">
          <button className="btn" onClick={() => close(false)}>
            Close
          </button>
        </div> */}
      </div>
    </div>
  );
  
};
Modal.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
    close: PropTypes.func,

  }

export default Modal;
