import React, { useState } from 'react'
import { Window, TitleBar, Text } from 'react-desktop/macOs';
import Folder from './Folder'
import Draggable from 'react-draggable';
import { css, jsx } from '@emotion/react'

const Mwindow = ({ color }) => {
    const [show, setShow] = useState(true)
    const onClick = () => setShow(false)
    // const window = css`

    //     margin:1em auto;
    //     box-shadow: none !important;
        
    //     border:1px solid rgb(240, 240, 240);
    //     visibility:${show} !important;
    // `;

    return (
        <>
            { show ? <Draggable
                handle=".handle"
            >

                <Window
                    color={color}
                    // theme={theme}
                    chrome
                    height="300px"
                    width="500px"
                    className={window}
                >
                    <TitleBar onCloseClick={onClick} className="handle" title="untitled" controls />

                    {/* <Text color={theme === 'dark' ? 'white' : '#333'}>Portfolio</Text> */}
                    <Folder label="Tesssssssddy" />
                    <Folder label="Maddy" />



                </Window>

            </Draggable> : null
            }
        </>
    )
}
Mwindow.defaultProps = {
    color: '#cc7f29',
    theme: 'light'
}
export default Mwindow