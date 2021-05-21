import PropTypes from 'prop-types'
import Button from './button'
import React  from 'react';

const Header = ({title}) => {
    const onclick=()=>{
        console.log('Hai');
    }

    return (
        <header className="header">
            <h1> {title} </h1>
            <Button onclick={onclick} color="green" text="add"/>
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
