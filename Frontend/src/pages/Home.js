import React from 'react'
import Header from "../components/Header"
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Findyourcar from '../components/Findyourcar'
import Cars from '../components/Cars'
import Comments from '../components/Comments'
import About from '../components/About'
import Benifits from '../components/Benifits'



const Home = () => {
  return (
    <div>
      <Header></Header>
      <Hero></Hero>
      <About></About>
      <Findyourcar></Findyourcar>
      <Cars></Cars>
      <Benifits></Benifits>
      <Comments></Comments>
      <Footer></Footer>
    </div>
  )
}

export default Home