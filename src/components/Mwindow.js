import React, { useState } from "react";
import { Window, TitleBar, Text } from "react-desktop/macOs";
import Folder from "./Folder";
import Draggable from "react-draggable";

const Mwindow = ({ color, showWindow ,setWindowShow }) => {
 
  const [resize, setResize] = useState(false);
  const onClick = () => {
     setWindowShow(!showWindow) 
  }

  return (
    <>
    
        <Draggable handle=".resize">
          <Window
            color={color}
            // theme={theme}
            chrome
            className={resize ? "window" : "window active"}
          >
            <TitleBar
              onCloseClick={onClick}
              onResizeClick={()=>setResize(!resize)}
              className="resize"
              title="untitled"
              controls
            />

            {/* <Text color={theme === 'dark' ? 'white' : '#333'}>Portfolio</Text> */}
            <Folder label="Tesssssssddy" />
            <Folder label="Maddy" />
          </Window>
        </Draggable>
    
    </>
  );
};
Mwindow.defaultProps = {
  color: "#cc7f29",
  theme: "light",
};
export default Mwindow;
