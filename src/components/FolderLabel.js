import React from 'react'
import PropTypes from 'prop-types'
const FolderLabel = ({labelo}) => {
    return (
        <>
            <label className="flabel"  htmlFor="">{labelo}</label>
        </>
    )
}
FolderLabel.defaultProps={
    labelo:"Hello there",
}
FolderLabel.propTypes={
    labelo:PropTypes.string
}
export default FolderLabel