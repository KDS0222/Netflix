import Backdrop from "./Backdrop";
import ReactDOM from "react-dom";
import Overlay from "./Overlay";
import { Navigate, useLocation, useNavigate, useParams } from "react-router-dom";
import Main from "../Main";

function Details(props) {
  const location = useLocation();
  const stateData = location.state;

  console.log(stateData);


  
  
  return (
    <>

      {ReactDOM.createPortal(<Backdrop />, document.getElementById("backdrop"))}
      {ReactDOM.createPortal(<Overlay Data={stateData} />, document.getElementById("overlay"))}
    </>
  );
}

export default Details;
