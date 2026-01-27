import { useState, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Outlet } from "react-router";

const RootElement: React.FC = () => {
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
    <main className="page-width">
      <Header isSticky={isSticky} />
      <Outlet />
      <Footer />
    </main>
  );
}

export default RootElement;