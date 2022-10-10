import { useEffect, useState } from 'react'
import { About } from './components/AboutVetic'
import { BookingAppointment } from './components/BookingAppointment'
import { ClientReviews } from './components/ClientReviews'
import { Footer } from './components/Footer'
import { Galery } from './components/Galery'
import { Grooming } from './components/GroomingService'
import { Header } from './components/Header'
import { OurServices } from './components/OurServices'
import { GlobalStyle } from './styles/globals'


function App() {
  const [scrooly, setScroolY] = useState(0)

  document.onscroll = () => {
    setScroolY(document.documentElement.scrollTop)
    console.log(scrooly)
  }
  return (
    <>
      <GlobalStyle/>
      <Header />
      <BookingAppointment />
      <OurServices scroolPosition={scrooly}/>
      <About />
      <Galery scroolPosition={scrooly}/>
      <ClientReviews />
      <Grooming />
      <Footer />
    </>
  )
}

export default App
