import React, { useEffect, useState } from 'react'
import data from './Data'
import Component from './Component'

const getLocalStorage = () => {
  let mode = 'light-theme'
  if (localStorage.getItem('mode')) {
    mode = localStorage.getItem('mode')
  }
  return mode
}

const Darkmode = () => {
  const [mode, setMode] = useState(getLocalStorage())
  const toggle = () => {
    if (mode === 'light-theme') {
      setMode('dark-theme')
    } else {
      setMode('light-theme')
    }
  }

  useEffect(() => {
    document.documentElement.className = mode
    localStorage.setItem('mode', mode)
  }, [mode])

  return (
    <main>
      <nav>
        <div className='nav-center'>
          <h1>Darkmode</h1>
          <button className='btn' onClick={toggle}>
            Toggle
          </button>
        </div>
      </nav>
      <section className='articles'>
        {data.map((items) => {
          return <Component key={items.id} {...items} />
        })}
      </section>
    </main>
  )
}

export default Darkmode
