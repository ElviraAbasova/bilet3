import React from 'react'

import Hero from './components/Hero'
import "./home.scss"
import AboutChef from './components/AboutChef'
import Menu from './components/Menu'
import Guests from './components/Guests'

const Home = () => {
  return (
    <>
    <Hero/>
    <AboutChef/>
    <Menu/>
    <Guests/>

    </>
  )
}

export default Home