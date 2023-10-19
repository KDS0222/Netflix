import Backdrop from "./Backdrop";
import ReactDOM from "react-dom";
import Overlay from "./Overlay";

function Modal(props) {

  
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, document.getElementById("backdrop"))}
      {ReactDOM.createPortal(<Overlay />, document.getElementById("overlay"))}
    </>
  );
}

export default Modal;
