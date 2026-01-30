import React from 'react'
import Hero from './components/Hero'
import StoryTimeline from './components/StoryTimeline'
import WeddingDetails from './components/WeddingDetails'
import Countdown from './components/Countdown'
import CoupleSection from './components/CoupleSection'
import Gallery from './components/Gallery'
import RSVPForm from './components/RSVPForm'
import LoveNotes from './components/LoveNote'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Hero />
      <StoryTimeline />
      <Countdown />
      <CoupleSection />
      <WeddingDetails />
      <Gallery />
      <RSVPForm />
      <LoveNotes />
      <Footer />
    </div>
  )
}

export default App