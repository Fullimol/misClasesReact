import React from 'react'

const Button = (props) => {
const {className='btn btn-primary', text_button='boton', onClick, disabled=false} = props

  return (
    <button
    disabled={disabled}
    onClick={onClick || null}
    className={className}
    >{text_button}
    </button>
  )
}

export default Button