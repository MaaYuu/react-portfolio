import './index.scss'
import AnimatedLetters from '../../AnimatedLetters'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faGitAlt, faHtml5, faJsSquare, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 3000)
  }, [])
  
  return (
    <>
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
            idx={15}
          />
        </h1>
        <p>
        I'm very ambitious front-end developer looking for a role in
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
        </p>
        <p>
        I'm quietly confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.
        </p>
        <p>
        If I need to define myself in one sentence that would be a family
            person, a football fanatic, and tech-obsessed!!!
        </p>
      </div>

      <div className="stage-cube-cont">
        <div className="cubespinner">
          <div className="face-1">
            <FontAwesomeIcon icon={faHtml5} color='#F06529'/>
          </div>
          <div className="face-2">
            <FontAwesomeIcon icon={faCss3} color='#28A4D9'/>
          </div>
          <div className="face-3">
            <FontAwesomeIcon icon={faReact} color='#5ED4F4'/>
          </div>
          <div className="face-4">
            <FontAwesomeIcon icon={faJsSquare} color='#EFD81D'/>
          </div>
          <div className="face-5">
            <FontAwesomeIcon icon={faGitAlt} color='#EC4D28'/>
          </div>
          <div className="face-6">
            <FontAwesomeIcon icon={faNodeJs} color='green'/>
          </div>
        </div>
      </div>

    </div>
    <Loader type="pacman" />
    </>
  )
}

export default About