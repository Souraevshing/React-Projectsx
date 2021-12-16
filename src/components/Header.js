/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react'
//import { findRenderedComponentWithType } from 'react-dom/test-utils'
import {
  selectUserName,
  //selectUserPhoto,
  setUserLogin,
  setSignOut,
} from '../features/Users/UserSlice'
import { useSelector, useDispatch } from 'react-redux'
import { auth, provider } from '../Firebase'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

const Header = () => {
  const userName = useSelector(selectUserName)

  //const userPhoto = useSelector(selectUserPhoto)

  const dispatch = useDispatch()

  const history = useHistory()

  const SignIn = () => {
    auth.signInWithPopup(provider).then((res) => {
      let user = res.user
      dispatch(
        setUserLogin({
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
        })
      )
      history.push('/')
    })
  }

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(
          setUserLogin({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
          })
        )
        history.push('/')
      }
    })
  })

  const SignOut = () => {
    auth.signOut().then(() => {
      dispatch(setSignOut())
      history.push('/login')
    })
  }

  return (
    <Nav>
      <Logo src='/images/logo.svg' />
      {!userName ? (
        <LoginContainer>
          <Login onClick={SignIn}>login</Login>
        </LoginContainer>
      ) : (
        <>
          <NavMenu>
            <a>
              <img src='/images/home-icon.svg' alt='' />

              <span>HOME</span>
            </a>
            <a>
              <img src='/images/search-icon.svg' alt='' />

              <span>SEARCH</span>
            </a>
            <a>
              <img src='/images/watchlist-icon.svg' alt='' />

              <span>ORIGINALS</span>
            </a>
            <a>
              <img src='/images/movie-icon.svg' alt='' />

              <span>MOVIES</span>
            </a>
            <a>
              <img src='/images/series-icon.svg' alt='' />

              <span>SERIES</span>
            </a>
          </NavMenu>

          <UserImage onClick={SignOut} src='/images/profile.jpg' />
        </>
      )}
    </Nav>
  )
}

export default Header

const Nav = styled.nav`
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
  overflow-x: hidden;
`

const Logo = styled.img`
  width: 80px;
  display: flex;
  align-items: center;
`

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;
  align-items: center;
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;
    img {
      height: 25px;
    }
    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;

      &:after {
        content: '';
        height: 2px;
        background: whitesmoke;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform: scaleX(0);
      }
    }

    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`
const UserImage = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
  background-color: black;
`
const Login = styled.div`
  border: 1px solid #f9f9f9;
  padding: 8px 16px;
  border-radius: 4px;
  text-transform: uppercase;
  background-color: rgba(0, 0, 0, 0.6);
  transition: all 0.2s ease 0s;
  cursor: pointer;

  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`
const LoginContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`
