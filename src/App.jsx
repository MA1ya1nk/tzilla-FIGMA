import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Help from './components/Help'
import Support from './components/Support'
import Leaderboard from './components/Leaderboard'
import Activity from './components/Activity'
import Story from './components/Story'

function App() {
  

  return (
    <>
      <Navbar />
      <Hero />
      <Help/>
      <Support/>
      <Leaderboard/>
      <Activity/>
      <Story/>
    </>
  )
}

export default App
