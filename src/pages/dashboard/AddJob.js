import { Form, FormRowSelect } from '../../components/index'
import Wrapper from '../../assets/wrappers/DashboardFormPage'

import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { useState } from 'react'

const AddJob = () => {
  const {
    isLoading,
    position,
    company,
    jobLocation,
    jobType,
    jobTypeOptions,
    status,
    statusOptions,
    isEditing,
    editJobId,
  } = useSelector((state) => state.job)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!position || !company || !jobLocation) {
      toast.error('All fields are mandatory!')
      return
    }
  }

  const handleChange = (e) => {
    console.log(e.target.value, e.target.name)
  }

  return (
    <Wrapper>
      <form className='form'>
        <h3>{isEditing ? 'Edit Job' : 'Add Job'}</h3>
        <div className='form-center'>
          <Form
            type='text'
            name='position'
            value={position}
            handleChange={handleChange}
          />

          <Form
            type='text'
            name='company'
            value={company}
            handleChange={handleChange}
          />

          <Form
            type='text'
            name='jobLocation'
            value={jobLocation}
            labelText='Job Location'
            handleChange={handleChange}
          />

          <FormRowSelect
            type='text'
            name='status'
            labelText='Job Location'
            value={status}
            handleChange={handleChange}
            list={statusOptions}
          />

          <FormRowSelect />

          <div className='btn-container'>
            <button
              type='button'
              className='btn btn-block clear-btn'
              onClick={() => console.log('clear')}
            >
              CLEAR
            </button>
            <button
              type='button'
              className='btn btn-block submit-btn'
              onClick={() => console.log('submit')}
            >
              SUBMIT
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  )
}

export default AddJob
