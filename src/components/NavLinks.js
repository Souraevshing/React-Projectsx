import { NavLink } from 'react-router-dom'

import links from '../utils/links'

const NavLinks = ({ toggleSidebar }) => {
  return (
    <div className='nav-links'>
      {links.map((link) => {
        const { id, path, text, icon } = link

        return (
          <NavLink
            to={path}
            className={({ isActive }) => {
              return isActive ? 'nav-link active' : 'nav-link'
            }}
            key={id}
            onClick={toggleSidebar}
            end
          >
            <span className='icon'>{icon}</span>
            <span>{text}</span>
          </NavLink>
        )
      })}
    </div>
  )
}

export default NavLinks
