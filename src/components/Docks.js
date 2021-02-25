import React from 'react'
import Dock from "react-osx-dock";
import finder from "./images/finder.png"
import appstore from './images/appstore.png'
import atom from './images/atom.png'
import chrome from './images/chrome.png'
import preview from './images/preview.png'
import terminal from './images/terminal.png'
import settings from './images/settings.png'
import spotify from './images/spotify.png'
import steam from './images/steam.png'
import slack from './images/slack.png'
import guitarpro from './images/guitar-pro.png'
import trash from './images/trash.png'
import folder from './images/folder.png'

const Docks = ({showWindow ,setWindowShow,setShow,show} )=> {
    
    const openfolder = (item)=> {
        item === folder  &&  setWindowShow(
          prevCheck => !prevCheck
        ) 
    }
    return (
        <div className="Dcontain">
            <Dock className="docks" width={600} magnification={1} magnifyDirection="up">
             {[finder,preview, atom, slack, chrome,terminal,spotify,steam,folder,settings,trash].map((item, index) => (
              <Dock.Item className="DockItems"  key={index} onClick={()=>openfolder(item)}>
             <img  src={item} />
             </Dock.Item>
  ))}
</Dock>
<div className="txt"></div>
        </div>
    )
}
Docks.defaultProps = {
    select:false,
}
export default Docks