import React from 'react'

function Input(props) {

  const { attribute, handleChange, param } = props

  return (
    <div>
      <input
        id={ attribute.id }
        name={ attribute.name }
        placeholder={ attribute.placeholder }
        type={ attribute.type }
        onChange={ (e) => handleChange(e.target.name, e.target.value) }
        className={ param ? 'input__error' : 'input__login' }
      />
    </div>
  )
}

export default Input