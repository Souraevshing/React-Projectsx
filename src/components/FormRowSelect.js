import React from 'react'

const FormRowSelect = ({
  status,
  labelText,
  name,
  handleChange,
  list,
  value,
}) => {
  return (
    <div className='form-row'>
      <label htmlFor={labelText} className='form-label'>
        {name || labelText}
      </label>
      <select
        name={name}
        id={name}
        value={value}
        onChange={handleChange}
        className='form-select'
      >
        {list.map((item, id) => {
          return (
            <option key={id} value={item}>
              {item}
            </option>
          )
        })}
      </select>
    </div>
  )
}

export default FormRowSelect
