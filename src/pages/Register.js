import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { Logo } from '../components'
import Wrapper from '../assets/wrappers/RegisterPage'
import Form from '../components/Form'
import { loginUser, registerUser } from '../features/users/UserSlice'

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
}

const Register = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [formData, setFormData] = useState(initialState)

  const { user, isLoading } = useSelector((store) => store.user)

  const handleChange = (e) => {
    const name = e.target.name
    setFormData({ ...formData, [name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { name, email, password, isMember } = formData
    if (!email || !password || (!isMember && !name)) {
      toast.error('All fields are required')
      return
    }
    if (isMember) {
      dispatch(loginUser({ email, password }))
      return
    }
    dispatch(registerUser({ name, email, password }))
  }

  const changeUserType = () => {
    setFormData({ ...formData, isMember: !formData.isMember })
  }

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate('/')
      }, 5000)
    }
  }, [navigate, user])

  return (
    <Wrapper className='full-page'>
      <form action='' className='form' onSubmit={handleSubmit}>
        <Logo />
        <h3>{formData.isMember ? 'LOGIN' : 'REGISTER'}</h3>
        {!formData.isMember && (
          <Form
            type='text'
            name='name'
            formData={formData.name}
            handleChange={handleChange}
          />
        )}
        <Form
          type='email'
          name='email'
          formData={formData.email}
          handleChange={handleChange}
        />
        <Form
          type='password'
          name='password'
          formData={formData.password}
          handleChange={handleChange}
        />
        <button type='submit' className='btn btn-block' disabled={isLoading}>
          {isLoading ? 'LOADING...' : 'SUBMIT'}
        </button>
        <p>
          {formData.isMember ? 'Create an Account' : 'Already registered'}
          <button type='button' onClick={changeUserType} className='member-btn'>
            {formData.isMember ? 'REGISTER' : 'LOGIN'}
          </button>
        </p>
      </form>
    </Wrapper>
  )
}

export default Register
