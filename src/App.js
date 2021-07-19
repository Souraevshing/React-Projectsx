import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

//To render the values even if browser is refreshed.
const getLocalStorage = () => {
  let list = localStorage.getItem('list')
  if (list) {
    return (list = JSON.parse(localStorage.getItem('list')))
  } else {
    return []
  }
}

function App() {
  const [name, setName] = useState('')
  const [list, setList] = useState(getLocalStorage())
  const [isEditing, setIsEditing] = useState(false)
  const [editId, setEditId] = useState(null)
  const [alert, setAlert] = useState({
    show: false,
    msg: '',
    type: '',
  })

  const submitButton = (e) => {
    e.preventDefault()
    if (!name) {
      showAlert(true, 'danger', 'Please enter some text.')
    } else if (name && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === editId) {
            return { ...item, title: name }
          }
          return item
        })
      )
      setName('')
      setEditId(null)
      setIsEditing(false)
      showAlert(true, 'success', 'Item edited.')
    } else {
      showAlert(true, 'success', 'Successfully added to list')
      const newItems = { id: new Date().getTime().toString(), title: name }
      setList([...list, newItems])
      setName('')
    }
  }

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list))
  }, [list])

  const showAlert = (show = false, type = '', msg = '') => {
    setAlert({ show, type, msg })
  }

  const clearList = () => {
    showAlert(true, 'danger', 'List Empty')
    setList([])
  }

  const removeItem = (id) => {
    showAlert(true, 'danger', 'Item removed')
    setList(list.filter((item) => item.id !== id))
  }

  const editItem = (id) => {
    const selectedItem = list.find((item) => item.id === id)
    setIsEditing(true)
    setEditId(id)
    setName(selectedItem.title)
  }

  return (
    <section className='section-center'>
      <form className='grocery-form' onSubmit={submitButton}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} />}
        <h3>Todo</h3>
        <div className='form-control'>
          <input
            type='text'
            className='todo'
            placeholder='Enter something to add'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type='submit' className='submit-btn'>
            {isEditing ? 'edit' : 'submit'}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className='grocery-container'>
          <List items={list} removeItem={removeItem} editItem={editItem} />
          <button className='clear-btn' onClick={clearList}>
            Clear
          </button>
        </div>
      )}
    </section>
  )
}

export default App
