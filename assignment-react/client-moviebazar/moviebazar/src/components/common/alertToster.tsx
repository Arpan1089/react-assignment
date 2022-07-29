//import '../../css/common.css';
// import Toast from 'react-bootstrap/Toast';
import { toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from 'react';
import '../../css/toster.css';


const AlertToster = (props: any) => {
 const  [show,setShow]= useState(true);
 const [err,setErr] = useState(props.errorMessage);
  // useEffect(() => {
  //   setShow(true);
  //    setTimeout(() => {
  //     setShow(false);
  //     if(err.length > 0){
  //       setErr(errorMessage.splice(1,1));
  //       }
    
  //   },3000)
  // },[props])
    return(
      <>
      {show &&  <div style={{position:"absolute", top:"10px", right:"10px"}}>
     {show && props.errorMessage.map((err: any) => <div className={err.type === 'error' ? 'snackbar-error' : 'snackbar-sucess'}>{err.message}</div> )
      }
     </div>}
     </>

    ); 
}
export default AlertToster;