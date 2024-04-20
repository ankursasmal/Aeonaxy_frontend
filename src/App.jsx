 import React from 'react'
import Nav from './components/Nav'
import LargeText from './components/LargeText'
import TwoSeperate from './components/TwoSeperate'
import BrownColorpart from './components/BrownColorpart'
import Profile from './components/Profile'
import Over100_Milion from './components/Over100_Milion'
import GreenColorPart from './components/GreenColorPart'
import GreenColorTwoPart from './components/GreenColorTwoPart'
import AppSection from './components/AppSection'
import Blog from './components/Blog'
import Cube from './components/Cube'
import Footer from './components/Footer'
 
 function App() {
   return (
     <div>
      <Nav/>
      <LargeText/>
      <TwoSeperate/>
      <div style={{backgroundColor:'#fad2a7',padding:'0.1px '}}> 
      <BrownColorpart t1="A living network of curious minds." t2="Anyone can write on Medium. Thought-leaders, journalists, experts, and individuals with unique perspectives share their thinkina here. You'll find pieces by independent writers from around the globe, stories we feature and leading authors, and smart takes on our own suite of blogs and publications"/>
      <Profile/>
      </div>
      <Over100_Milion/>
      <GreenColorPart/>
      <GreenColorTwoPart/>
      <AppSection/>
      <Blog/>
      <Cube/>
      <Footer/>
     </div>
   )
 }
 
 export default App
