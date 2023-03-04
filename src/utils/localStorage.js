const addUserToLocalStorage = (user) => {
  localStorage.setItem('user', JSON.stringify(user))
}

const removeUserFromLocalStorage = (user) => {
  localStorage.removeItem('user')
}

const getUserFromLocalStorage = () => {
  const result = localStorage.getItem('user')
  const user = result ? JSON.parse(result) : null
  return user
}

export {
  addUserToLocalStorage,
  removeUserFromLocalStorage,
  getUserFromLocalStorage,
}
