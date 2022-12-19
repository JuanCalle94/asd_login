import React from 'react'

function Label(props) {

  const { text } = props

  return (
    <div>
      <label>
        { text }
      </label>
    </div>
  )
}

export default Label