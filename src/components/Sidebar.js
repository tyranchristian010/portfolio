import React from 'react'
import github from '../assets/icons/github.svg'
import cloud from '../assets/icons/cloud.svg'
import medium from '../assets/icons/medium.svg'
import ethereum from '../assets/icons/ethereum.svg'
import twitter from '../assets/icons/twitter.svg'
import tyimg from '../assets/icons/tyimg.jpg'
import cert from '../assets/icons/cert.pdf'
import TChristianresume from '../assets/icons/TChristianresume.pdf' 



const Sidebar = () => {
  const handleEmailMe = () => {
      window.open("mailto:tyranchristian010gmail.com")
  }
  return (
      <div className="sidebar">
          <img src={tyimg} alt="avatar" className="sidebar__avatar" />
          <div className="sidebar__name">Tyran <span>Christian</span> </div>
          <div className="sidebar__item sidebar__title">Blockchain Developer</div>
          <a href={TChristianresume} download="./TChristianresume.pdf">
              <div className="sidebar__item sidebar__resume">
                  <img src={cloud} alt="resume" className="sidebar__icon" />Download Resume
              </div>
          </a>
          <a href={cert} download="./cert.pdf">
              <div className="sidebar__item sidebar__resume">
                  <img src={ethereum} alt="resume" className="sidebar__icon" />Ethereum Dev. Cert.
              </div>
          </a>
          <figure className="sidebar__social-icons my-2">
              <a href="https://phantasmadev.medium.com/infusionft-b5aaefdfe2a"><img src={medium} alt="facebook" className="sidebar__icon mr-3" /></a>
              <a href="https://twitter.com/AfterschoolAces"><img src={twitter} alt="instagram" className="sidebar__icon" /></a>
          </figure>
          <div className="sidebar__contact">
              <div className="sidebar__item sidebar__github">
                  <a href="https://github.com/tyranchristian010"><img src={github} alt="github" className="sidebar__icon mr-3" />github</a>
              </div>
              <div className="sidebar__item">tyranchristian010gmail.com</div>
             
          </div>
          <div className="sidebar__item sidebar__email" onClick={handleEmailMe}>email me</div>
      </div>
  )
}

export default Sidebar;