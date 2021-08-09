import React from 'react'
import PropTypes from 'prop-types'

const Button = ({type, name}) => {
    return (
        <button type={type}>{name}</button>
    )
}

Button.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string.isRequired
}

Button.defaultProps = {
  type: 'button',
  name: 'Dummy Button'
}

export default Button
