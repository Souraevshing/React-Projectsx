import React from 'react'

const Form = ({ handleChange, type, name, labelText, value }) => {
  return (
    <div className='form-row'>
      <label htmlFor={name} className='form-label'>
        {labelText || name}
      </label>
      <input
        className='form-input'
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
      />
    </div>
  )
}

export default Form
