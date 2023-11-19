import Backdrop from "./Backdrop";
import ReactDOM from "react-dom";
import Overlay from "./Overlay";
import { useLocation } from "react-router-dom";

function Details(props) {
  const location = useLocation();
  const stateData = location.state;
  
  return (
    <>

      {ReactDOM.createPortal(<Backdrop />, document.getElementById("backdrop"))}
      {ReactDOM.createPortal(<Overlay id={props.id} Data={stateData} />, document.getElementById("overlay"))}
    </>
  );
}

export default Details;
