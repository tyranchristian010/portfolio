import React from 'react'
import ethereum from '../assets/icons/ethereum.svg'
import js from '../assets/icons/js.svg'
import react from '../assets/icons/react.svg'
import html5 from '../assets/icons/html5.svg'
import css from '../assets/icons/css.svg'
import dot from '../assets/icons/dot.svg'
import Bar from './Bar';

const languages = [
  {
    icon: js,
    name: 'Javascript',
    level:'75'
  },
  {
    icon: ethereum,
    name: 'Solidity',
    level:'80'
  },
  {
    icon: react,
    name: 'React',
    level:'75'
  },
  {
    icon: html5,
    name: 'HTML',
    level:'45'
  },
  {
    icon: css,
    name: 'CSS',
    level:'45'
  },
]

const tools = [
  {
    icon: dot,
    name: 'Truffle',
    level:'80'
  },
  {
    icon: dot,
    name: 'Web3.js / Ether.js',
    level:'75'
  },
  {
    icon: dot,
    name: 'git',
    level:'60'
  },
  {
    icon: dot,
    name: 'Docker',
    level:'45'
  },
  {
    icon: dot,
    name: 'Azure',
    level:'45'
  },
  {
    icon: dot,
    name: 'Agile',
    level:'45'
  },
]

const Resume=()=> {
  return (
    <div className="container resume">
      <div className="row">
        <div className="col-lg-6 resume-card">
          <h4 className="resume-card_heading">
                Education
          </h4>
          <div className="resume-card_body">
            <h5 className="resume-card_title">
              Chemical Engineering B.S.
            </h5>
            <p className="resume-card_name">
              Wayne State University <br/> 1997-2003
            </p>
            <p className="resume-card_details">
            
            </p>
          </div>
        </div>
        <div className="col-lg-6 resume-card">
          <h4 className="resume-card_heading">
                Experience
          </h4>
          <div className="resume-card_body">
            <h5 className="resume-card_title">
               Blockchain Developer
            </h5>
            <p className="resume-card_name">
              Blockchain Mastery University <br/> 2018-Present
            </p>
            <p className="resume-card_details">
            Developed and tested Ethereum smart contracts with Truffle framework. Built several decentralized applications of various use cases: De-Fi, wallets, DEX, NFTs and smart contract security.
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 resume-languages">
          <h5 className="resume-language_heading">
            Languages and Frameworks
          </h5>
          <div className="resume-language_body">
            {
              languages.map(language =>
                
                <Bar value={language} />
                )
            }
          </div>
        </div>
        <div className="col-lg-6 resume-languages">
          <h5 className="resume-language_heading">
            Tools and Softwares
          </h5>
          <div className="resume-language_body">
            {
              tools.map(tool =>
                
                <Bar value={tool} />
                )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume
