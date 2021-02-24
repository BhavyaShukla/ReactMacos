import React,{useState} from 'react'
import logo from './images/folder.png'
import FolderLabel from './FolderLabel'
import Draggable from 'react-draggable'

const Folder = ({label,handle}) => {
    const [showhig,sethig]=useState(true);
    const onresize =()=> {
        sethig(!showhig)
        console.log(showhig)
    }
    return (
        <Draggable
        bounds="parent"
        >
       <div onClick={onresize} className={showhig ?"flayout":"flayout active"}>
            
       <img className="folder"  height="40px" width="50px" src={logo} alt="logo"/>
            <FolderLabel labelo={label}/>
        </div>
        </Draggable>
    )
}

export default Folder