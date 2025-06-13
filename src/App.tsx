import './App.css'
import BottomGrid from './components/BottomGrid'
import Footer from './components/Footer'
import GridSection from './components/GridSection'
import Header from './components/Header'
import Testimonials from './components/Testimonials'

function App() {

  return (
    <div className="page-width">
      <Header />
      <GridSection />
      <Testimonials />
      <BottomGrid />
      <Footer />
    </div>
  )
}

export default App
