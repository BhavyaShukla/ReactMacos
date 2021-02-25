import React,{useState} from "react";
import Mwindow from "./Mwindow";
import Docks from "./Docks";
import maclogo from "./images/blackapple.png"
const MainPage = () => {
  const [showWindow,setWindowShow]=useState(false)
 
  return (
    <div className="App">
      <nav><img src={maclogo} width="22px" height="25px" style={{margin:"4px 10px"}} alt=""/></nav>
      <div className="Mwin1">
       {showWindow && <Mwindow showWindow setWindowShow={setWindowShow}/>} 
       
      </div>
      <div className="Mwin2">
      
      </div>

      <Docks showWindow setWindowShow={setWindowShow}  />
    </div>
  );
};
export default MainPage;
