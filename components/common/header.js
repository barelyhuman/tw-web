import { useEffect } from 'react'
import feather from 'feather-icons'
import Themer from '@barelyreaper/themer'

export default function Header() {
  useEffect(() => {
    initThemer()
  }, [])

  function initThemer() {
    new Themer({ trigger: document.getElementById('darkModeToggle') })
  }

  return (
    <>
      <header>
        <div className="flex flex-center">
          <div>
            <h3>
              <a href="/">TillWhen</a>
              <br />
              <small className="fw-normal no-wrap">Just a Time Tracker</small>
            </h3>
          </div>
          <div className="ml-auto">
            <button id="darkModeToggle" className="no-border icon"></button>
          </div>
        </div>
      </header>
    </>
  )
}
