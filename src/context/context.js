import React, { useState, useEffect } from 'react'
import mockUser from './mockData.js/mockUser'
import mockRepos from './mockData.js/mockRepos'
import mockFollowers from './mockData.js/mockFollowers'
import axios from 'axios'

const rootUrl = 'https://api.github.com'

const GithubContext = React.createContext()

const GithubProvider = ({ children }) => {
  const [githubUser, setGithubUser] = useState(mockUser)
  const [repos, setRepos] = useState(mockRepos)
  const [followers, setFollowers] = useState(mockFollowers)
  const [requests, setRequests] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState({ show: false, msg: '' })

  const searchUser = async (user) => {
    toggleError()
    setIsLoading(true)
    const res = await axios(`${rootUrl}/users/${user}`).catch((err) =>
      console.log(err)
    )
    if (res) {
      setGithubUser(res.data)
      const { login, followers_url } = res.data

      axios(`${rootUrl}/users/${login}/repos?per_page=100`).then((res) =>
        setRepos(res.data)
      )

      axios(`${followers_url}?per_page=100`).then((res) =>
        setFollowers(res.data)
      )
    } else {
      toggleError(true, 'No user found!')
    }
    checkReq()
    setIsLoading(false)
  }

  const checkReq = () => {
    axios(`${rootUrl}/rate_limit`)
      .then((data) => {
        console.log(data)
        let {
          rate: { remaining },
        } = data
        setRequests(remaining)
        if (remaining === 0)
          toggleError(true, 'Sorry!, request limit exceeded.')
      })
      .catch((err) => console.log(err))
  }

  function toggleError(show = false, msg = '') {
    setError({ show, msg })
  }

  useEffect(checkReq, [])

  // useEffect(() => {
  //   searchUser('souraevshing')
  // }, [])

  return (
    <GithubContext.Provider
      value={{
        githubUser,
        repos,
        followers,
        requests,
        error,
        searchUser,
        isLoading,
      }}
    >
      {children}
    </GithubContext.Provider>
  )
}

export { GithubContext, GithubProvider }