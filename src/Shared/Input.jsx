import React from 'react'

const Input = (props) => {

    const {type, name, id, placeholder, className, onChange, required} = props

  return (
    <><input 
    type={type || "text"}
    name={name || null}
    id={id || null}
    placeholder={placeholder || null}
    className={className || null}
    onChange={onChange || null}
    required={required || false}
    />
    <br/></>
    
  )
}

export default Input