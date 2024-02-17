import './App.css'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { RiLogoutBoxLine } from 'react-icons/ri'

export default function Navbar() {
  const location = useLocation()

  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Hey abc!
      </Link>
      <ul>
        <CustomLink to="/pricing" location={location}>
          <RiLogoutBoxLine style={{ marginRight: '0.5rem' }} />
          LOG OUT
        </CustomLink>
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, location, ...props }) {
  const isActive = to === location.pathname

  return (
    <li className={isActive ? 'active' : ''}>
      <NavLink to={to} {...props}>
        {children}
      </NavLink>
    </li>
  )
}
