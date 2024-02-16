import { useEffect, useState } from "react";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Main from "./components/main/Main";

function App() {
  const [ScrollBTN, setScrollBTN] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 115) {
        setScrollBTN(true);
      } else {
        setScrollBTN(false);
      }
    });
  }, []);
  return (
    <div className="container" id="home">
      <Header />
      <Hero />
      <div className="divider" id='portfolio' />
      <Main />
      <div className="divider" id="contact" />
      <Contact />
      <div className="divider"/>
      <Footer />

      <a style={{ opacity: ScrollBTN? 1 : 0, transition: "1s" }} href="#home">
        <button className="icon-arrow_up scroll2Top"/>
      </a>
    </div>
  );
}

export default App;
