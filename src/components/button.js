import React from 'react'
import propTypes from 'prop-types'

const button = (props) => {
    return (
        <button onClick={props.showtask} className='btn' style={{backgroundColor:props.color}}>{props.text}</button>
    )
}

button.defaultProps={
    color:'steelblue',
}

button.propTypes={
    text:propTypes.string,
    color:propTypes.string,
    onclick:propTypes.func,
}

export default button
