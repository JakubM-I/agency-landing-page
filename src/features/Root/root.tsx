import { useState, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Outlet } from "react-router";
import { useStore } from "../../store";
import Modal from "../../components/Modal";

const RootElement: React.FC = () => {
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const isModalOpen = useStore((state) => state.modalOpen);

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
    <main className="page-width">
      <Header isSticky={isSticky} />
      <Outlet />
      <Footer /> 
      {isModalOpen && (<Modal />)}
    </main>
  );
}

export default RootElement;