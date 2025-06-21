import { useEffect, useState } from 'react'
import './App.css'
import BottomGrid from './components/BottomGrid'
import Footer from './components/Footer'
import GridSection from './components/GridSection'
import Header from './components/Header'
import Testimonials from './components/Testimonials'
import MenuBar from './components/MenuBar'

function App() {
  const [isSticky, setIsSticky] = useState<boolean>(false);

  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY > 56) {
        setIsSticky(true);
      } else if( window.scrollY <= 45) {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <div className="page-width">
      {isSticky&& 
            (<div className="sticky top-1 z-5 bg-[#3ebfffce] backdrop-blur-md">
                <MenuBar isSticky={isSticky}  /> 
            </div>) }
      <Header isSticky={isSticky} />
      <GridSection />
      <Testimonials />
      <BottomGrid />
      <Footer />
    </div>
  )
}

export default App
