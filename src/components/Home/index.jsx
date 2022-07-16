import './index.scss'
import LogoTitle from '../../assets/images/logo-s.png'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['a', 'h', 'm', 'u', 't']
  const jobArray = [
    'f',
    'r',
    'o',
    'n',
    't',
    'e',
    'n',
    'd',
    '',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
  ]
  
  // It is key to fully understand the component flow of 
  // functional components.
  // What are effects? Examples are:
  // Fetching data, reading from local storage, registering 
  // and deregistering event listeners
  // Effects run after every render cycle.
  // You should ensure that components are not re-render 
  //unnecessarily.
  // Always use "useEffect" for asynchronous tasks
  // Use multiple effects to separate concerns
  // "UseEffect" are invoked after render. To be precise,
  // It runs both after the first render and after every update.
  // Common side exffects:
    // Making a request to an API for data from a backend server
    // To interact with browser APIs (that is, to use "document" or
      // "window" directly)
    // Using unpredictable timing functions like "setTimeout" or "setInterval"
    // "useEffect" is a tool that lets us interact with the outside world but 
    // not affect the rendering or performance of the component that it's in.
    // Second argument is dependency array. This will do is that it will check
    // and see if a value has changed between renders. If there is no dependency
    // array, then it will run after every render.
  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m</span>
          <img src={LogoTitle} alt="developer" />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={20}
          />
        </h1>
        <h2> Junior Web Developer </h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
      <Logo />
    </div>
  )
}

export default Home
