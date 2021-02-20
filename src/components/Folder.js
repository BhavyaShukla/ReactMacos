import React from 'react'
import logo from './images/folder.png'
import FolderLabel from './FolderLabel'
import Draggable from 'react-draggable'

const Folder = ({label,handle}) => {
    
    return (
        <Draggable
        bounds="parent"
        >
       <div className="flayout">
            
       <img className="folder"  height="40px" width="50px" src={logo} alt="logo"/>
            <FolderLabel labelo={label}/>
        </div>
        </Draggable>
    )
}

export default Folder