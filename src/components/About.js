import React from 'react'
import api from '../assets/icons/api.svg'
import contract from '../assets/icons/contract.svg'
import computer from '../assets/icons/computer.svg'
import graph from '../assets/icons/graph.svg'
import wallet2 from '../assets/icons/wallet2.svg'
import Skillcard from './Skillcard'

const skills = [
  {
    icon: contract, 
    title: "ERC20 Token",
    about: "Develop customized ERC20 token smart contract."
  },
  {
    icon: contract, 
    title: "Initial Coin Offerings (ICO)",
    about: "Launch your ICO token and crowdsale smart contract for your project."
  },
  {
    icon: graph, 
    title: "Decentralized Exchange",
    about: "Develop and launch Sushiswap type exchange"
  },
  {
    icon: wallet2, 
    title: "Blockchain Wallet",
    about: "Build an ERC20 smart wallet with Wallet Connect functionality."
  },
  {
    icon: computer, 
    title: "Full Stack Dapp",
    about: "Full stack decentralized app w/ front end."
  },
  {
    icon: api, 
    title: "Chainlink Validator Node",
    about: "Build and deploy Chainlink validator node."
  },

]

const About=()=> {
  return (
    <div classname="about">
      <h6 className="about_intro">
      My background is Chemical Engineering and over the last two years I have been working on decentralized applications with different levels of complexity and various use cases. Decentralized app developer seeking to use my skills in dapp developement and Agile project management to meet business needs within a forward-moving company.
      </h6>
      <div className="container about_container">
        <h6 className="about_heading">What I offer:</h6>
        <div className="row">
          {
            skills.map(skill=>
              <Skillcard skill={skill}/>
              )
          }
        </div>

      </div>

      
    </div>
  )
}

export default About
