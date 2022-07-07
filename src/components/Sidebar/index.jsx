import './index.scss'
import { Link, NavLink } from 'react-router-dom'

// We can import images directly from the files like this.
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

function Sidebar() {
  return (
    <div className="nav-bar">
      {/*
       "Link" provides a link to '/' route 
       "Inside "Link", we attached the images
      */}
      <Link className="logo" to="/">
        <img src={LogoS} alt="logo" />
        <img className="sub-logo" src={LogoSubtitle} alt="logo_subtitle" />
      </Link>
      <nav>
        {/* When true, "exact" means that active class/style will only be applied if the location is matched exactly*/}
        <NavLink exact="true" activeClassName="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        {/* NavLink for about*/}
        <NavLink
          exact="true"
          activeClassName="active"
          className="about-link"
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>

        <NavLink
          exact="true"
          activeClassName="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>
      <ul>
        <li>
          {/*
          target='_blank' means it should be opened in a new browser tab.
          rel='noreferrer' hides referrer information when the link is clicked.
          */}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/mahyuksel/"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>
        <li>
          {/*
          target='_blank' means it should be opened in a new browser tab.
          rel='noreferrer' hides referrer information when the link is clicked.
          */}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/maayuu"
          >
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
