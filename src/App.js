import React from 'react'
import Header from './Header'
import Section1 from './section1/Global'
import LogoGrid from './LogoSection/LogoGrid'
import ExpertiseSection from './Section3/ExpertiseSection'
import ContactSection from './section4/ContactSection'
import Visual from './section5/VisualImpact'
import Footer from './footer/Footer'
const App = () => {
  return (

    <div className=''>
      <Header />
      <Section1 />
      <LogoGrid />
      <ExpertiseSection />
      <ContactSection />
      <Visual />
      <Footer />
    </div>
  )
}

export default App
