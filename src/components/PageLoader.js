import React from "react";
import aplo from "./images/usname.png";
import { TextInput } from "react-desktop/macOs";
import { Button } from 'react-desktop/macOs';
import {Link} from 'react-router-dom'
const PageLoader = () => {
  const handleChange = (e) => console.log(e.target.value);
  const logbg = {
    height: "100vh",
    width: "100vw",
    backgroundColor: "#F0F0F0",
  };
  const imgs = {
    height: "150px",
    width: "150px",
    margin:"22px",
  };
  return (
    <div style={logbg} clasName="lodbg">
      <div className="cimginp">
        <img style={imgs} className="maclogo" src={aplo} alt="" />
        <div className="textlogin">
        <TextInput
          className="textlogin"
         
          placeholder="Enter Password"
          defaultValue=""
          onChange={() => handleChange}
          width="200px"
        />
         <center><Link to="/main"><Button margin="10px 10px" color="blue" >
        Login!
        </Button></Link></center>
        </div>
      </div>
    </div>
  );
};
export default PageLoader;
