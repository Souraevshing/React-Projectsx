import React, { useEffect, useState } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'

const URL = `https://course-api.com/react-tabs-project`

function App() {
  const [loading, setLoading] = useState(true)
  const [jobs, setJobs] = useState([])
  const [value, setValue] = useState(0)

  const fetchJobs = async () => {
    const res = await fetch(URL)
    const jobsList = await res.json()
    setLoading(false)
    setJobs(jobsList)
  }

  useEffect(() => {
    fetchJobs()
  }, [])

  if (loading) {
    return (
      <section className='section loading'>
        <h1>Loading...</h1>
      </section>
    )
  }

  const { company, dates, duties, title } = jobs[value]

  return (
    <section className='section'>
      <div className='title'>
        <h1>Experience</h1>
        <div className='underline'></div>
      </div>
      <div className='jobs-center'>
        <div className='btn-container'>
          {jobs.map((item, id) => {
            return (
              <button key={item.id} onClick={() => setValue(id)}>
                {item.company}
              </button>
            )
          })}
        </div>
        <article className='job-info'>
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className='job-date'>{dates}</p>
          {duties.map((duty, id) => {
            return (
              <div key={id} className='job-desc'>
                <FaAngleDoubleRight className='job-icon'></FaAngleDoubleRight>
                <p>{duty}</p>
              </div>
            )
          })}
        </article>
      </div>
    </section>
  )
}

export default App
