import Backdrop from "./Backdrop";
import ReactDOM from "react-dom";
import Overlay from "./Overlay";
import { Navigate, useLocation, useNavigate, useParams, useSearchParams } from "react-router-dom";
import Main from "../Main";

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
