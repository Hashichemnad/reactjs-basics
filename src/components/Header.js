import PropTypes from 'prop-types'
import Button from './button'
import React  from 'react';

const Header = (props) => {

    return (
        <header className="header">
            <h1> {props.title} </h1>
            <Button showtask={props.showtask} color={props.btnstate?'Red':'Green'} text={props.btnstate?'Close':'Add'}/>
        </header>
    )
}

Header.defaultProps = {
    title:"Task Tracker"
}
Header.propTypes={
    title: PropTypes.string.isRequired,
}


export default Header
