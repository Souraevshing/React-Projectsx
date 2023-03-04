import { useState } from 'react'
import { FaAlignLeft, FaUserCircle, FaCaretDown } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'

import Wrapper from '../assets/wrappers/Navbar'
import { logoutUser, toggleSidebar } from '../features/users/UserSlice'
import Logo from './Logo'

const Navbar = () => {
  const dispatch = useDispatch()

  const [logout, setLogout] = useState(false)
  const { user } = useSelector((store) => store.user)

  const toggle = () => {
    dispatch(toggleSidebar())
  }

  return (
    <Wrapper>
      <div className='nav-center'>
        <button type='button' className='toggle-btn' onClick={toggle}>
          <FaAlignLeft />
        </button>
        <div>
          <Logo />
          <h3 className='logo-text'>Dashboard</h3>
        </div>
        <div className='btn-container'>
          <button
            type='button'
            className='btn'
            onClick={() => setLogout(!logout)}
          >
            <FaUserCircle />
            {user?.name}
            <FaCaretDown />
          </button>
          <div className={logout ? 'dropdown show-dropdown' : 'dropdown'}>
            <button
              type='button'
              className='dropdown-btn'
              onClick={() => dispatch(logoutUser())}
            >
              LOGOUT
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default Navbar
