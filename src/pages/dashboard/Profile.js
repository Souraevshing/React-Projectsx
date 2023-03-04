import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'

import { Form } from '../../components/index'
import Wrapper from '../../assets/wrappers/DashboardFormPage'
import { updateUser } from '../../features/users/UserSlice'

const Profile = () => {
  const dispatch = useDispatch()

  const { isLoading, user } = useSelector((state) => state.user)
  const [userData, setUserData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    lastName: user?.lastName || '',
    location: user?.location || '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const { name, email, lastName, location } = userData

    if (!name || !email || !lastName || !location) {
      toast.error('All fields are mandatory.')
      return
    }
    dispatch(updateUser(userData))
  }

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value })
  }

  return (
    <Wrapper>
      <form className='form' onSubmit={handleSubmit}>
        <h3>PROFILE</h3>
        <div className='form-center'>
          <Form
            type='text'
            name='name'
            value={userData.name}
            labelText='FirstName'
            handleChange={handleChange}
          />

          <Form
            type='text'
            name='lastName'
            value={userData.lastName}
            handleChange={handleChange}
          />

          <Form
            type='email'
            name='email'
            value={userData.email}
            handleChange={handleChange}
          />

          <Form
            type='text'
            name='location'
            value={userData.location}
            handleChange={handleChange}
          />
          <button className='btn btn-block' type='submit' disabled={isLoading}>
            {isLoading ? 'LOADING' : 'SAVE'}
          </button>
        </div>
      </form>
    </Wrapper>
  )
}

export default Profile
